// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development'
    ? 'https://9693-213-99-139-116.ngrok-free.app'
    : process.env.NEXT_PUBLIC_FRAME_URL;
export const BUY_MY_COFFEE_CONTRACT_ADDR = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const NEYNAR_API_KEY = process.env.NEXT_PUBLIC_NEYNAR_API_KEY || '';
export const AIRSTACK_API_KEY = process.env.NEXT_PUBLIC_AIRSTACK_API_KEY || '';
export const PIMLICO_API_KEY = process.env.NEXT_PUBLIC_PIMLICO_API_KEY || '';
export const BUY_CONTRACT = '0x28b6Cfc8f6bf7921468e1373f0207b0695dC77c1';
export const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY || '';
export const USDC_CONTRACT = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
export const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT || '';
export const PINATA_API_KEY = process.env.NEXT_PUBLIC_PINATA_API_KEY || '';
export const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT || '';
export const TOKEN_ADDRESSES = process.env.NEXT_PUBLIC_TOKENS_NEEDED || '';
export const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID || '';
export const PRIVY_APP_SECRET = process.env.NEXT_PUBLIC_PRIVY_APP_SECRET || '';
export const PRIVY_API_URL = process.env.NEXT_PUBLIC_PRIVY_API_URL || '';
export const MEET_CRITERIA_IMAGE_CID = process.env.NEXT_PUBLIC_MEET_CRITERIA_IMAGE_CID || 'bafkreidemh4ujxsc65e75ozlcnmnmzy3tmmiyumrvil3cdbbdkhn6li7iu';
export const NOT_MEET_CRITERIA_IMAGE_CID = process.env.NEXT_PUBLIC_NOT_MEET_CRITERIA_IMAGE_CID || 'bafkreidgcj7ppayr7rl2xz2a3sk7yg2knmgacyh4i4y4w5rphus7uudhpi';
export const MAIN_IMAGE_CID = process.env.NEXT_PUBLIC_MAIN_IMAGE_CID || 'bafkreifph57rtckby5opzrzbyxmtc74xww4teitzumwu24jue4gqjljgbq'
export const FRAME_ID = process.env.NEXT_PUBLIC_FRAME_ID || '1';
export const AAVE_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/messari/aave-v3-polygon'
export const UNISWAP_ENDPOINT = 'https://api.thegraph.com/subgraphs/name/gundamdweeb/uniswap-v3-mainnet'
export const txID = process.env.NEXT_PUBLIC_TX_ID;
export const SUBGRAPH_ENDPOINT = 'https://api.studio.thegraph.com/query/47837/frames/v0.0.1'