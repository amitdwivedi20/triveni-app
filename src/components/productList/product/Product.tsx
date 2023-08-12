import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

import styles from './Product.module.css';
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../DataMock/data";
import { getListValueForForm } from "../../../services/product-service/ProductService";

const Product = (props: any) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [keyFeatureList, setKeyFeatureList] = useState([{ description: '' }]);
    //const product = props.product;
    const navigate = useNavigate();
    useEffect(() => {
        setProduct(props.product);
        console.log(props.product);
        let keyFeature = getListValueForForm(props.product?.keyFeatures, 'description');
        console.log(keyFeature)
        setKeyFeatureList(keyFeature);
        console.log('product,keyFeatureList -- ', product, keyFeatureList)
    }, []);

    const onClickItem: any = async () => {
        console.log(props.product.id);

        navigate(`/products/${props.product.productid}`)
    }
    
    const getLocalCurrencyString = (value: any) => {
       return value.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            // style: 'currency',
            minimumFractionDigits: 2,
            currency: 'INR'
        });
    }

    return (
        <div className={styles.product}>
            <Card sx={{ maxWidth: 'xl', display: 'flex', flexDirection: 'column', margin: 'auto',flexBasis: '33.33' }} onClick={onClickItem}>

                <CardMedia
                    component="img"
                    className={styles.card_img}
                    image={product?.imgUrl}
                    alt="product Image"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexBasis: '33.33' }}>
                    <CardContent className={styles.product__content}>
                        <Typography gutterBottom variant="h5" component="div" className={styles.product__productname}>
                            {product?.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product?.description}
                        </Typography>
                        <Typography className={styles.product__description__List}>
                            <div className={styles.product_description_section}>
                            {keyFeatureList && keyFeatureList.map((keyFeature, index) => <span className={styles.product_description_section__keyfeatures} key={index + keyFeature.description}>
                                {keyFeature.description}
                                {index !== keyFeatureList.length - 1 && <span>/</span>}
                            </span> )}
                            </div>                            
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span className={styles.price_symbol}>₹</span> <span className={styles.font_28}>{product?.cost ? getLocalCurrencyString(product?.cost) : getLocalCurrencyString(0)} </span>INR
                        </Typography>
                    </CardContent>
                </Box>

                {/* <Box className={styles.product_card__action}>
                <CardActions>
                    <Button size="small" variant="outlined">More Details</Button>
                </CardActions>
                </Box> */}

            </Card>
        </div>
    )
}

export default Product;