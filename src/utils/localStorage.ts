export enum STORAGE_KEYS {
  token = 'token',
  phones = 'phones',
}

export const getLocalStorage = (key: STORAGE_KEYS) => {
  localStorage.getItem(STORAGE_KEYS[key]);
};
export const setLocalStorage = (key: STORAGE_KEYS, value?: string) => {
  value && localStorage.setItem(STORAGE_KEYS[key], value);
};
export const clearLocalStorage = (key: STORAGE_KEYS) => {
  localStorage.removeItem(STORAGE_KEYS[key]);
};

export const saveTokenInLocalStorage = (token: string) => {
  token && setLocalStorage(STORAGE_KEYS.token, token);
};

export const savePhonesInLocalStorage = (phones) => {
  phones && setLocalStorage(STORAGE_KEYS.phones, JSON.stringify(phones));
};

export const getTokenWithLocalStorage = () => getLocalStorage(STORAGE_KEYS.token);
