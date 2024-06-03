import FilterForm from "components/Filter/Filter";
import ListToDo from "components/ListToDo/ListToDo";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { deleteToDo, fetchToDo } from "service/api";

function Todo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);
  const [searchParams, setSeacrhParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title") ?? "");
  const [level, setLevel] = useState(searchParams.get("level") ?? "all");

  // const [filters, setFilters] = seState({ title: "", level: "all" });

  const location = useLocation();

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
  const changeFilterLevel = (key, value) => {
    setSeacrhParams(key, value);
  };
  const changeFilterTitle = (key, value) => {
    console.log(key, value);
    setSeacrhParams(key, value);
  };

  return (
    <>
      <FilterForm
        onFilterLevel={changeFilterLevel}
        onFilterTitle={setSeacrhParams}
        title={title}
        level={level}
      />
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
