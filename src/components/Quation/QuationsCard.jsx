import { HiddenText } from "./QuationsCard.style";

export function Card({children, onAction, open }) {
  return (
    <>
      <div onClick={()=> onAction()}>
        <p>
          {children} <span>+</span>
        </p>
        <HiddenText open={open}>Because this good for anyone or somebody</HiddenText>
      </div>
    </>
  );
}
