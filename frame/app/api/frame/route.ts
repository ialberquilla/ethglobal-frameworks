import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  const meet = false;

  const responseMeetCriteria = getFrameHtmlResponse({
    buttons: [
      {
        label: `Buy now`,
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/park-1.png`,
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/buy`,
    state: {
      meet: true,
    },
  });

  const responseDoesNotMeetCriteria = getFrameHtmlResponse({
    buttons: [
      {
        label: `Buy now`,
      },
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/park-2.png`,
    },
    postUrl: `${NEXT_PUBLIC_URL}/api/buy`,
    state: {
      meet: false,
    },
  });

  return new NextResponse(meet ? responseMeetCriteria : responseDoesNotMeetCriteria);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
