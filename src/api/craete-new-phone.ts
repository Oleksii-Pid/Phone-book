import { TPhone } from 'src/types';
export type DataNewPhone = Omit<TPhone, 'id'>;

function createNewPhone(phoneData: DataNewPhone): TPhone {
  phoneData.name.first = phoneData.name.first[0].toUpperCase() + phoneData.name.first.slice(1);
  phoneData.name.last = phoneData.name.last[0].toUpperCase() + phoneData.name.last.slice(1);
  return Object.assign({}, phoneData, { id: String(new Date().valueOf()) });
}
export default createNewPhone;
