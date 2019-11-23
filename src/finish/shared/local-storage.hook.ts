import { useState } from 'react';

export const useLocalStorage = <T>(dbName: string, initialValue: T) => {
  const getValue = () => {
    try {
      const item = window.localStorage.getItem(dbName);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const setValue = (value: T) => {
    try {
      // Save state
      setStorageValue(value);
      // Save to local storage
      window.localStorage.setItem(dbName, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  // Pass initial state function to useState so logic is only executed once
  const [storageValue, setStorageValue] = useState(() => getValue());

  // @TODO report bug to codesandbox -> as const doesn't work with CRA 3
  // return [storageValue, setValue] as const;
  return [storageValue, setValue] as [T, (value: T) => void];
};

// const LocalStorage = <T extends unknown>(dbName: string, initialValue: T) => {
//   const getValue = () => {
//     try {
//       const item = window.localStorage.getItem(dbName);
//       return item ? (JSON.parse(item) as T) : initialValue;
//     } catch {
//       return initialValue;
//     }
//   };
//   const setValue = (value: T) => {
//     try {
//       window.localStorage.setItem(dbName, JSON.stringify(value));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return {
//     getValue,
//     setValue
//   };
// };
