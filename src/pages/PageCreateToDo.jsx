import { FormTest } from "components/FormToDo/FormTest";
import FormLogin from "components/FormToDo/FormToDo";
import { Loader } from "components/Loader";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createToDo, createToDos } from "service/api";
import { useDispatch, useSelector } from "react-redux";
import { selectorsLoading } from "../redux/selectors";

function CreateTodo() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const isLoading = useSelector(selectorsLoading);
  const dispatch = useDispatch();

  const handleAddItem = async (item) => {
    dispatch(createToDo(item));

    // try {
    //   setIsLoading(true);
    //   setError(null);

    //   createToDos(item);
    //   toast.success("ToDo added success");
    // } catch (error) {
    //   setError(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      {isLoading && <Loader />}
      <FormLogin onAdd={handleAddItem} />
    </>
  );
}

export default CreateTodo;
