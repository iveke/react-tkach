// import * as yup from "yup";
import FormLogin from "components/FormToDo/FormToDo.jsx";
import ListToDo from "components/ListToDo/ListToDo.jsx";
import { useEffect } from "react";
import Modal from "components/Modal/Modal.jsx";
import { createToDo, deleteToDo, fetchToDo} from "service/api";
import { Loader } from "components/Loader";
import toast, { Toaster } from "react-hot-toast";
import FilterForm from "components/Filter/Filter";
import { useState } from "react";
import { FormTest } from "components/FormToDo/FormTest";

const intialColor = "#fff";

const TextContent = () => {
  return (
    <>
      <h2>Hi Frodo</h2>
      <p>
        LorSKFKSJHFJSHJKF SJFKJSFJHSDJFHSD SDJFH SDHFKHAFH SDHJFHSDJ FSAJ
        KDHSFJKAHFJHSFSD KJDSHFJKS
      </p>
    </>
  );
};

function App() {
  const [list, setList] = useState([]);
  const [filters, setFilters] = useState({ title: "", level: "all" });
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function asyncWrapFn() {
      try {
        const res = await fetchToDo();
        setList(res);
        setIsLoading(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    asyncWrapFn();
  }, []);
  useEffect(
    (prevState) => {
      if (prevState !== list) {
        localStorage.setItem("todo", JSON.stringify(list));
      }
    },
    [list]
  );

  const toggleModal = () => {
    setShowModal((prevShowModal) => {
      return !prevShowModal;
    });
  };
  const handleDeleteItem = async (deleteId) => {
    try {
      setIsLoading(true);
      setError(null);

      const deleteToDoItem = await deleteToDo(deleteId);
      setList((prevState) => {
        return prevState.filter((item) => item.id !== deleteToDoItem.id);
      });

      toast.success("ToDo delete success");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleAddItem = async (item) => {
    try {
      setIsLoading(true);
      setError(null);
      console.log(item);
      const addToDo = await createToDo(item);
      setList((prevState) => {
        return [...prevState, addToDo];
      });

      toast.success("ToDo added success");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFilter = () => {
    if (filters.level === "all") {
      return list.filter((item) =>
        item.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        item.level === filters.level
    );
  };

  const changeFilter = (value, key) => {
    setFilters({ ...filters, [value]: key });
  };

  return (
    <main style={{ padding: 50 }}>
      <button type="button" onClick={toggleModal}>
        OpenModal
      </button>
      <FormTest />
      <FormLogin onAdd={handleAddItem} />
      <FilterForm
        onFilter={changeFilter}
        title={filters.title}
        level={filters.level}
      />

      {isLoading && <Loader />}
      {list.length > 0 && (
        <ListToDo list={handleFilter()} onDelete={handleDeleteItem} />
      )}
      {/* <Loader /> */}

      {showModal && (
        <Modal>
          <TextContent></TextContent>
        </Modal>
      )}
      <Toaster />
    </main>
  );
}

export default App;
