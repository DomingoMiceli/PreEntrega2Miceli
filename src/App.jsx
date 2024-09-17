import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer greeting=""/>}/>
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting=""/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App