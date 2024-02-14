import { useState, useEffect } from "react";

const useLocalStorageGetItem = (key) => {
  const [value, setValue] = useState(null);

  
  const getItemFromLocalStorage = () => {
    try {
      const storedValue = localStorage.getItem(key);
      setValue(storedValue);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getItemFromLocalStorage();
  }, [key]);

  return value;
};

export default useLocalStorageGetItem;