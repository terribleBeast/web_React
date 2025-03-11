import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import listProduct from './listProduct.json';


function App() {
  return (
    <div className="App">

      <nav>
        <ul style={{ 'text-align': 'left' }}>
          <li><a href='#button'>Кнопка</a></li>
          <li><a href='#list-product'>Список продуктов</a></li>
        </ul>
      </nav>

      <section id="button" >
        <Button onClick={() => alert('Кнопка нажата!')}>Нажми меня!</Button>
      </section>

      <section id="list-product" style={{ 'text-align': 'left' }}>
        <Container data={listProduct.products}></Container>

      </section>
    </div>


  );
}

export default App;
