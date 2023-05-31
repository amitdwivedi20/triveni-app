import * as React from 'react';
import ProductList from '../../components/productList/ProductList';
import { products } from '../../DataMock/data';

import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { getProductList } from '../../services/product-service/ProductService';

const Products = () => {

    const [productList , setProducts] = useState('');
    const [showProductList, setShowProductList] = useState(false);
    
    useEffect(()=>{
        try {
            getProductList().then((res)=>{
                console.log('res product poage',res);
                setProducts(res);
                if(res.length){
                    setShowProductList(true);
                }else{
                    setShowProductList(false);
                }           

            })
        } catch (error) {
            throw new Error('Error while fetching response')
        }
      
    },[]);
        
    return (
        <div className={styles.products}>
            {showProductList && <ProductList productList={productList}/>}
        </div>
    )
}

export default Products;