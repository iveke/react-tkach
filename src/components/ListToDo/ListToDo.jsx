import { Item, Level, List, Text, Title } from "./ListToDo.style";

const ListToDo = ({ list, onDelete }) => {
  return (
    <List>
      {list.map(({ title, description, level, id }) => (
        <ToDoItem
          key={id}
          id={id}
          title={title}
          level={level}
          description={description}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

const ToDoItem = ({ id, title, level, description, onDelete }) => {
  return (
    <Item level={level}>
      <Title to={id} >{title}</Title>
      <Text>{description}</Text>
      <Level>{level}</Level>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </Item>
  );
};

export default ListToDo;
