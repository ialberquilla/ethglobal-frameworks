import { init } from '@airstack/node';
import { AIRSTACK_API_KEY } from '../config';
import { fetchQuery } from '@airstack/node';

init(AIRSTACK_API_KEY, 'dev');

export const getData = async (query: string, variables: any) => {
  const { data, error } = await fetchQuery(query, variables);

  if (error) {
    throw new Error(error);
  }

  return data;
};
