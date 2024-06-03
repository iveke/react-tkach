function FilterForm({ title, level, onFilterLevel, onFilterTitle }) {
  const filterLevelOnChange = (e) => {
    const { name, value } = e.target;
    onFilterLevel(name, value);
  };
  const filterTitleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value, e.target.name)
    onFilterTitle(name, value);
  };
console.log(title, level)
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
