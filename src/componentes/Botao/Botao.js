import './Botao.css';

const Botao = (props) => {
    return(
        //Children serve para texto, imagem ou que precisar
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao;
