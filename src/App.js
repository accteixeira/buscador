import {useState} from 'react';
import './style.css';
import { FiSearch } from 'react-icons/fi' 
import api from './services/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch(){
   // 01310930/json/

   if(input === ''){
    alert("Preencha o seu cep!")
    return;
   }


   try{
    const response = await api.get('${input}/json');
    console.log('RESPONSE', response)
   }catch{
    alert("Ops, erro ao buscar!")
   }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

       <div className="containerInput">
      <input 
      type="text"
      placeholder="Digite seu cep..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <button className="buttonSearch" onClick={handleSearch}>
        <FiSearch size={25} color="#a020f0"/>
        </button>
        </div>

       <main className="main">
        <h2>CEP: 22640102</h2>

        <span>Logradouro: Avenida das Américas</span>
        <span>Complemento: Barra Shopping</span>
        <span>Bairro: Barra da Tijuca</span>
        <span>Estado: Rio de Janeiro - RJ</span>

       </main>
    </div>
  );
}

export default App;
