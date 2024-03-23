import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL, NEYNAR_API_KEY } from '../../config';
import { getUserDetails } from '../../lib/pinata';
import { getVerifiedAddresses } from '../../lib/neynar';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  const { message } = await getFrameMessage(body, { neynarApiKey: NEYNAR_API_KEY });

  console.log(message?.interactor.fid);

  const userDetails = await getVerifiedAddresses(message?.interactor.fid || 0);

  const addresses = userDetails.users[0].verified_addresses.eth_addresses

  console.log(addresses);

  const meet = addresses.length > 0;

  const responseMeetCriteria = getFrameHtmlResponse({
    buttons: [
      {
        label: `Buy now`,
      },
    ],
    image: {
      src: `https://bafkreidemh4ujxsc65e75ozlcnmnmzy3tmmiyumrvil3cdbbdkhn6li7iu.ipfs.nftstorage.link/`,
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
      src: `https://bafkreidgcj7ppayr7rl2xz2a3sk7yg2knmgacyh4i4y4w5rphus7uudhpi.ipfs.nftstorage.link/`,
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
