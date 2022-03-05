export const getLocalStorage = (key: string, initialValue: any) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (err) {
    console.log(err);
    return initialValue;
  }
};

export const setLocalStorage = (key: string, value: any) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(err);
  }
};

export const removeLocalStorage = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const clearLocalStorage = () => {
  try {
    localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};
