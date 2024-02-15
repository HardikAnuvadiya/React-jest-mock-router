import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TodoList = () => {
  const navigate = useNavigate();
  const todos = [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ];

  return (
    <div>
      <h1>Todo List</h1>
      <ul data-testId="list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* <Link to={`/todo/${todo.id}`}>{todo.title}</Link> */}

            <span
              data-testId="text"
              className="cursor-pointer"
              onClick={() => navigate(`/todo/${todo.id}`, { state: todo })}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
