import { PINATA_API_KEY, PINATA_JWT } from '../config';

export const getUserDetails = async (fid: number): Promise<any> => {
  const options = { method: 'GET', headers: { Authorization: `Bearer ${PINATA_API_KEY}` } };

  const response = await fetch(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options);

  return response.json();
};

export const sendAnalytics = async (frameId: string, frameData: any): Promise<any> => {

  const options = {
    method: 'POST',
    headers: { Authorization: `Bearer ${PINATA_JWT}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      custom_id: frameId,
      data: frameData,
      frame_id: frameId,
    }),
  };

  const response = await fetch(`https://api.pinata.cloud/farcaster/frames/interactions`, options);

  return response.json();
};
