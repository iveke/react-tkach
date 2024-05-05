import FilterForm from "components/Filter/Filter";
import ListToDo from "components/ListToDo/ListToDo";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteToDo, fetchToDo } from "service/api";

 function Todo(){
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    const [list, setList] = useState([]);
    const [filters, setFilters] = useState({ title: "", level: "all" });

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

    return <>

<FilterForm
        onFilter={changeFilter}
        title={filters.title}
        level={filters.level}
      />
     {list.length > 0 && (
        <ListToDo list={handleFilter()}/>
      )}</>
}

export default Todo;

// onDelete={handleDeleteItem} 