import './CampoTexto.css';

//Forma diferente de criar o componente sem uma functicon
const CampoTexto = (props) => {
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto;