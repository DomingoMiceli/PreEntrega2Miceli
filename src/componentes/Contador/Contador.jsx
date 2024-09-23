import {useState} from 'react';
import './Contador.css';

const Contador = ({valorInicial, stock, funcionAgregarCantidad}) => {
  const [contador, setContador] = useState(valorInicial)

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const restarContador = () => {
    if (contador > valorInicial) {
      setContador(contador - 1)
    }
  }
  
  return (
    <>
      <div className="contador-wrapper">
        <div className="contador-container">
          <button onClick={restarContador}>-</button>
          <strong> {contador} </strong>
          <button onClick={sumarContador}>+</button>
        </div>
        <button className="agregar-carrito" onClick={() => funcionAgregarCantidad(contador)}>Agregar al carrito</button>
      </div>
    </>
  )
}

export default Contador