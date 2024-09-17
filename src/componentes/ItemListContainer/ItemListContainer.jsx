import {useState, useEffect} from "react";
import {getProductos, getProductosPorCategoria} from "../../asynmock";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {categoriaId} = useParams();
    
    useEffect(() => {
        const funcionCategoria = categoriaId ? getProductosPorCategoria : getProductos;
        funcionCategoria(categoriaId)
        .then(res => setProductos(res))
        .catch(err => console.log(err))
    }, [categoriaId])

    return (
        <div className="contenedorItemListProductos">
            {/*<h2 style={{textAlign: "center"}}>{greeting}</h2>*/}
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer