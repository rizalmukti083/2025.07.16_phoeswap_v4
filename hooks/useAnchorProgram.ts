import { useMemo } from 'react';
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { IDL } from '../idl/phoenix_presale';

export const useAnchorProgram = () => {
    const { connection } = useConnection();
    const wallet = useAnchorWallet();

    const provider = useMemo(() => {
        if (wallet) {
            return new AnchorProvider(connection, wallet, AnchorProvider.defaultOptions());
        }
        // Read-only provider when wallet is not connected
        const readOnlyWallet = {
            publicKey: new PublicKey('11111111111111111111111111111111'),
            signTransaction: () => Promise.reject("Wallet not connected"),
            signAllTransactions: () => Promise.reject("Wallet not connected"),
        };
        return new AnchorProvider(connection, readOnlyWallet as any, AnchorProvider.defaultOptions());
    }, [connection, wallet]);

    const program = useMemo(() => {
        // The program ID is now read from the IDL itself.
        // By using `IDL as any` we let the program be of type Program<any>.
        // This is a common workaround for when the IDL version from the file doesn't match
        // the version of the @coral-xyz/anchor library, avoiding strict type-checking errors.
        return new Program(IDL as any, provider);
    }, [provider]);
    
    return { program, provider, wallet };
};
