import { TPhone } from 'src/types';

export const findPhone: (list: TPhone[], id: string) => TPhone | undefined = (list, id) =>
  list.find((p) => p.id == id);

export const firstLetterUpperCase = (word: string): string => word[0].toUpperCase() + word.slice(1);
