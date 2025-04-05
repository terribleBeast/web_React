import './App.css';
import { Footer, Header, Content, Menu } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageTwo } from './components/Pages';

// should added <body>
function App() {
  return (
    <div className="App">
      
      <Header/>
      <Content>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route index element={<div>NO page is selected</div>} />
              <Route path="one" element={<PageOne />} />
              <Route path="two" element={<PageTwo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Content>
      <Footer />
    </div>


  );
}

export default App;