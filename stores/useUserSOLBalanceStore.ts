
import { create } from 'zustand';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface UserSOLBalanceStore {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void;
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
    let balance = 0;
    try {
      balance = await connection.getBalance(publicKey, 'confirmed');
      balance = balance / LAMPORTS_PER_SOL;
    } catch (e) {
      console.log(`Error getting SOL balance: `, e);
    }
    set({ balance });
  },
}));

export default useUserSOLBalanceStore;
