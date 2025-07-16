
import { useCallback, useEffect, useMemo } from 'react';
import { useAnchorProgram } from './useAnchorProgram';
import { usePresaleStore } from '../stores/usePresaleStore';
import { BN, web3 } from '@coral-xyz/anchor';
import { PRESALE_ID, TOKEN_MINT_ADDRESS, TREASURY_WALLET, ASSOCIATED_TOKEN_PROGRAM_ID } from '../constants';
import { getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { toast } from 'sonner';
import { Buffer } from 'buffer';

export const usePresale = () => {
    const { program, wallet } = useAnchorProgram();
    const { setSaleData, setUserPurchaseRecord, setIsLoading } = usePresaleStore();

    const fetchSaleData = useCallback(async () => {
        setIsLoading(true);
        try {
            const [salePda] = web3.PublicKey.findProgramAddressSync([Buffer.from("sale"), Buffer.from(PRESALE_ID)], program.programId);
            const saleAccount = await program.account['sale'].fetch(salePda);
            setSaleData(saleAccount as any);

            if (wallet?.publicKey) {
                const [purchaseRecordPda] = web3.PublicKey.findProgramAddressSync([Buffer.from("purchase"), Buffer.from(PRESALE_ID), wallet.publicKey.toBuffer()], program.programId);
                try {
                    const record = await program.account['purchaseRecord'].fetch(purchaseRecordPda);
                    setUserPurchaseRecord(record as any);
                } catch (e) {
                    setUserPurchaseRecord(null);
                }
            }
        } catch (error) {
            console.log("Presale might not be initialized yet.");
            setSaleData(null);
        } finally {
            setIsLoading(false);
        }
    }, [program, wallet?.publicKey, setIsLoading, setSaleData, setUserPurchaseRecord]);

    useEffect(() => {
        fetchSaleData();
    }, [fetchSaleData, wallet?.publicKey]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchSaleData();
        }, 30000); 
        return () => clearInterval(interval);
    }, [fetchSaleData]);
};

export const usePresaleActions = () => {
    const { program, wallet } = useAnchorProgram();
    const { saleData } = usePresaleStore();
    
    const isAdmin = useMemo(() => {
        if (!wallet || !saleData) return false;
        return wallet.publicKey.equals(saleData.authority);
    }, [wallet, saleData]);

    const initializeSale = useCallback(async () => {
        if (!wallet?.publicKey) return toast.error("Connect wallet first!");
        
        const [salePda] = web3.PublicKey.findProgramAddressSync([Buffer.from("sale"), Buffer.from(PRESALE_ID)], program.programId);
        const [vaultPda] = web3.PublicKey.findProgramAddressSync([Buffer.from("vault"), Buffer.from(PRESALE_ID)], program.programId);
        const saleTokenAccount = await getAssociatedTokenAddress(TOKEN_MINT_ADDRESS, salePda, true);

        try {
            const tx = await program.methods
                .initialize(PRESALE_ID, new BN(0.005 * web3.LAMPORTS_PER_SOL), new BN(100 * web3.LAMPORTS_PER_SOL), new BN(5000 * web3.LAMPORTS_PER_SOL), new BN(Math.floor(Date.now() / 1000) - 3600), new BN(Math.floor(Date.now() / 1000) + 86400 * 7))
                .accounts({ sale: salePda, vault: vaultPda, tokenMint: TOKEN_MINT_ADDRESS, saleTokenAccount: saleTokenAccount, authority: wallet.publicKey, treasury: TREASURY_WALLET, systemProgram: web3.SystemProgram.programId, tokenProgram: TOKEN_PROGRAM_ID, associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID, rent: web3.SYSVAR_RENT_PUBKEY })
                .rpc();
            toast.success("Presale initialized successfully!", { description: `Tx: ${tx}` });
        } catch (error: any) {
            toast.error("Initialization failed", { description: error.message });
            console.error(error);
        }
    }, [program, wallet]);
    
    const purchaseTokens = useCallback(async (amountSol: number) => {
        if (!wallet?.publicKey) return toast.error("Connect wallet first!");
        const lamports = new BN(amountSol * web3.LAMPORTS_PER_SOL);
        try {
            const [salePda] = web3.PublicKey.findProgramAddressSync([Buffer.from("sale"), Buffer.from(PRESALE_ID)], program.programId);
            const [vaultPda] = web3.PublicKey.findProgramAddressSync([Buffer.from("vault"), Buffer.from(PRESALE_ID)], program.programId);
            const [purchaseRecordPda] = web3.PublicKey.findProgramAddressSync([Buffer.from("purchase"), Buffer.from(PRESALE_ID), wallet.publicKey.toBuffer()], program.programId);
            const tx = await program.methods.purchase(lamports)
                .accounts({ sale: salePda, vault: vaultPda, purchaseRecord: purchaseRecordPda, purchaser: wallet.publicKey, systemProgram: web3.SystemProgram.programId })
                .rpc();
            toast.success("Purchase successful!", { description: `Tx: ${tx}` });
        } catch (error: any) {
            toast.error("Purchase failed", { description: error.message });
            console.error(error);
        }
    }, [program, wallet]);

    const claimTokens = useCallback(async () => {
         if (!wallet?.publicKey || !saleData) return toast.error("Wallet or sale data not available.");
         try {
            const [salePda] = web3.PublicKey.findProgramAddressSync([Buffer.from("sale"), Buffer.from(PRESALE_ID)], program.programId);
            const [purchaseRecordPda] = web3.PublicKey.findProgramAddressSync([Buffer.from("purchase"), Buffer.from(PRESALE_ID), wallet.publicKey.toBuffer()], program.programId);
            const purchaserTokenAccount = await getAssociatedTokenAddress(saleData.tokenMint, wallet.publicKey);
            const tx = await program.methods.claimTokens()
                .accounts({ sale: salePda, purchaseRecord: purchaseRecordPda, purchaser: wallet.publicKey, tokenMint: saleData.tokenMint, purchaserTokenAccount, saleTokenAccount: saleData.saleTokenAccount, tokenProgram: TOKEN_PROGRAM_ID, associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID, systemProgram: web3.SystemProgram.programId })
                .rpc();
            toast.success("Tokens claimed!", { description: `Tx: ${tx}` });
         } catch (error: any) {
            toast.error("Claim failed", { description: error.message });
            console.error(error);
         }
    }, [program, wallet, saleData]);

    const withdrawSol = useCallback(async () => {
        if (!wallet?.publicKey) return toast.error("Connect wallet first!");
        try {
            const [salePda] = web3.PublicKey.findProgramAddressSync([Buffer.from("sale"), Buffer.from(PRESALE_ID)], program.programId);
            const [vaultPda] = web3.PublicKey.findProgramAddressSync([Buffer.from("vault"), Buffer.from(PRESALE_ID)], program.programId);
            const tx = await program.methods.withdrawSol()
                .accounts({ sale: salePda, vault: vaultPda, authority: wallet.publicKey, treasury: TREASURY_WALLET, systemProgram: web3.SystemProgram.programId })
                .rpc();
            toast.success("SOL withdrawn successfully!", { description: `Tx: ${tx}` });
        } catch (error: any) {
            toast.error("Withdrawal failed", { description: error.message });
        }
    }, [program, wallet]);

    return { purchaseTokens, claimTokens, initializeSale, withdrawSol, isAdmin };
};