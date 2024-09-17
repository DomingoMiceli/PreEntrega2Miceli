import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, imagen, detalle, categoria, stock, colores, talles, material}) => {
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
    </div>
  )
}

export default ItemDetail