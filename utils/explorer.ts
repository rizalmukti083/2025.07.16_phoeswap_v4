
export function getExplorerUrl(
  cluster: 'mainnet-beta' | 'devnet' | 'testnet',
  item: string,
  itemType: 'tx' | 'address' | 'block' = 'address'
): string {
  return `https://solscan.io/${itemType}/${item}?cluster=${cluster}`;
}
