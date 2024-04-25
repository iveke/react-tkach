import { HiddenText } from "./QuationsCard.style";
import { CardStyle } from "components/Quation/QuationsCard.style";
import { useEffect, useState, useRef } from "react";
import { CardsWrap } from "./QuationsCard.style";



export function Cards() {
  const [active, setActive] = useState(null);
  const [prevActive, setPrevActive] = useState(null);
  useEffect(
    () => {
      console.log( active);
    },
    [active]
  );

  const handleAction = async (e, open, setOpen) => {
    const activeItem = e.currentTarget;
    console.log(activeItem);

    if (open) {
      setActive(null);
      setOpen(false);
    } else {
      setActive(activeItem);
      setOpen(true);
    }
  };

  return (
    <CardsWrap>
      <Card onAction={handleAction} active={active}>
        What are according components?
      </Card>
      <Card onAction={handleAction} active={active}>
        What are they used for?
      </Card>
      <Card onAction={handleAction} active={active}>
        According as a musical instruments
      </Card>
      <Card onAction={handleAction} active={active}>
        Can I create an according components with a different framework
      </Card>
    </CardsWrap>
  );
}

const Card = ({ children, onAction }) => {
  const [open, setOpen] = useState(false);
  return (
    <CardStyle onClick={(e) => onAction(e, open, setOpen)}>
      <p>
        {children} <span>{open ? "-" : "+"}</span>
        {open && (
          <HiddenText>Because this good for anyone or somebody</HiddenText>
        )}
      </p>
    </CardStyle>
  );
};
