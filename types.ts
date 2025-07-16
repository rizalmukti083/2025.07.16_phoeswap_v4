
import type { BN } from '@coral-xyz/anchor';
import type { PublicKey } from '@solana/web3.js';

export interface SaleData {
  presaleId: string;
  authority: PublicKey;
  treasury: PublicKey;
  vault: PublicKey;
  tokenMint: PublicKey;
  saleTokenAccount: PublicKey;
  priceLamports: BN;
  startTime: BN;
  endTime: BN;
  softCapLamports: BN;
  hardCapLamports: BN;
  totalRaised: BN;
  isActive: boolean;
}

export interface PurchaseRecord {
    purchaser: PublicKey;
    amountSpent: BN;
    claimed: boolean;
}
