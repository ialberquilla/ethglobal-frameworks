import { getFrameMessage, FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, NEYNAR_API_KEY, txID } from '../../config';
import { getlastTx } from '../../lib/thegraph';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  const { message } = await getFrameMessage(body, { neynarApiKey: NEYNAR_API_KEY });

  const lastTx = await getlastTx();

  let state = {
    meet: false,
  };
  try {
    state = JSON.parse(decodeURIComponent(message?.state?.serialized || ''));
  } catch (e) {
    console.error(e);
  }

  const response = getFrameHtmlResponse({
    buttons: [
      {
        action: 'link',
        label: `See transaction details`,
        target:`https://sepolia.basescan.org/tx/${lastTx}`,
      },
    ],
    image: { 
      src: `https://bafkreicwnrmmzxj6za7dnuuz3y4ljufwfaoiakq4d2ughstuyfkg3yetom.ipfs.nftstorage.link/`,
      aspectRatio: '1:1',
    },
    state: {
      meet: false,
    },
  });

  return new NextResponse(response);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
