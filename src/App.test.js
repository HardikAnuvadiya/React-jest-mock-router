// import React from "react";
import React from "react";
// import "@testing-library/jest-dom";
// import { createMemoryHistory } from "history";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";

jest.mock("react-router", () => {
  return {
    ...jest.requireActual("react-router"),
    useLocation: () => {
      return {
        pathname: "/signup",
        search: "",
        hash: "",
        state: { id: 1, title: "todo 1" },
        key: "default",
      };
    },
  };
});

describe("TodoApp", () => {
  test("renders TodoList component for '/' route", () => {
    // const history = createMemoryHistory();
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Todo List")).toBeInTheDocument();
    const items = screen.getByTestId("list");
    expect(items.children.length).toBe(3);
    // const signUpBtn = screen.getByTestId("text");
    // fireEvent.click(signUpBtn);
    // expect(history.location.pathname).toBe("/todo/:id");
  });

  test("renders TodoDetail component for '/todo/:id' route", () => {
    const todoId = 1
    render(
      <MemoryRouter initialEntries={[`/todo/${todoId}`]}>
        <Routes>
          <Route path="/todo/:id" element={<TodoDetails />} />
        </Routes>
      </MemoryRouter>
    );
    // const text = screen.getByTestId("text");
    // fireEvent.click();
    expect(screen.getByText("hello")).toBeInTheDocument();
    const todoText = screen.getByText("Todo Detail for Todo ID:1 is todo 1");
    expect(todoText).toBeInTheDocument();
  });
});
