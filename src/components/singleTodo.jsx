import React from "react";

const SingleTodo = ({ todo }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.text}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {todo.isDone ? "Tamamlandı" : "Devam eEdiyor"}
        </h6>
        <p className="card-text">{new Date(todo.date).toLocaleString()}</p>
        <a className="card-link">Tamamla</a>
        <a className="card-link">sil</a>
      </div>
    </div>
  );
};

export default SingleTodo;
