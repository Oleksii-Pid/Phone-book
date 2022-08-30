import { TPhone } from 'src/types';

export const sortListPhones = (phones: TPhone[]): TPhone[] => {
  return phones.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
};
