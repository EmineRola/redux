import { useSelector } from "react-redux";
import SingleTodo from "./singleTodo";
import { useDispatch } from "react-redux";
import axios from "axios";

const ListTodos = () => {
  const { todoState } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClear = () => {
    todoState.todos.forEach((deleteTodo) => {
      axios.delete(`http://localhost:3030/todos/${deleteTodo.id}`).then(() => {
        dispatch({
          type: "CLEAR",
        });
      });
    });
  };
  
  return (
    <div className="row justify-content-center justify-content-md-between gap-5 p-5">
      <div className="d-flex justify-content-start">
        {todoState.todos.length > 0 ? (
          <button className="btn btn-danger" onClick={handleClear}>
            Tümünü sil
          </button>
        ) : (
          "Liste Boş"
        )}
      </div>

      {todoState.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};
export default ListTodos;
