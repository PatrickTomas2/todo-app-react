import AppHeader from "./components/AppHeader";
import AppForm from "./components/AppForm";
import DisplayToDo from "./components/DisplayToDo";
import "./App.css";
import { useState } from "react";

const App = () => {
  let [todos, setTodo] = useState([
    { title: "First To Do", description: "Description of first to do" },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [indextoEdit, setIndex] = useState(-1);

  return (
    <>
      <AppHeader />
      <AppForm
        title={title}
        description={description}
        isEdit={isEdit}
        onHandleChangeDescription={setDescription}
        onHandleChangeTitle={setTitle}
        onHandleButton={(title, description) => {
          if (isEdit) {
            setTodo(
              todos.map((todo, index) =>
                index === indextoEdit
                  ? { ...todo, title: title, description: description }
                  : todo
              )
            );
            setIsEdit(false);
            return;
          }

          setTodo([...todos, { title: title, description: description }]);
        }}
      />
      <DisplayToDo
        todos={todos}
        onDelete={(i) => {
          setTodo(todos.filter((_, index) => index !== i));
          setTitle("");
          setDescription("");
        }}
        onEdit={(title, description, index) => {
          setTitle(title);
          setDescription(description);
          setIsEdit(true);
          setIndex(index);
        }}
      />
    </>
  );
};

export default App;
