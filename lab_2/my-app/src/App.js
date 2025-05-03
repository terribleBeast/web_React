// App.js
import './App.css';
import { Footer, Header, Content } from './components';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home'
import AuthForm from './components/AuthForm'
import Auth from './components/Auth';
import UserPage from './components/UserPage';
import BottomMenu from './components/BottomNavigarion';
import Feedbacks from './components/Feedbacks'
import UsersTable from './components/UsersTable/UsersTable';
import ProtectedRoute from './components/ProtectedRoute'
import ButtonAppBar from './components/ButtonAppBar';


function App() {
  return (
    <div className="App">

      <Header>
        <ButtonAppBar />
      </Header>
      <Auth>
        <Content>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="about" element={<Feedbacks />} />
              <Route path="form" element={<AuthForm />} />
              <Route path='user' element={<UserPage />} />
              <Route path="admin/*" element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="feedbacks" element={<Feedbacks />} />
                    <Route index path="users-table" element={<UsersTable />} />
                  </Routes>
                </ProtectedRoute>
              } />
            </Route>
            <Route path="*" element={<div>Not valid path</div>} />
          </Routes>

        </Content>
      </Auth>
      <BottomMenu />
      <Footer />


    </div>


  );
}

export default App;