import data from "../../to-do.json"
import { Item, Level, List, Text, Title } from "./ListToDo.style";

export const ListToDo = ()=> {
    console.log(data);
    return (
        
        <List>
            {data.map(({title, description, level,id, status}) => (
            <Item key={id} level = {level} status = {status}>
                <Title>{title}</Title>
                <Text>{description}</Text>
                <Level>{level}</Level>
            </Item>))}
        </List>
    )
}