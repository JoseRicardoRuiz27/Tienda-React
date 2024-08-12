import {products} from './json/productos.json'
import { Productos } from "./componentes/productos.jsx";
import { useState } from 'react';
import { Header } from './componentes/Header.jsx';

function App() {
  const [filter, setFilter] = useState({
    category: `All`,
    minPrice: 0
  });

  const filterProducts = (products) =>{
    return products.filter(product =>{
      return(
        product.price >= filter.minPrice && (
          filter.category === 'All' || 
          product.category === filter.category
        )
      )
    })
  }

  const productosFiltrados = filterProducts(products)
  return (<>
    <Header changeFilters={setFilter}/>
    <Productos products={productosFiltrados}/>
  </>)
}

export default App