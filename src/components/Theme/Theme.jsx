import { BtnTheme, Page } from "./Theme.style";
import { useLocalStorage } from "hooks/useLocalStorage";

function Theme() {
  const [value, setValue] = useLocalStorage("theme","dark");

  const handleClick = () => {
    setValue((state) =>
     (state === "dark" ? "light" : "dark"));
  }

  return (
    <Page theme={value}>
      <BtnTheme onClick={handleClick} theme={value}>Theme</BtnTheme>
    </Page>
  );
}

export default Theme;
