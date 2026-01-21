import './App.css'
import { Products } from './components/products'
import { Header } from './components/header'
import {products  as initialProducts }from './mocks/products.json'
import { useState } from 'react'

function App() {
const [products] = useState(initialProducts)
const [filter, setFilter] = useState({category: 'all',minePrice: 0})

const filterProducst = (products: typeof initialProducts) =>{
  return products.filter(product => {
    return product.price >= filter.minePrice &&
    (filter.category === 'all' || product.category === filter.category)
  })
}
  return (
    <>
    <Header/>
    <Products products={filterProducst(products)} />
    </>
  )
}

export default App
