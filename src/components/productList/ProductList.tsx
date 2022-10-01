import React from "react";
import Product from "./product/Product";
import styles from './ProductList.module.css';
const ProductList = (props :any)=>{
    console.log('Procust List',props.productList)
    return(
        <div> {props.productList.map((item: any) => <Product product = {item}/>)}</div>
    )
}

export default ProductList;