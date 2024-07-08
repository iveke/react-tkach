import { Navigate } from "react-router-dom";
import { selectorsIsRefresh, selectorsLogged } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";


export const PrivateRoute = ({redirect, component: Component}) => {

const logged = useSelector(selectorsLogged);
const isRefresh = useSelector(selectorsIsRefresh);

return logged && !isRefresh ? <Component /> : <Navigate to={redirect}/>

}