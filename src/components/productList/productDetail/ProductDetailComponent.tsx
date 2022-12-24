import React from "react";
import ProductDescriptionComponent from "./productDescriptionComponent/productDescriptionComponent";
import styles from './ProductDetail.module.css';

import sampleimage from '../../../../public/assets/sample-image.png'

const ProductDetailComponent = () => {

    return(
        <div className={styles.product_detail_container}>
                <div className={styles.product_detail_content__image__container}>
                    <img alt="test-image-product" src="../../../../public/assets/sample-image.png"/>
                    <img alt="test-image-product" src="../../../../public/assets/ab1.png"/>
                    {/* <img alt="test-image-product" src={sampleimage}/> */}
                    <img alt="test-image-product" src="./public/assets/ab1.png"/>
                </div>
            <div className={styles.product_detail_content}> 
                <ProductDescriptionComponent/>               
            </div>
        </div>
    )
}

export default ProductDetailComponent;