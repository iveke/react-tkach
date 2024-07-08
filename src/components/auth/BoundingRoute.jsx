import { Navigate } from "react-router-dom";
import { selectorsLogged } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export const BoundingRoute = ({redirect, component: Component}) => {
    const logged = useSelector(selectorsLogged);

    return !logged ? <Component /> : <Navigate to={redirect}/>
    
    }