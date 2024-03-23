import { PinataFDK } from "pinata-fdk";
import { PINATA_API_KEY } from "../config";
const fdk = new PinataFDK();

export const getUserDetails = async (fid: number): Promise<any> => {
    const options = {method: 'GET', headers: {Authorization: `Bearer ${PINATA_API_KEY}`}};

    const response  = await fetch(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)

    return response.json();
}

