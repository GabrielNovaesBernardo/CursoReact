import logo from './logo.svg';
import './App.css';
import HelloWord from './Compnents/HelloWord';

function soma(a,b){
  return a+b
}

const name= 'gabriel'

const url = 'https://via.placeholder.com/150'
function App() {
  return (
    <div className="App">
      <h2>alterando jsx</h2>
      <p>Olá, {name}</p>
      <p>Soma: {soma(1,2)}</p>
      <img src={url} alt="minha imagem"/>
      <HelloWord/>
    </div>
  );
}

export default App;
