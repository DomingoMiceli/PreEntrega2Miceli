import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <div className='contenedorProductos'>
        {/*Hacemos una copia del array productos y le pasamos las propiedades de cada producto como props*/}
        {productos.map(producto => <Item key={producto.id} {...producto}/>)}
    </div>
  )
}

export default ItemList