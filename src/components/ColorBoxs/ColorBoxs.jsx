import { List } from "components/ListToDo/ListToDo.style";
import colors from "../../colorsArray.json";
import { Card } from "./ColorBoxs.style.jsx";
import { nanoid } from "nanoid";

const ColorBoxs = ({onChoose}) => {
  return (
    <List>
      {colors.map(({ color, code }) => (
        <CreateCard
          key={nanoid()}
          color={color}
          code={code}
          onChoose={onChoose}
        />
      ))}
    </List>
  );
};

const CreateCard = ({ color, code, onChoose }) => {
  return (
    <Card
      color={code}
      onClick={() => {
        onChoose(code);
      }}
    >
      <p>{code}</p>
      {color}
    </Card>
  );
};

export default ColorBoxs;
