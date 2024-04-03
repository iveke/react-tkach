import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValues) => {
  const [state, useState] = useState(defaultValues);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, key];
};

export const FormTest = () => {
  useLocalStorage(
    "userName",
    () => JSON.parse(localStorage.getItem("userName")) ?? ""
  );
  useLocalStorage(
    "userLastName",
    () => JSON.parse(localStorage.getItem("userName")) ?? ""
  );

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("userLastName", JSON.stringify(userLastName));
  }, [userLastName]);

  const handelName = (e) => {
    setUserName(e.target.value);
  };
  const handelLastName = (e) => {
    setUseLastName(e.target.value);
  };
  return (
    <form>
      <label>
        Name <input type="text" value={userName} onChange={handelName} />
      </label>
      <label>
        LastName{" "}
        <input type="text" value={userLastName} onChange={handelLastName} />
      </label>
    </form>
  );
};
