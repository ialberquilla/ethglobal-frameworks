import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { MAIN_IMAGE_CID, NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'See more'
    },
  ],
  image: {
    src: `https://${MAIN_IMAGE_CID}.ipfs.nftstorage.link/`,
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Personalized content Frame',
  description: 'Personalized content Frame',
  openGraph: {
    title: 'frames',
    description: 'personalized content frame',
    images: [`https://${MAIN_IMAGE_CID}.ipfs.nftstorage.link/`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Personalized content frame</h1>
    </>
  );
}
