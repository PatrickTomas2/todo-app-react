import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";
import DisplayToDo from "./components/DisplayToDo";
import "./App.css";
import { useState } from "react";

const App = () => {
  let [todos, setTodo] = useState([
    { title: "First To Do", description: "Description of first to do" },
  ]);

  return (
    <>
      <AppHeader />
      <AppForm
        onHandleButton={(title, description) => {
          setTodo([...todos, { title: title, description: description }]);
        }}
      />
      <DisplayToDo
        todos={todos}
        onDelete={(i) => {
          setTodo(todos.filter((_, index) => index !== i));
        }}
      />
    </>
  );
};

export default App;
