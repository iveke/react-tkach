import axios from "axios";

axios.defaults.baseURL = "https://65f01842da8c6584131ac041.mockapi.io/todoList";


export const fetchToDo = async () => {
  console.log(axios.defaults.baseURL);
  const res = await axios.get("/");
  return res.data;
};

export const filterToDo = async (title, level) => {
  
  // const params = new URLSearchParams();
  // params.append('title', `${title}`);
  // params.append('level', `${level}`);


  const res = await axios.get(`/?title=${title}`);
  console.log(res);
  return res.data;
}

export const createToDo = async (todo) => {
  const res = await axios.post("/", todo);
  return res.data;
};

export const deleteToDo = async (todoId) => {
  const res = await axios.delete(`/${todoId}`);
  return res.data;
};
