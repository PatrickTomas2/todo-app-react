import AppButton from "./AppButton";

interface Props {
  title: string;
  description: string;
  isEdit: boolean;
  onHandleButton: (title: string, description: string, index?: number) => void;
  onHandleChangeTitle: (title: string) => void;
  onHandleChangeDescription: (description: string) => void;
}

const AppForm = ({
  title,
  description,
  isEdit,
  onHandleButton,
  onHandleChangeDescription,
  onHandleChangeTitle,
}: Props) => {
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
            onHandleChangeTitle(e.target.value);
          }}
        />
      </div>
      <div className="descriptionInput">
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={(e) => {
            onHandleChangeDescription(e.target.value);
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
          onHandleChangeTitle("");
          onHandleChangeDescription("");
        }}
      >
        {isEdit ? "Edit Todo" : "Save Todo"}
      </AppButton>
    </>
  );
};

export default AppForm;
