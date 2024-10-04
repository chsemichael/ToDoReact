import { ListGroup } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";
import "./Todos.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useState } from "react";
import ToDoEdit from "./ToDoEdit";

export default function SingleToDo({ todo, getTodos, todos, setShowDelete, setDeletingTodoId }) {
  const { currentUser } = useAuth();
  const [showEdit, setShowEdit] = useState(false);
  const { todoId, todoName, todoDescription } = todo;
  return (
    <ListGroup.Item className="d-flex justify-content-around bg-secondary text-white">
      <div className="category-item center">{todoName}</div>
      <div className="category-item center">{todoDescription}</div>
      {currentUser.email === import.meta.env.VITE_ADMIN_EMAIL && (
        <div className="category-item">
          <button
            className="m-1 rounded btn"
            id="editLink"
            onClick={() => setShowEdit(true)}
          >
            <FaEdit />
          </button>
          <button
            className="m-1 rounded btn"
            id="deleteLink"
            onClick={() => {
              setDeletingTodoId(todoId)
              setShowDelete(true)
            }}
          >
            <FaTrashAlt />
          </button>
          {showEdit && (
            <ToDoEdit
              setShowEdit={setShowEdit} //tied to closing the modal in CatEdit
              showEdit={showEdit} //tied to opening the modal/closing the modal...if true, modal opens
              getTodos={getTodos} //Run a GET request after editing
              todo={todo}
              todos={todos}
            />
          )}
        </div>
      )}
    </ListGroup.Item>
  );
}