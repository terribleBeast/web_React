import './App.css';
import { Footer, Header, Content } from './components';
import { Routes, Route, Outlet } from 'react-router-dom';
import { PageOne, PageTwo } from './components/Pages';
import Home from './components/Home'
import Form from './components/Form'
import AppBar from './components/ButtonAppBar';
import Auth from './components/Auth';

// should added <body>
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
              <Route index element={<Home/>} />
              <Route path="form" element={<Form />} />
              <Route path="*" element={<div>Not valid path</div>} />
            </Route>
          </Routes>

        </Content>
      </Auth>
      <Footer />

    </div>


  );
}

export default App;