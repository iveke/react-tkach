export function Card({children, onAction }) {
  return (
    <>
      <div onClick={()=> onAction()}>
        <p>
          {children} <span>+</span>
        </p>
        <div>Because this good for anyone or somebody</div>
      </div>
    </>
  );
}
