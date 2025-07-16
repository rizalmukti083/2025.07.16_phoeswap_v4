
import { PublicKey } from "@solana/web3.js";

// The Program ID of the Phoenix Presale Anchor program.
export const PROGRAM_ID = new PublicKey("JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H");

// A unique identifier for the presale instance. Used for deriving PDAs.
export const PRESALE_ID = "phnx_initial_sale";

// The mint address of the PHNX token being sold.
export const TOKEN_MINT_ADDRESS = new PublicKey("G3yL3qGg381D92y48EaF1bsyve3pS9y5yAcj2nuruTjM"); 
    
// The wallet that will receive the SOL contributions from the presale.
export const TREASURY_WALLET = new PublicKey("H4G91tS28CjSsgcR8pB58c2g521uR3Hq9Y3e2jH4Kz8D");

// SPL Associated Token Account program ID
export const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
