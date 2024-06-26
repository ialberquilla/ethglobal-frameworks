import { bundlerActions, createSmartAccountClient } from 'permissionless';
import { privateKeyToSafeSmartAccount } from 'permissionless/accounts';
import { pimlicoBundlerActions } from 'permissionless/actions/pimlico';
import { createPimlicoPaymasterClient } from 'permissionless/clients/pimlico';
import { Address, createPublicClient, http } from 'viem';
import { baseSepolia } from 'viem/chains';
import { PIMLICO_API_KEY, BUY_CONTRACT, PRIVATE_KEY, USDC_CONTRACT, RPC_ENDPOINT } from '../config';
import { encode, encodeApprove } from './encode';

const paymasterUrl = `https://api.pimlico.io/v2/base-sepolia/rpc?apikey=${PIMLICO_API_KEY}`;
const bundlerUrl = `https://api.pimlico.io/v1/base-sepolia/rpc?apikey=${PIMLICO_API_KEY}`;

const publicClient = createPublicClient({
  transport: http(RPC_ENDPOINT),
});

const paymasterClient = createPimlicoPaymasterClient({
  transport: http(paymasterUrl),
});

export const sendTransaction = async (fid: string) => {
  const account = await privateKeyToSafeSmartAccount(publicClient, {
    privateKey: PRIVATE_KEY as Address,
    safeVersion: '1.4.1', // simple version
    entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789', // global entrypoint
    saltNonce: BigInt(fid),
  });

  const smartAccountClient = createSmartAccountClient({
    account,
    chain: baseSepolia,
    transport: http(bundlerUrl),
    sponsorUserOperation: paymasterClient.sponsorUserOperation,
  })
    .extend(bundlerActions)
    .extend(pimlicoBundlerActions);

  const encodedData = encode([
    "0x44e06D53e6992B31104051B80fB24Eb847f34ba0",
    BigInt(0),
    BigInt(5),
    "NFT-Collectors"
  ]);

  const callData = await account.encodeCallData({
    to: BUY_CONTRACT as `0x${string}`,
    data: encodedData as `0x${string}`,
    value: BigInt(0),
  });

  const userOperation = await smartAccountClient.prepareUserOperationRequest({
    userOperation: {
      callData,
    },
  });

  console.log({ userOperation });

  userOperation.signature = await account.signUserOperation(userOperation);

  const userOpHash = await smartAccountClient.sendUserOperation({
    userOperation,
    entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  });

  const receipt = await smartAccountClient.waitForUserOperationReceipt({
    hash: userOpHash,
  });

  const txHash = receipt.receipt.transactionHash;

  console.log({ txHash });

};