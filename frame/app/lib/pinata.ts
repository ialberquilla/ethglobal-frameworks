import { PinataFDK } from "pinata-fdk";
const fdk = new PinataFDK();

export const getUserDetails = async (fid: number): Promise<any> => {
    const options = {method: 'GET', headers: {Authorization: 'Bearer 582c0c1b3d998ec25cb75af44bb2c24f994e1ec3725752ba6f3d9652219e3926'}};

    const response  = await fetch(`https://api.pinata.cloud/v3/farcaster/users/${fid}`, options)

    return response.json();
}

