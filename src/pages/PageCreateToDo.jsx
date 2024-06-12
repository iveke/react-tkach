import { FormTest } from "components/FormToDo/FormTest";
import FormLogin from "components/FormToDo/FormToDo";
import { Loader } from "components/Loader";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { createToDo } from "service/api";

function CreateTodo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddItem = async (item) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log(item)
      createToDo(item);
      toast.success("ToDo added success");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <FormLogin onAdd={handleAddItem} />
    </>
  );
}

export default CreateTodo;
