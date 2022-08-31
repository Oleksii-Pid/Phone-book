import { TPhone } from 'src/types';

export const getPhones = async (): Promise<TPhone[]> => {
  const response = await fetch('phones.json');
  if (!response.ok) {
    throw new Error('Server error!');
  }
  return await response.json();
};
