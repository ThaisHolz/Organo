import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const novoColaboradorAdd = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]); //Espalhando os colaboradores antigos e add o novo no final
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado ={colaborador => novoColaboradorAdd(colaborador)}/>
    </div>
  );
}

export default App;
