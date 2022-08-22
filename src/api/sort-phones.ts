import {Phone} from 'src/api/upload-phones'

export const sortListPhones = (phones:Phone[]) =>{
    const sortList = phones.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
    return sortList
  } 