import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

import styles from './Product.module.css';

const Product = (props: any) => {
    console.log(props.product);
    const product = props.product;
    return (
        <div className= {styles.product}>
            <Card sx={{ maxWidth: 'xl',display: 'flex' }}>
                {/* <CardHeader title={product.name}/> */}
                <CardMedia
                    component="img"
                    height="140"
                    // width="auto"
                    image={product.img}
                    alt="green iguana"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {product.description}
                    </Typography>
                </CardContent>
                </Box>
                {/* <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        </div>
    )
}

export default Product;