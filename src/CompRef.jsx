import {useState, useEffect, useRef} from "react"; 

const CompInter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter((count) => count + 1);
  let btnRef = useRef(null);
  // useEffect(() => {
  //   intervalId.current = setInterval(() => {
  //     incrementCounter();
  //   }, 1000);
  // }, []);
useEffect(()=> {
  console.log(counter);
return ()=> {
  console.log("unMouting")
}
}, [counter])
  // const stopInterval = () => {
  //   clearInterval(intervalId.current)
  // }
  console.log(btnRef)

  return <>
  <p>Inter : {counter}</p>
  <button onClick={() => setCounter((count)=> count + 1 )} type="button">+1</button>
  <button onClick={()=> console.log(btnRef)} ref={btnRef} type="button">Stop</button>
  </>;
};

 const CompRef = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <h1>REF</h1>
      <button onClick={() => setVisible(false)}>Close</button>
      {visible && <CompInter />}
    </>
  );
};

export default CompRef;