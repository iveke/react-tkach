import { useParams } from "react-router-dom";
import { fetchToDoId } from "service/api";

async function TodoDetails(){

    const {id} = useParams();
    console.log(id);
    const res = await fetchToDoId(id);
console.log(res)
    return <div>
        {/* // write something */}
    </div>
}

export default TodoDetails;