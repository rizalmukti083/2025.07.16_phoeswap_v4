
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

const MyMultiButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <WalletMultiButton className={`wallet-adapter-button-trigger ${className}`} />
  );
};

export default MyMultiButton;