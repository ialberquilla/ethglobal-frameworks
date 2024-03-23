export const getVerifiedAddresses = async (fid: number): Promise<any> => {
  const repose = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      api_key: 'C99361F6-6140-45B4-8E41-2C09E6CBA5F0',
    },
  });

  return repose.json();
};
