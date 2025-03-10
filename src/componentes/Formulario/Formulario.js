import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Comercial',
        'Serviços',
        'Atendimento',
        'Relações'
    ]

    return(
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem'/>
                <ListaSuspensa label='Time' itens={times}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;
