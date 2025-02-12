import deleteIcon from "../assets/delete-icon.png";
import editIcon from "../assets/edit-icon.png";

interface Props {
  todos: { title: string; description: string }[];
  onDelete: (index: number) => void;
  onEdit: (title: string, description: string, index: number) => void;
}

const DisplayToDo = ({ todos, onDelete, onEdit }: Props) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          <div className="titlePart">
            <h4>{todo.title}</h4>
            <div className="icons">
              <button
                type="button"
                className="deleteBtn"
                onClick={() => {
                  onDelete(index);
                }}
              >
                <img src={deleteIcon} alt="Delete" />
              </button>
              <button
                type="button"
                className="editBtn"
                onClick={() => {
                  onEdit(todo.title, todo.description, index);
                }}
              >
                <img src={editIcon} alt="Edit" />
              </button>
            </div>
          </div>

          <p>{todo.description}</p>
        </div>
      ))}
    </>
  );
};

export default DisplayToDo;
