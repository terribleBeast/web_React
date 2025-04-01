import './App.css';
import {Footer, Header, Content} from './components';
import labsList from './labsList.json'



// should added <body>
function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Content data={labsList}> 
      </Content>
      <Footer/>
    </div>


  );
}

export default App;
