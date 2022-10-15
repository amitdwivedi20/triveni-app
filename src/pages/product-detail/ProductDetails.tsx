import React from "react";
import ProductDetailComponent from "../../components/productList/productDetail/ProductDetailComponent";
import styles from './ProductDetail.module.css';

const ProductDetail = () => {

    return (
        <div className={styles.product_details_page}>
            <ProductDetailComponent/>
            
        </div>
    )
}

export default ProductDetail;