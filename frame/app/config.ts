// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development'
    ? 'https://d225-213-99-159-252.ngrok-free.app'
    : 'https://zizzamia.xyz';
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const NEYNAR_API_KEY = process.env.NEXT_PUBLIC_NEYNAR_API_KEY || '';
export const AIRSTACK_API_KEY = process.env.NEXT_PUBLIC_AIRSTACK_API_KEY || '';
export const PIMLICO_API_KEY = process.env.NEXT_PUBLIC_PIMLICO_API_KEY || '';
export const BUY_CONTRACT = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
export const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY || '';
export const USDC_CONTRACT = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT || '';
export const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY || '';
export const TOKEN_ADDRESSES = process.env.NEXT_PUBLIC_TOKENS_NEEDED || '';
export const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID || '';
export const PRIVY_APP_SECRET = process.env.NEXT_PUBLIC_PRIVY_APP_SECRET || '';
export const PRIVY_API_URL = process.env.NEXT_PUBLIC_PRIVY_API_URL || '';