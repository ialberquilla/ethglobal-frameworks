import { PINATA_JWT } from "@/config";

export const pinFileToIPFS = async (readstream: any) => {
  const form = new FormData();
  form.append("file", readstream);
  form.append("pinataMetadata", '{\n  "name": "Pinnie.json"\n}');
  form.append("pinataOptions", '{\n  "cidVersion": 1\n}');

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
      // "Content-Type": "multipart/form-data",
    },
    body: form,
  };

  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", options)

  return response.json();
};
