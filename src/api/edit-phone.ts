import { TPhone } from 'src/types';
import { sortListPhones } from './sort-phones';

function editPhone({
  dataEditPhone,
  listPhones,
}: {
  dataEditPhone: TPhone;
  listPhones: TPhone[];
}): TPhone[] {
  dataEditPhone.name.first =
    dataEditPhone.name.first[0].toUpperCase() + dataEditPhone.name.first.slice(1);
  dataEditPhone.name.last =
    dataEditPhone.name.last[0].toUpperCase() + dataEditPhone.name.last.slice(1);

  return sortListPhones([
    ...listPhones.filter((p) => p.id !== dataEditPhone.id),
    {
      ...dataEditPhone,
    },
  ]);
}
export default editPhone;
