import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux/selectors";
import { deposit, withdraw } from "../../redux/slice/AccountSlice";
import { selectorsLogged, selectorsUser } from "../../redux/auth/selectors";

const Account = () => {
  // const balance = useSelector(getBalance);
  const user = useSelector(selectorsUser);
  const isLogged = useSelector(selectorsLogged);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>It's your Account</h1>
        <h3>Info about you </h3>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>YOu logged or no: {isLogged}</p>
      </div>
    </>
  );

  // <div>
  //   <p>counts: {balance}</p>
  //   <button onClick={()=> dispatch(deposit(100))} type="button">+ 10</button>
  //   <button onClick={()=> dispatch(withdraw(10))} type="button">- 10</button>
  // </div>
};
export default Account;
