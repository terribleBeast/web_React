import './App.css';
import { Footer, Header, Content } from './components';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home'
import AuthForm from './components/AuthForm'
import AppBar from './components/ButtonAppBar';
import Auth from './components/Auth';
import UserPage from './components/UserPage';
import BottomMenu from './components/BottomNavigarion';
import Feedbacks from './components/Feedbacks'



function App() {
  return (
    <div className="App">

      <Header>
        <AppBar />
      </Header>
      <Auth>
        <Content>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Feedbacks />} />
              <Route path="form" element={<AuthForm />} />
              <Route path='user' element={<UserPage />} />
              <Route path="*" element={<div>Not valid path</div>} />
            </Route>
          </Routes>

        </Content>
      </Auth>
      <BottomMenu />
      <Footer />

    </div>


  );
}

export default App;