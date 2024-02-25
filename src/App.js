
import Clicker from "components/BtnStep/BtnStep";
import { FormToDo } from "components/FormToDo/FormToDo.jsx";
import { ListToDo } from "components/ListToDo/ListToDo.jsx";

function App() {
  return (
    <main style={{padding:50}}>
      <FormToDo />
      <ListToDo />
      <Clicker />
    </main>
  )
}

export default App;
