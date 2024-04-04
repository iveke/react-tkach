function FilterForm({ title, level, onFilter }) {
  const filterOnChange = (e) => {
    const { name, value } = e.target;
    onFilter(name, value);
  };

  return (
    <>
      <h2>Filter</h2>
      <input onChange={filterOnChange} name="title" type="text" value={title} />
      <select onChange={filterOnChange} name="level" value={level}>
        <option value="all">all</option>
        <option value="easy">easy</option>
        <option value="middle">middle</option>
        <option value="hard">hard</option>
      </select>
    </>
  );
}

export default FilterForm;
