import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import todologo from '../assets/todologo.png';

const Todo = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchtodos = async () => {
      try {
        const response = await axios.get(BACKEND_URL);
        setTodos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchtodos();
  }, [BACKEND_URL]);

  const addtodo = async () => {
    try {
      if(item.trim().length === 0){
        toast.error("enter item to add!");
        return;
      }
      const response = await axios.post(BACKEND_URL, { item });
      setTodos(prev => [...prev, response.data]);
      toast.success("Item added Successfully!");
      setItem("");
    } catch (err) {
      console.log(err);
    }
  };

  const deletetodo = async (id) => {
    try {
      await axios.delete(`${BACKEND_URL}/${id}`);
      setTodos(prev => prev.filter(todo => todo.id !== id));
     toast.error("Item deleted Successfully!");
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const edittodo = (todo) => {
    setItem(todo.item);   
    setEditId(todo.id);  
  };

  const updatetodo = async () => {
    try {
      const response = await axios.put( `${BACKEND_URL}/${editId}`,{ newItem : item });
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? response.data : todo));
      toast.info("Item updated Successfully!");
      setItem("");
      setEditId(null); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="todo-card shadow p-4">
        <div className="d-flex flex-row justify-content-center mb-3 gap-1">
        <img src={todologo} alt="logo" width={50} height={50} />
        <h3 className="text-center mt-1">Todo List</h3>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your next todo"
            value={item}
            onChange={(e) => setItem(e.target.value)} required/>
          <button className="btn btn-primary" style={{ width: "100px", border: "none", outline: "none" }} onClick={editId ? updatetodo : addtodo}>{editId ? "Update" : "Add"}</button>
        </div>
        <ul className="list-group">
          {todos.map(todo => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              {todo.item}
              <div>
               <button  className="btn btn-sm btn-warning me-2" onClick={() => edittodo(todo)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deletetodo(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
