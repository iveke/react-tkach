import { HiddenText } from "./QuationsCard.style";
import { CardStyle } from "components/Quation/QuationsCard.style";
import { useState } from "react";
import { CardsWrap } from "./QuationsCard.style";
import data from "../../data";

export function Cards() {
  const [mult, setMult] = useState([]);
  const [enableMult, setEnableMult] = useState(false);
  const [active, setActive] = useState(null);
  const [cards, setCards] = useState(data ?? []);

  const handleMult = () => {
    setEnableMult((state) => !state)
  }

  const handleSingleClick = (currentId) => {
    setActive(active === currentId ? null : currentId);
  };

  const handleMultClick = (currentId) => {
    const isActive = mult.includes(currentId);
    if(!isActive) {
        setMult((state) => [...state, currentId] )
        return;
    }
    const filterMult = mult.filter((item)=> item !== currentId)
    setMult(filterMult);
  }

  return (
    <>
      <button type="button" onClick={handleMult}>mult</button>
      <ul>
        {cards?.length > 0 &&
          cards.map((card) => (
            <Card card={card} active={active} onSingleClick={handleSingleClick} onMultClick={handleMultClick} enableMult={enableMult} mult={mult}/>
          ))}
      </ul>
    </>
  );
}

const Card = ({ card, onSingleClick, active, enableMult, mult, onMultClick }) => {
const handleClick = () => enableMult ? onMultClick(card.id) : onSingleClick(card.id)
  return (
    <li key={card.id} onClick={handleClick}>
      <h2>{card.question}</h2>
      {enableMult ? mult.includes(card.id) && <HiddenText>{card.answer}</HiddenText> : card.id === active && <HiddenText>{card.answer}</HiddenText>}
      
    </li>
  );
};
