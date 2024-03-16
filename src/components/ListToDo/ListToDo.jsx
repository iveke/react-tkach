
import { Item, Level, List, Text, Title } from "./ListToDo.style";


const ListToDo = ({list, onDelete, onClick}) => {
    
    
        return (
        
            <List>
                {list.map(({title, description, level,id, status}) => (
               <ToDoItem 
               key={id}
               id={id}
               title={title}
               level={level}
               status={status}
               description={description}
               onClick={onClick}
               onDelete={onDelete}
               />
               ))}
            </List>
        )
    
}

const ToDoItem = ({id, title, level, description, onDelete, onClick}) => {
    return ( 
        <Item onClick={()=> {onClick()}} level={level}>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Level>{level}</Level>
            <button onClick={()=> {onDelete(id)}}>Delete</button>
        </Item>
    )
}

export default ListToDo;

