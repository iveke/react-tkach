import { useDispatch, useSelector } from "react-redux";
import { BtnTheme, Page } from "./Theme.style";
import { useLocalStorage } from "hooks/useLocalStorage";
import { switchTheme } from "../../redux/slice/ThemeSlice";

function Theme() {
  // const [value, setValue] = useLocalStorage("theme", "dark");
const themeColor = useSelector(state => state.theme.color);
const dispatch = useDispatch();
console.log(themeColor)
  // const handleClick = () => {
  //   setValue((state) => (state === "dark" ? "light" : "dark"));
  // };
  const changeTheme = (e) => {
    const value = e.currentTarget.value;
    dispatch(switchTheme(value));
  }

  return (
    <Page theme={themeColor} >
      <select value={themeColor} onChange={(e)=>changeTheme(e)}>
        <option value="white">White</option>
        <option value="dark">Dark</option>
      </select>
    </Page>
  );
}

export default Theme;
