
<<<<<<< HEAD
import { FC, ReactNode, useMemo } from 'react';
=======
import React, { FC, ReactNode, useMemo } from 'react';
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Toaster } from 'sonner';
import { PresaleProvider } from './PresaleProvider';
<<<<<<< HEAD
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = useMemo(() => {
    return import.meta.env.VITE_SOLANA_RPC_HOST || clusterApiUrl('devnet');
  }, []);

  const wallets = useMemo(() => [
      new PhantomWalletAdapter(),
=======
import { SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

export const AppProviders: FC<{ children: ReactNode }> = ({ children }) => {
  const endpoint = useMemo(() => {
    return process.env.VITE_SOLANA_RPC_HOST || clusterApiUrl('devnet');
  }, []);

  const wallets = useMemo(() => [
      new SolflareWalletAdapter(),
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
  ], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <PresaleProvider>
            {children}
            <Toaster richColors position="bottom-right" theme="dark" />
          </PresaleProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
