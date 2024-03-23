import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'See more'
    },
  ],
  image: {
    src: `https://bafkreifph57rtckby5opzrzbyxmtc74xww4teitzumwu24jue4gqjljgbq.ipfs.nftstorage.link/`,
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
    images: ["https://bafkreifph57rtckby5opzrzbyxmtc74xww4teitzumwu24jue4gqjljgbq.ipfs.nftstorage.link/"],
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
