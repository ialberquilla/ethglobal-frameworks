import { AAVE_ENDPOINT, SUBGRAPH_ENDPOINT, UNISWAP_ENDPOINT } from '../config';
import { LAST_TX } from './querys';

export const getAaveDeposits = async (account: string) => {
  const query = `
{
  deposits(
    where: {account:"${account}"}
  ){
    id
  }
}`;

  const response = await fetch(AAVE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  });

  const data = await response.json();
  return data;
};

export const getUniswapSwaps = async (account: string) => {
  const query = `
{
  swaps(
    where: {sender:"${account}"}
  ){
    id
  }
}
`;

  const response = await fetch(UNISWAP_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  });

  const data = await response.json();
  return data;
};


export const getlastTx = async () => {

  const response = await fetch(SUBGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: LAST_TX,
    }),
  });

  const data = await response.json();
  return data.data.buys[0].transactionHash;
};



