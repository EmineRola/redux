import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddForm = () => {
  //dispatch metodunu güncelleme aksiyonları reducere sevk etmek
  const dispatch = useDispatch();
  const [text, setText] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    //yeni bir todo objesi oluşturma
    const newTodo = {
      id: new Date().getTime(),
      text,
      isDone: false,
      date: new Date(),
    };
    //oluşan objeyi apiye gönderme
    axios.post("http://localhost:3030/todos", newTodo);

    //oluşan objeyi reducera sevk etme
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });

    //oluşturulan objeti reducera sevk etme

    //actionu çalıştırıp reducera gönderecek ne yapacağını ekledik ve aynı zamanda neyi ekleyecek yada
    //Hangi öğeye işlem yapacak
    //şuan reducera gönderdik
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center my-4 px-5"
    >
      <input
        className="form-control mt-5 "
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className="btn btn-primary mt-5">Ekle</button>
    </form>
  );
};

export default AddForm;
