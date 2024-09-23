import React from 'react'
import './ItemDetail.css'
import Contador from '../Contador/Contador'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const ItemDetail = ({id, nombre, precio, imagen, detalle, categoria, stock, colores, talles, material}) => {
  const [cantidad, setCantidad] = useState(0)

  const funcionAgregarCantidad = (cantidad) => {
    setCantidad(cantidad)
    console.log("Cantidad agregada: " + cantidad)
  }

  return (
    <div className='contenedorItemDetail'>
        <img src={imagen} alt={nombre} onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/imagenes/Image-not-found.png";
        }}/>
        <h3>{nombre} {stock > 0 ? "(Hay stock)" : "(Producto agotado)"}</h3>
        <p>Detalle: {detalle}</p>
        <p>Colores: {colores}</p>
        <p>Talles: {talles}</p>
        <p>Material: {material}</p>
        <p>Precio: ${precio}</p>
        {cantidad > 0 ? (
          <Link to="/cart">
            <button className = "boton-finalizar-compra">Finalizar compra</button>
          </Link>
        ) : (
          <Contador valorInicial={1} stock={stock} funcionAgregarCantidad={funcionAgregarCantidad}/>
        )}
    </div>
  )
}

export default ItemDetail