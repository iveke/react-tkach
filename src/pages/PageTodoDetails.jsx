import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchToDoId } from "service/api";

 function TodoDetails() {
  const { id } = useParams();
  
const [data, setData] = useState({});

  useEffect(() => { 
    const fetchData = async () => { 
        const res = await fetchToDoId(id); 
        setData({ ...res }); 
    }; 

    fetchData(); 
}, [id]);

  console.log(data);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <p>{data.level}</p>
    </div>
  );
}

export default TodoDetails;
