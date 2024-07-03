import { selectorsModal } from "../../redux/selectors";
import { Item, Level, List, Text, Title } from "./ListToDo.style";
import { modal } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ListToDo = ({ list, onDelete, location }) => {
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
          location={location}
        />
      ))}
    </List>
  );
};

const ToDoItem = ({ id, title, level, description, onDelete, location }) => {
  const showModal = useSelector(selectorsModal);
  const dispatch = useDispatch();

  return (
    <Item level={level}>
      <Title to={id} state={{from: location}}>{title}</Title>
      <Text>{description}</Text>
      <Level>{level}</Level>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
      <button onClick={()=>{
        dispatch(modal({title: title, description: description, level: level, id: id,}));
      }}>
        Change
      </button>
    </Item>
  );
};

export default ListToDo;
