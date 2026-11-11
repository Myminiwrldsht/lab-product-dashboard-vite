import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const [products, setProducts]= useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
   { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
  {id: 4, name:'Stylus pen', price: '$599', inStock: false},
  {id: 5, name:'Charger', price: '$799', inStock: true}
]);


  // TODO: Implement state to manage filtering
const  [filter, setFilter]= useState('all');
  // TODO: Implement logic to filter products based on availability
const filteredProducts = products.filter(product => {
  if(filter === 'inStock') {
    return product.inStock;
  }
  return true;
})
const handleRemove= (id) => {
  setProducts(products.filter(product => product.id !== id)
  );
};
  

  return (
    <div>
      <h1 id='header'>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <div style={{marginBottom: '20px'}}>
<button onClick={() => setFilter('all') } style={{marginRight: '10px', fontWeight: filter === 'all'? 'bold': 'normal'}}>All Products</button>
<button onClick={() => setFilter('inStock')} style={{ fontWeight: filter === 'inStock'? 'bold': 'normal'}}>In Stock</button>
</div>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onRemove={handleRemove}/>
    </div>
  );
};

export default App;
