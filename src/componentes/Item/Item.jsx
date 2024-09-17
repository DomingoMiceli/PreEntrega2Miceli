import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div className='cardProductos'>
        <img src={imagen} alt={nombre} onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/imagenes/Image-not-found.png";
        }}/>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <Link to={`/item/${id}` } className="boton-detalles">Ver Detalles</Link>
    </div>
  )
}

export default Item