import * as React from 'react';
import ProductList from '../../components/productList/ProductList';
import { products } from '../../DataMock/data';

import styles from './Products.module.css';

const Products = () => {

    
    return (
        <div className={styles.products}>
            <ProductList productList={products}/>
        </div>
    )
}

export default Products;