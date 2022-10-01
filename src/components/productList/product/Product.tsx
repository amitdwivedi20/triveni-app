import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

import styles from './Product.module.css';

const Product = (props: any) => {
    console.log(props.product);
    const product = props.product;
    return (
        <div className= {styles.product}>
            <Card sx={{ maxWidth: 'xl',display: 'flex' ,flexDirection: 'row', margin:'auto'}}>
                
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
                    <Typography>
                        {product.descriptionList.map((description: string) => <div><li>{description}</li></div>)}
                    </Typography>
                </CardContent>
                </Box>

                <Box className={styles.product_card__action}>
                <CardActions>
                    <Button size="small" variant="outlined">More Details</Button>
                    {/* <Button size="small">Add to cart</Button> */}
                </CardActions>
                </Box>
                
            </Card>
        </div>
    )
}

export default Product;