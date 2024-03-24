import { ethers } from 'ethers';
import Marketplace from '../_contracts/Marketplace'
import ERC20 from '../_contracts/erc20'

export function encode(args: any[]): string {
    const iface = new ethers.Interface(Marketplace);
    const data = iface.encodeFunctionData('buyAsset', args);
    return data;
}

export const encodeApprove = (args: any[]): string => {
    const iface = new ethers.Interface(ERC20);
    const data = iface.encodeFunctionData('approve', args);
    return data;
};
