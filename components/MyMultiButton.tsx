
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';

const MyMultiButton: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
<<<<<<< HEAD
    <WalletMultiButton className={`wallet-adapter-button-trigger ${className}`} />
  );
};

export default MyMultiButton;
=======
    <WalletMultiButton className={`!bg-phoenix-accent !text-black !font-bold !rounded-lg !px-5 !py-2.5 !transition-colors !hover:bg-phoenix-highlight ${className}`} />
  );
};

export default MyMultiButton;
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
