// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "@testing-library/jest-dom";

//***Add This***
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning: ReactDOM.render is no longer supported in React 18./.test(
        args[0]
      )
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

jest.mock("react-router-dom", () => {
  return {
    Link: ({ children }) => {
      return <div>{children}</div>;
    },
    Switch: ({ children }) => {
      return <div>{children}</div>;
    },
    Route: ({ children }) => {
      return <div>{children}</div>;
    },
  };
});

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

// const mockUseLocationValue = {
//   pathname: "/signup",
//   search: "",
//   hash: "",
//   state: { id: 3, name: "Kashyap" },
// };
// jest.mock("react-router", () => ({
//   ...jest.requireActual("react-router"),
//   useLocation: jest.fn().mockImplementation(() => {
//     return mockUseLocationValue;
//   }),
// }));

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
