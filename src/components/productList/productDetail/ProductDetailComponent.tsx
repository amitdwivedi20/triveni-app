import React from "react";
import ProductDescriptionComponent from "./productDescriptionComponent/productDescriptionComponent";

import styles from './ProductDetail.module.css';

const ProductDetailComponent = () => {

    return(
        <div className={styles.product_detail_container}>
                <div className={styles.product_detail_content__image__container}>
                    this is imgae section dfjkhgjkd dfkjgh dkgh dkfgjh dkgh dkfjgh dfkg jkdfg hdfgkh sdnfndhjfgdshjfgsdhjfghjsfgsfgsjfgsjgfjshgf
                    dfgkhdjfghdjkghdjghkjdghdkjghdjkfgh
                </div>
            
            <div className={styles.product_detail_content}> 
                <ProductDescriptionComponent/>
               
            </div>
        </div>
    )
}

export default ProductDetailComponent;