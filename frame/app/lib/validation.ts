import { getData } from './airstack';
import { NFT_HOLDER } from './querys';

export const isValidAddress = async (
  addresses: string[],
  tokenAddress: string,
): Promise<boolean> => {
  const data = await getData(NFT_HOLDER, { addresses, tokenAddress });
  return (
    data.Ethereum.TokenBalance?.length > 0 ||
    data.Polygon.TokenBalance?.length > 0 ||
    data.Zora.TokenBalance?.length > 0
  );
};
