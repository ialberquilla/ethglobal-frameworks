import { NEYNAR_API_KEY } from "../config";

export const getVerifiedAddresses = async (fid: number): Promise<any> => {
  const repose = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      api_key: NEYNAR_API_KEY,
    },
  });

  return repose.json();
};
