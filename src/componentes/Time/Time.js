import './Time.css';

const Time = (props) => {
    //Utilizando estilos css como props
    const css = {backgroundColor: props.corSecundaria};
    const cssNome ={borderColor: props.corPrimaria};

    return(
        <section className='time' style={css}>
            <h3 style={cssNome}>{props.nome}</h3>
        </section>
    )
}

export default Time;
