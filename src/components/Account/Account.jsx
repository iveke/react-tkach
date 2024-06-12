import { useDispatch, useSelector } from "react-redux";
import { getBalance } from "../../redux/selectors";
import { deposit, withdraw } from "../../redux/actions";

const Account = () => {
  const balance = useSelector(getBalance);
const dispatch = useDispatch();
  return (
    <div>
      <p>counts: {balance}</p>
      <button onClick={()=> dispatch(deposit(100))} type="button">+ 10</button>
      <button onClick={()=> dispatch(withdraw(10))} type="button">- 10</button>
    </div>
  );
};
export default Account;
