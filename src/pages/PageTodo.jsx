import FilterForm from "components/Filter/Filter";
import ListToDo from "components/ListToDo/ListToDo";
import { useFilterParams } from "hooks/useFilterParams";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { selectorsLevel, selectorsList, selectorsTitle } from "../redux/selectors";
import { deleteToDo, fetchToDo } from "service/api";
import { changeList, deleteItemList } from "../redux/slice/TodoSlice";

function Todo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const list = useSelector(selectorsList);
  const [{title, level}] =  useFilterParams();
  const dispatch = useDispatch();
  const location = useLocation();


  useEffect(() => {
    async function asyncWrapFn() {
      try {
        const res = await fetchToDo();
        dispatch(changeList(res));
        // setList(res);
        setIsLoading(true);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    asyncWrapFn();
  }, []);

  const handleDeleteItem = async (deleteId) => {
    try {
      setIsLoading(true);
      setError(null);

      const deleteToDoItem = await deleteToDo(deleteId);
      dispatch(deleteItemList(deleteToDoItem.id))
      toast.success("ToDo delete success");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    (prevState) => {
      if (prevState !== list) {
        localStorage.setItem("todo", JSON.stringify(list));
      }
    },
    [list]
  );
  const handleFilter = () => {
    if (level === "all") {
      return list.filter((item) =>
        item.title.toLowerCase().includes(title.toLowerCase())
      );
    }
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(title.toLowerCase()) &&
        item.level === level
    );
  };


  return (
    <>
      <FilterForm />
      {list.length > 0 && (
        <ListToDo
          list={handleFilter()}
          location={location}
          onDelete={handleDeleteItem}
        />
      )}
    </>
  );
}

export default Todo;
