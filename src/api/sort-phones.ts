import { TPhone } from 'src/api/fetch-list-phones';

export const sortListPhones = (phones: TPhone[]) => {
  const sortList = phones.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
  return sortList;
};
