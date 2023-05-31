import React from "react";
import Product from "./product/Product";
import styles from './ProductList.module.css';
const ProductList = (props: any) => {
    return (
        <div> {props.productList.map((item: any, index: number) => <Product product={item} key={item.productId + item.productName} />)}</div>
    )
}

export default ProductList;