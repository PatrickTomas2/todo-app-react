import { useState } from "react";
import AppButton from "./AppButton";

interface Props {
  onHandleButton: (title: string, description: string) => void;
}

const AppForm = ({ onHandleButton }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div className="titleInput">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="descriptionInput">
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        >
          {description}
        </textarea>
      </div>
      <AppButton
        onButtonClick={() => {
          if (title === "" || description === "") {
            return;
          }
          onHandleButton(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Save TODO
      </AppButton>
    </>
  );
};

export default AppForm;
