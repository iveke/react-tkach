import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchToDoId } from "service/api";

 function TodoDetails() {
  const { id } = useParams();
  
const [data, setData] = useState({});
const location = useLocation();
console.log(location)

  useEffect(() => { 
    const fetchData = async () => { 
        const res = await fetchToDoId(id); 
        setData({ ...res }); 
    }; 

    fetchData(); 
}, [id]);

  console.log(data);
  return (
    <>
    <Link to={location.state?.from ?? "/todo"}>Back</Link>
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.level}</p>
    </div>
    </>
    
  );
}

export default TodoDetails;
