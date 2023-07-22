import * as React from 'react';
import ProductList from '../../components/productList/ProductList';
import { ICommonResponse, products } from '../../DataMock/data';

import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { getProductList } from '../../services/product-service/ProductService';

const Products = () => {

    const [productList , setProducts] = useState('');
    const [showProductList, setShowProductList] = useState(false);
    
    useEffect(()=>{
        try {
            getProductList().then((res:ICommonResponse)=>{
                console.log('res product poage',res);
                setProducts(res.result);
                if(res.result.length){
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