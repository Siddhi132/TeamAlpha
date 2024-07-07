import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import PostLoginTasks from './screens/PostLoginTasks';

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
      <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/post-login-tasks" element={<PostLoginTasks />} />
      </Routes>
    </Router>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
