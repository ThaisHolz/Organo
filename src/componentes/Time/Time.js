import Colaborador from '../Colaborador/Colaborador';
import './Time.css';

const Time = (props) => {
    //Utilizando estilos css como props
    const css = {backgroundColor: props.corSecundaria};
    const cssNome ={borderColor: props.corPrimaria};

    return(
        //Esse propa é para esconder os times que não possuem colaboradores
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={cssNome}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador
                    nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}

export default Time;
