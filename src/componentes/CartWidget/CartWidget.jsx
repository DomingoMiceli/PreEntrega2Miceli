import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img className='carrito' src="/imagenes/carrito.png"/>
            <strong style={{color: 'white'}}>1</strong>
        </div>
    )
}

export default CartWidget