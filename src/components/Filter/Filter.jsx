import { useFilterParams } from "hooks/useFilterParams";
import { useDispatch, useSelector } from "react-redux";
import { levelOnChange, titleOnChange } from "../../redux/actions";
import { getLevel, getTitle } from "../../redux/selectors";


function FilterForm() {

  const dispatch = useDispatch()
  const [{title,level},{setLevelParams, setTitleParams}] =  useFilterParams();

  const filterLevelOnChange = (e) => {
    const { value } = e.target;
    setLevelParams(value);
  };
  const filterTitleOnChange = (e) => {
    const { value } = e.target;
    setTitleParams(value);
  };
  return (
    <>
      <h2>Filter</h2>
      <input onChange={filterTitleOnChange} name="title" type="text" value={title} />
      <select onChange={filterLevelOnChange} name="level" value={level}>
        <option value="all">all</option>
        <option value="easy">easy</option>
        <option value="middle">middle</option>
        <option value="hard">hard</option>
      </select>
    </>
  );
}

export default FilterForm;
