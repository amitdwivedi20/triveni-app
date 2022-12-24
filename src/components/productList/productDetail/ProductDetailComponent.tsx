import React from "react";
import ProductDescriptionComponent from "./productDescriptionComponent/productDescriptionComponent";
import styles from './ProductDetail.module.css';
import sampleImg from '../../../assets/images/sample-image.png'

const ProductDetailComponent = () => {

    return(
        <div className={styles.product_detail_container}>
                <div className={styles.product_detail_content__image__container}>
                    <img alt="test-image-product" src={sampleImg}/>
                </div>
            <div className={styles.product_detail_content}> 
                <ProductDescriptionComponent/>               
            </div>
        </div>
    )
}

export default ProductDetailComponent;