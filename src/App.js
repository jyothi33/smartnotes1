import Home from './components/Home';
import LoginForm from './components/Login/LoginForm';
import { useSelector } from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state?.auth?.isAuthenticated);
  return isLoggedIn ? <Home /> : <LoginForm />;
}

export default App;
