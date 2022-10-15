import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

import styles from './Product.module.css';
import { useNavigate } from "react-router-dom";

const Product = (props: any) => {
    const navigate = useNavigate();
    const onClickItem: any = async () => {
        console.log(props.product.id);
        
        navigate(`/products/${props.product.id}`)
    }
    //console.log(props.product);
    const product = props.product;
    return (
        <div className= {styles.product}>
            <Card sx={{ maxWidth: 'xl',display: 'flex' ,flexDirection: 'row', margin:'auto'}} onClick={onClickItem}>
                
                <CardMedia
                    component="img"
                    className={styles.card_img}
                    image={product.img}
                    alt="green iguana"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' ,flexGrow:'3'}}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start' }}>
                    <Typography gutterBottom variant="h5" component="div" className= {styles.product__productname}>
                    {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {product.description}
                    </Typography>
                    <Typography className={styles.product__description__List}>
                        {product.descriptionList.map((description: string,index:number) => <li key={index}>{description}</li>)}
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