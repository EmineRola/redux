
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  //bileşen ekrana basıldığı anda çalışır.
  useEffect(() => {
    axios.get('http://localhost:3030/todos')
      //apiden gelne cevap olumluysa bize gelen diziyi store aktarmak
      .then((res) => {
        dispatch({
          type: 'SET_TODOS',
          payload: res.data,
        })
      });
  }, [])
  return (
    <div className="App">
      <AddForm />
      <ListTodos />
    </div>
  );
}

export default App;
