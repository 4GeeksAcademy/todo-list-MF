import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showX, setShowX] = useState("");

  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      setTodoList([...todoList, newTodo]);
      setNewTodo("");
    }
  };

  const handleDelete = (indexToDelet) => {
    setTodoList(todoList.filter((elem, index) => index !== indexToDelet));
  };

  return (
    <div className="box text-center">
      <div className="contenedor-principal">
        <h1 className="h1">Lista de tareas pendientes</h1>
        <input
          type="text"
          className="holder"
          placeholder="¿Qué tareas necesitas realizar?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handlePressKey}
        />
        <ul className="todo-list">
          {todoList.map((todo, index) => (
            <div>
              <li
                key={index}
                className="item"
                onMouseOver={() => setShowX(index)}
                onMouseLeave={() => setShowX(null)}
              >
                {todo}
                {showX === index && (
                  <small className="mx-5" onClick={() => handleDelete(index)}>
                    🗑️
                  </small>
                )}
              </li>
            </div>
          ))}
          <li className="footer">
            {todoList.length === 0
              ? "No hay tareas, añadir tareas"
              : todoList.length + " tareas por hacer"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
