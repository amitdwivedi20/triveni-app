import React, { useEffect, useState } from "react";
import ProductDescriptionComponent from "./productDescriptionComponent/productDescriptionComponent";
import styles from './ProductDetail.module.css';
import sampleImg from '../../../assets/images/146_original_ST2-600x720-Open-Clothes-Opti-NEW-PM.jpeg';
import { useParams } from 'react-router';
import { getProductById } from "../../../services/product-service/ProductService";
import { ICommonResponse, IProduct } from "../../../DataMock/data";
import { AppConstants } from "../../../constants";

const ProductDetailComponent = () => {
    const params = useParams();
    const [product , setProduct] = useState<IProduct | null>(null);
    const [isProductAvailable, setIsProductAvailable] = useState(false);

    useEffect(()=>{
        console.log('productdetail compoenent --- ', params.productId);
        const productId = params && params.productId ? params.productId : '';
        try {
            if(productId && productId.length){
                getProductById(productId).then((res: ICommonResponse) => {
                    if (res && res.status == AppConstants.statusCodes.status200) {
                        //setProductList(res.result);
    
                        if (res.result && res.result.length) {
                            setIsProductAvailable(true);
                            const product: IProduct = res.result[0];
                            console.log('product --- ', product);
                            setProduct(product);
                        }
                    } else {
                        console.log('Api error while product fetch');
                    }
                });
            }
            
        } catch (error) {
            console.log('error while feetching product details')
        }
    },[])
    return (

        <div className={styles.product_detail_container}>
            <div className={styles.product_detail_content__image__container}>
                <img alt="test-image-product" src={product?.imgUrl} />
            </div>
            <div className={styles.product_detail_content}>
                {isProductAvailable && <ProductDescriptionComponent product={product}/>}
            </div>
        </div>
    )
}

export default ProductDetailComponent;