
export type PhoenixPresale = {
  "version": "0.1.0",
  "name": "phoenix_presale",
  "address": "JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false, "pda": { "seeds": [{"kind": "const", "type": "string", "value": "sale"}, {"kind": "arg", "type": "string", "path": "presaleId"}] } },
        { "name": "vault", "isMut": true, "isSigner": false, "pda": { "seeds": [{"kind": "const", "type": "string", "value": "vault"}, {"kind": "arg", "type": "string", "path": "presaleId"}] } },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "saleTokenAccount", "isMut": true, "isSigner": false },
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "treasury", "isMut": true, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "rent", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "presaleId", "type": "string" },
        { "name": "priceLamports", "type": "u64" },
        { "name": "softCapLamports", "type": "u64" },
        { "name": "hardCapLamports", "type": "u64" },
        { "name": "startTime", "type": "i64" },
        { "name": "endTime", "type": "i64" }
      ]
    },
    {
      "name": "purchase",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false },
        { "name": "vault", "isMut": true, "isSigner": false },
        { "name": "purchaseRecord", "isMut": true, "isSigner": false },
        { "name": "purchaser", "isMut": true, "isSigner": true },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "amountLamports", "type": "u64" }
      ]
    },
    {
      "name": "claimTokens",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false },
        { "name": "purchaseRecord", "isMut": true, "isSigner": false },
        { "name": "purchaser", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "purchaserTokenAccount", "isMut": true, "isSigner": false },
        { "name": "saleTokenAccount", "isMut": true, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    },
    {
      "name": "withdrawSol",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false },
        { "name": "vault", "isMut": true, "isSigner": false },
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "treasury", "isMut": true, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sale",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "presaleId", "type": "string" },
          { "name": "authority", "type": "publicKey" },
          { "name": "treasury", "type": "publicKey" },
          { "name": "vault", "type": "publicKey" },
          { "name": "tokenMint", "type": "publicKey" },
          { "name": "saleTokenAccount", "type": "publicKey" },
          { "name": "priceLamports", "type": "u64" },
          { "name": "startTime", "type": "i64" },
          { "name": "endTime", "type": "i64" },
          { "name": "softCapLamports", "type": "u64" },
          { "name": "hardCapLamports", "type": "u64" },
          { "name": "totalRaised", "type": "u64" },
          { "name": "isActive", "type": "bool" }
        ]
      }
    },
    {
      "name": "purchaseRecord",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "purchaser", "type": "publicKey" },
          { "name": "amountSpent", "type": "u64" },
          { "name": "claimed", "type": "bool" }
        ]
      }
    }
  ],
  "errors": [
    { "code": 6000, "name": "SaleNotStarted", "msg": "The sale has not started yet." },
    { "code": 6001, "name": "SaleEnded", "msg": "The sale has already ended." },
    { "code": 6002, "name": "SaleNotActive", "msg": "The sale is currently not active." },
    { "code": 6003, "name": "HardCapExceeded", "msg": "The hard cap for this sale has been reached." },
    { "code": 6004, "name": "SaleNotEndedYet", "msg": "The sale has not ended yet, you cannot withdraw." },
    { "code": 6005, "name": "SoftCapNotReached", "msg": "Soft cap not reached, withdrawal not allowed." },
    { "code": 6006, "name": "AlreadyClaimed", "msg": "Tokens have already been claimed." },
    { "code": 6007, "name": "Unauthorized", "msg": "You are not authorized to perform this action."}
  ],
  "metadata": {
    "name": "phoenix_presale",
    "version": "0.1.0",
    "spec": "0.1.0",
    "address": "JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H"
  }
};
export const IDL: PhoenixPresale = JSON.parse(JSON.stringify({
  "version": "0.1.0",
  "name": "phoenix_presale",
  "address": "JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false, "pda": { "seeds": [{"kind": "const", "type": "string", "value": "sale"}, {"kind": "arg", "type": "string", "path": "presaleId"}] } },
        { "name": "vault", "isMut": true, "isSigner": false, "pda": { "seeds": [{"kind": "const", "type": "string", "value": "vault"}, {"kind": "arg", "type": "string", "path": "presaleId"}] } },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "saleTokenAccount", "isMut": true, "isSigner": false },
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "treasury", "isMut": true, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "rent", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "presaleId", "type": "string" },
        { "name": "priceLamports", "type": "u64" },
        { "name": "softCapLamports", "type": "u64" },
        { "name": "hardCapLamports", "type": "u64" },
        { "name": "startTime", "type": "i64" },
        { "name": "endTime", "type": "i64" }
      ]
    },
    {
      "name": "purchase",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false },
        { "name": "vault", "isMut": true, "isSigner": false },
        { "name": "purchaseRecord", "isMut": true, "isSigner": false },
        { "name": "purchaser", "isMut": true, "isSigner": true },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": [
        { "name": "amountLamports", "type": "u64" }
      ]
    },
    {
      "name": "claimTokens",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false },
        { "name": "purchaseRecord", "isMut": true, "isSigner": false },
        { "name": "purchaser", "isMut": true, "isSigner": true },
        { "name": "tokenMint", "isMut": false, "isSigner": false },
        { "name": "purchaserTokenAccount", "isMut": true, "isSigner": false },
        { "name": "saleTokenAccount", "isMut": true, "isSigner": false },
        { "name": "tokenProgram", "isMut": false, "isSigner": false },
        { "name": "associatedTokenProgram", "isMut": false, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    },
    {
      "name": "withdrawSol",
      "accounts": [
        { "name": "sale", "isMut": true, "isSigner": false },
        { "name": "vault", "isMut": true, "isSigner": false },
        { "name": "authority", "isMut": true, "isSigner": true },
        { "name": "treasury", "isMut": true, "isSigner": false },
        { "name": "systemProgram", "isMut": false, "isSigner": false }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "sale",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "presaleId", "type": "string" },
          { "name": "authority", "type": "publicKey" },
          { "name": "treasury", "type": "publicKey" },
          { "name": "vault", "type": "publicKey" },
          { "name": "tokenMint", "type": "publicKey" },
          { "name": "saleTokenAccount", "type": "publicKey" },
          { "name": "priceLamports", "type": "u64" },
          { "name": "startTime", "type": "i64" },
          { "name": "endTime", "type": "i64" },
          { "name": "softCapLamports", "type": "u64" },
          { "name": "hardCapLamports", "type": "u64" },
          { "name": "totalRaised", "type": "u64" },
          { "name": "isActive", "type": "bool" }
        ]
      }
    },
    {
      "name": "purchaseRecord",
      "type": {
        "kind": "struct",
        "fields": [
          { "name": "purchaser", "type": "publicKey" },
          { "name": "amountSpent", "type": "u64" },
          { "name": "claimed", "type": "bool" }
        ]
      }
    }
  ],
  "errors": [
    { "code": 6000, "name": "SaleNotStarted", "msg": "The sale has not started yet." },
    { "code": 6001, "name": "SaleEnded", "msg": "The sale has already ended." },
    { "code": 6002, "name": "SaleNotActive", "msg": "The sale is currently not active." },
    { "code": 6003, "name": "HardCapExceeded", "msg": "The hard cap for this sale has been reached." },
    { "code": 6004, "name": "SaleNotEndedYet", "msg": "The sale has not ended yet, you cannot withdraw." },
    { "code": 6005, "name": "SoftCapNotReached", "msg": "Soft cap not reached, withdrawal not allowed." },
    { "code": 6006, "name": "AlreadyClaimed", "msg": "Tokens have already been claimed." },
    { "code": 6007, "name": "Unauthorized", "msg": "You are not authorized to perform this action."}
  ],
  "metadata": {
    "name": "phoenix_presale",
    "version": "0.1.0",
    "spec": "0.1.0",
    "address": "JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H"
  }
}));
