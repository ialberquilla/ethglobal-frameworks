import { PINATA_JWT } from "@/config";

export const pinFileToIPFS = async (base64Data: string) => {
  // Remove the data URL prefix and convert the base64 string to a Blob
  const base64String = base64Data.split(',')[1];
  const mime = base64Data.split(',')[0].split(':')[1].split(';')[0];
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], {type: mime});

  const form = new FormData();
  form.append("file", blob, "file");
  form.append("pinataMetadata", JSON.stringify({ name: "file.json" }));
  form.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
    },
    body: form,
  };

  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", options)

  return response.json();
};