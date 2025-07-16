import { useMemo } from 'react';
<<<<<<< HEAD
import { Program, AnchorProvider } from '@coral-xyz/anchor';
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { IDL } from '../idl/phoenix_presale';
=======
import { Program, AnchorProvider, Wallet } from '@coral-xyz/anchor';
import { useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { PROGRAM_ID } from '../constants';
import { IDL, PhoenixPresale } from '../idl/phoenix_presale';
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2

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
<<<<<<< HEAD
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
=======
        } as Wallet;
        return new AnchorProvider(connection, readOnlyWallet, AnchorProvider.defaultOptions());
    }, [connection, wallet]);

    const program = useMemo(() => {
        return new Program(IDL, PROGRAM_ID, provider) as unknown as Program<PhoenixPresale>;
    }, [provider]);
    
    return { program, provider, wallet };
};
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
