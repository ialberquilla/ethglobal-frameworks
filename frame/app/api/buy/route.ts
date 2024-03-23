import { getFrameMessage, FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, NEYNAR_API_KEY } from '../../config';
import { getData } from '../../lib/airstack';
import { NFT_HOLDER } from '../../lib/querys';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  const { message } = await getFrameMessage(body, { neynarApiKey: NEYNAR_API_KEY });

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
        target: "https://sepolia.basescan.org/tx/0x082545081884b7b729d528c46e4988929b3f1a2a1735d833c3ac21d589132704"
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/park-2.png`,
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
