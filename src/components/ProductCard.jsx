import React from 'react';
import styles from '../styles/ProductCard.module.css';


const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={product.inStock ? styles.productCard : `${styles.outOfStockClass} outOfStockClass` }>
      
      {/* TODO: Display product name */}
      <h3>{product.name}</h3>

      {/* TODO: Display product price */}
      <p>{product.price}</p>

      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      <p>{product.inStock === true ? 'In Stock' : 'Out Of Stock'}</p>

      <button onClick={() => onRemove(product.id)}>Remove</button>

    </div>
  );
};

export default ProductCard;

