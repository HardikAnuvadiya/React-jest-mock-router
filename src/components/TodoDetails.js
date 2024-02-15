import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "../App.css";

const TodoDetail = () => {
  let { id } = useParams();
  const data = useLocation();
  return (
    <div>
      <h1>hello</h1>
      <h1>{`Todo Detail for Todo ID:${id} is ${data.state.title}`}</h1>
      {/* <h1>{`Todo Detail for Todo ID:${id}`}</h1> */}
    </div>
  );
};

export default TodoDetail;
