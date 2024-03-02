
import * as yup from "yup";
import Clicker from "components/BtnStep/BtnStep";
import FormLogin from "components/FormToDo/FormToDo.jsx";
import { ListToDo } from "components/ListToDo/ListToDo.jsx";

function App() {
  return (
    <main style={{padding:50}}>
      <FormLogin />
      <ListToDo />
      <Clicker />
    </main>
  )
}

export default App;
