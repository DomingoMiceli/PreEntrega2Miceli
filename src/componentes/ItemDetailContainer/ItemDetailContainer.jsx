import {useState, useEffect} from 'react'
import {getProducto} from '../../asynmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getProducto(itemId)
            .then(res => setProducto(res))
            .catch(err => console.log(err))
    }, [itemId])

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer