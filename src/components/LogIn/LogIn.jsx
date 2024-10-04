//Step 1 - import the useAuth function from our AuthContext.jsx
import { useAuth } from "../../Contexts/AuthContext"; //gives access to currentUser, login, or logout...remember to create the hook that accesses any of these three...see below
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //Step 2 - destructure the login function from useAuth()
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleAuth() {
    //Await keyword to pause any more code from executing until we get a response back from firebase
    await login();

    //return the user to a specific location using useNavigate hook from react-router-dom
    return navigate("/");
  }

  return (
    //Step 3 - Create the UI and use login as needed
    <div className="login">
      <article className="bg-info mb-5 p-5 text-dark">
        <h1 className="text-center">Welcome to ReactJS ToDo!</h1>
      </article>
      <Container>
        <Card className="m-2 border-dark text-center">
          <Card.Header className="bg-dark text-white">
            <h2>Login for full functionality</h2>
          </Card.Header>
          <Card.Body>
            <button className="btn btn-success" onClick={() => handleAuth()}>
              Login w/ GitHub
            </button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
