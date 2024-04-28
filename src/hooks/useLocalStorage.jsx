import { useState, useEffect } from "react";

// export const useLocalStorage = (key, defaultValues) => {
//     const [state, setState] = useState(defaultValues);
//     useEffect(() => {
//       localStorage.setItem(key, JSON.stringify(state));
//     }, [state, key]);
//     return [state, useState];
//   };

export const useLocalStorage = (key, defaultValues) => {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || defaultValues}
  );

  useEffect(() => {
    if(value){
      localStorage.setItem(key, JSON.stringify(value));
    }

  }, [key, value]);

  return [value, setValue];
};
