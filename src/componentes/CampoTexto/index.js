import './CampoTexto.css'



const CampoTexto = (props) => {
  
// let valor = 'Renata Matsu'

const aoDigitado = (evento) => {
  props.aoAlterado(evento.target.value)
}

console.log(props.label)

return (
  <div className="campo-texto">
    <label>{props.label}</label>
    <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
  </div>
)
}

export default CampoTexto