import { useParams } from "react-router-dom";
import { fetchToDoId } from "service/api";

async function TodoDetails() {
  const { id } = useParams();
  const res = await fetchToDoId(id);
  console.log(res);
  return (
    <div>
      <h2>{res.title}</h2>
      <p>{res.description}</p>
      <p>{res.level}</p>
    </div>
  );
}

export default TodoDetails;
