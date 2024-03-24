import { AAVE_ENDPOINT, UNISWAP_ENDPOINT } from '../config';

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
