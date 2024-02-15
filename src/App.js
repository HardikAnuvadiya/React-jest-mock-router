import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

const App = () => {
  return (
   <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TodoList />} />
          <Route exact path="/todo/:id" element={<TodoDetails/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
