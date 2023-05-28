import { useSelector } from "react-redux";
import SingleTodo from "./singleTodo";

const ListTodos = () => {
  const { todoState } = useSelector((state) => state);

  return (
    <div className="row justify-content-center justify-content-md-between gap-5 p-5">
      {todoState.todos.map((todo) => (
        <SingleTodo todo={todo} />
      ))}
    </div>
  );
};
export default ListTodos;
