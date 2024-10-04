import { useAuth } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleAuth() {
    await logout();
    navigate("/");
  }

  return (
    <div className='logout text-center p-3 bg-dark text-white'>
      <Profile />
      <button onClick={() => handleAuth()} className='btn btn-info'>
        Logout
      </button>
    </div>
  )
}