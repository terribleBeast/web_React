import './App.css';
import {Footer, Header, Content } from './components';
import labsList from './labsList.json'

function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <Content data={labsList}> 
      </Content>
      <Footer></Footer>
    </div>


  );
}

export default App;
