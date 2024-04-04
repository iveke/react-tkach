import { useEffect } from "react";
import { useLocalStorage } from "hooks/useLocalStorage";


export const FormTest = () => {
  const [userName, setUserName] = useLocalStorage(
    "userName",
    () => JSON.parse(localStorage.getItem("userName")) ?? ""
  );
  const [userLastName, setUserLastName]=useLocalStorage(
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
    setUserLastName(e.target.value);
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
