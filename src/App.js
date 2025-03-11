import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Time from './componentes/Time/Time.js';

function App() {
  //Lista de times com suas cores, com essa lista usandos o .map no Formulario
  const times = [
    {nome: 'Comercial', corPrimaria: '#6FC9B7', corSecundaria: '#dbf1ed'},
    {nome: 'Serviços', corPrimaria: '#FFE177', corSecundaria: '#F6EECF'},
    {nome: 'Atendimento', corPrimaria: '#1E91D6', corSecundaria: '#BFDEF1'},
    {nome: 'Relações', corPrimaria: '#B24C63', corSecundaria: '#D88C9A'}
  ]

  const [colaboradores, setColaboradores] = useState([]);
  const novoColaboradorAdd = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]); //Espalhando os colaboradores antigos e add o novo no final
  }
  
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado ={colaborador => novoColaboradorAdd(colaborador)}/>  

      {times.map(time => <Time 
        key={time.nome} nome={time.nome} 
        corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
      />)}

    </div>
  );
}

export default App;
