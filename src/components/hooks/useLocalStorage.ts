import { useState } from "react";

export const useLocalStorage = (
  key = "",
  initValue = ""
): [data: string, setData: (data: string) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initValue;
  });

  const setData = (data: string) => {
    setStoredValue(data);
    localStorage.setItem(key, JSON.stringify(data));
  };

  return [storedValue, setData];
};
