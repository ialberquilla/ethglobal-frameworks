import { FrameRequest, getFrameHtmlResponse, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import {
  MEET_CRITERIA_IMAGE_CID,
  NEXT_PUBLIC_URL,
  NEYNAR_API_KEY,
  NOT_MEET_CRITERIA_IMAGE_CID,
  TOKEN_ADDRESSES,
} from '../../config';
import { getVerifiedAddresses } from '../../lib/neynar';
import { isValidAddress } from '../../lib/validation';
import { createOrFindEmbeddedWalletForFid } from '../../lib/wallet';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();

  const { message } = await getFrameMessage(body, { neynarApiKey: NEYNAR_API_KEY });
  const fid = message?.interactor.fid || 0;
  const userDetails = await getVerifiedAddresses(fid);

  const custodyAddress = userDetails.users[0].custody_address;
  let addresses = userDetails.users[0].verified_addresses.eth_addresses;
  const tokenAddresses = JSON.parse(TOKEN_ADDRESSES);

  const embeddedWallet = await createOrFindEmbeddedWalletForFid(fid, custodyAddress);

  const meet = await isValidAddress([...addresses, embeddedWallet], tokenAddresses);

  const responseMeetCriteria = getFrameHtmlResponse({
    buttons: [
      {
        label: `Buy now`,
      },
    ],
    image: {
      src: `https://${MEET_CRITERIA_IMAGE_CID}.ipfs.nftstorage.link/`,
      aspectRatio: '1:1',
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
      src: `https://${NOT_MEET_CRITERIA_IMAGE_CID}.ipfs.nftstorage.link/`,
      aspectRatio: '1:1',
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
