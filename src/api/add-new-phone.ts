import { TPhone } from 'src/types';
import { sortListPhones } from './sort-phones';
export type DataNewPhone = Omit<TPhone, 'id'>;

function addNewPhone({
  dataNewPhone,
  listPhones,
}: {
  dataNewPhone: DataNewPhone;
  listPhones: TPhone[];
}): TPhone[] {
  dataNewPhone.name.first =
    dataNewPhone.name.first[0].toUpperCase() + dataNewPhone.name.first.slice(1);
  dataNewPhone.name.last =
    dataNewPhone.name.last[0].toUpperCase() + dataNewPhone.name.last.slice(1);

  return sortListPhones([
    ...listPhones,
    {
      id: String(new Date().valueOf()),
      ...dataNewPhone,
    },
  ]);
}
export default addNewPhone;
