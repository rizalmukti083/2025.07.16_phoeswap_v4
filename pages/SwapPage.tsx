
import React, { useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

declare global {
    interface Window { 
      Jupiter: any; 
    }
}

const SwapPage: React.FC = () => {
    const { publicKey } = useWallet();
    const { connection } = useConnection();

    useEffect(() => {
        const initJupiter = () => {
            if (window.Jupiter) {
                window.Jupiter.init({
                    endpoint: connection.rpcEndpoint,
                    displayMode: "integrated",
                    integratedTargetId: "integrated-terminal",
                    userPublicKey: publicKey ? publicKey.toBase58() : undefined,
                    theme: 'dark',
                    strictTokenList: false,
                    formProps: {
                        initialOutputMint: "So11111111111111111111111111111111111111112",
                    },
                });
            }
        };

        const intervalId = setInterval(() => {
            if (window.Jupiter) {
                initJupiter();
                clearInterval(intervalId);
            }
        }, 250);

        return () => clearInterval(intervalId);
    }, [publicKey, connection.rpcEndpoint]);

    return (
        <div className="flex-1 w-full flex items-start justify-center py-8">
            <div className="w-full max-w-md min-h-[600px] flex flex-col" key={publicKey?.toBase58() ?? 'disconnected'}>
                <div id="integrated-terminal" className="flex-grow"></div>
            </div>
        </div>
    );
};

export default SwapPage;
