import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  //sil butonuna tıklanırsa
  const handleDelete = () => {
    //apiyi günceller
    axios.delete(`http://localhost:3030/todos/${todo.id}`).then(() => {
      //theneğer api güncellenirse dispatch çalışsın
      //store günceller
      dispatch({
        type: "DEL_TODO",
        payload: todo.id,
      });
    });
  };

  //tamamla butonuna tıklanırsa çalışır

  const handleEdit = () => {
    const updatedTodo = { ...todo, isDone: !todo.isDone };
    //veri tabanını günceller
    axios
      .put(`http://localhost:3030/todos/${todo.id}`, updatedTodo)
      //storeu güncelliyor
      .then(() => {
        dispatch({
          type: "EDIT_TODO",
          payload: todo.id,
        });
      });
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.text}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {todo.isDone ? "Tamamlandı" : "Devam Ediyor"}
        </h6>
        <p className="card-text">{new Date(todo.date).toLocaleDateString()}</p>
        <a className="card-link" onClick={handleEdit}>
          {/* Butonun içi isDone değeri false ise geri al değilse tamamla */}
          {todo.isDone ? "Geri Al" : "Tamamla"}
        </a>
        <a className="card-link" onClick={handleDelete}>
          Sil
        </a>
      </div>
    </div>
  );
};

export default SingleTodo;
