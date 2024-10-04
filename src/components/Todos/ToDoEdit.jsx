import { Modal } from 'react-bootstrap'
import ToDoForm from './ToDoForm'

export default function ToDoEdit({ todo, showEdit, setShowEdit, getTodos, todos }) {
  const { todoName } = todo

  return (
    <Modal
        show={showEdit}
        onHide={() => setShowEdit(false)}
        size="lg">
           <Modal.Header closeButton>
                <h2>Editing {todoName}</h2>
            </Modal.Header> 
            <Modal.Body>
                <ToDoForm
                    setShowEdit={setShowEdit}
                    getTodos={getTodos}
                    todo={todo}
                    todos={todos} />
            </Modal.Body>
    </Modal>
  )
}