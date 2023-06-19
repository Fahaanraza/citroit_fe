
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { logout } from '../../utils/auth';
import { useNavigate } from "react-router-dom";


const AdminHomePage = () => {
    const [isLoggedIn, user] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user,
    ]);

    const navigate = useNavigate();

    const logouts = ()=>{
      logout()
      navigate('/login');
    }
    return (
      <div>
      <h1>Welcome {user.username}</h1>
      
      
          <button onClick={ logouts}>Logout</button>

  </div>
    );
};




export default AdminHomePage;