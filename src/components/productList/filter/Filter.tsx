import React, { useEffect, useState } from "react";
import styles from './Filter.module.css';
import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, List, ListItem, ListItemButton, ListItemText, Radio, RadioGroup, Typography } from "@mui/material";
const Filter = () => {
    return (
        <div className={styles.product_filter_root}>

            <div className={styles.product_filter_content} >
                <div className={styles.product_filter_content__header}>
                    <span id="demo-radio-buttons-group-label">Categories</span>
                </div>
                
                <Divider variant="middle"/>
                <div className={styles.product_filter__sortby}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Sort By:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="popularity"
                            name="radio-buttons-group">
                            <FormControlLabel value="popularity" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Popularity</Typography>} />
                            <FormControlLabel value="rating" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Rating</Typography>} />
                            <FormControlLabel value="newestfirst" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Newest First</Typography>} />
                            <FormControlLabel value="priceascending" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Price: Low to High</Typography>} />
                            <FormControlLabel value="pricedescending" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Price: High to Low</Typography>} />
                        </RadioGroup>
                    </FormControl>
                </div>

                <Divider variant="middle"/>
                <div className={styles.product_filter__discount}>
                    <FormLabel id="demo-radio-buttons-group-label">Body Color:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="red"
                        name="radio-buttons-group" >
                        <FormControlLabel value="red" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Red</Typography>} />
                        <FormControlLabel value="green" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Green</Typography>} />
                        <FormControlLabel value="brown" control={<Radio className={styles.formControlLabelRadio} />} label={<Typography className={styles.formControlLabel}>Brown</Typography>} />
                    </RadioGroup>
                </div>

                <Divider variant="middle"/>
                <div className={styles.product_filter__discount}>
                    <FormLabel id="demo-radio-buttons-group-label">Model Type:</FormLabel>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem className={styles.list_item}>Household</ListItem>
                        <ListItem className={styles.list_item}>Office</ListItem>
                        <ListItem className={styles.list_item}>Commercial</ListItem>
                    </List>
                </div>

                <Divider variant="middle"/>
                <div className={styles.product_filter__discount}>
                    <FormLabel id="demo-radio-buttons-group-label">Discount:</FormLabel>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem className={styles.list_item}>10% Off or more</ListItem>
                        <ListItem className={styles.list_item}>20% Off or more</ListItem>
                        <ListItem className={styles.list_item}>30% Off or more</ListItem>
                    </List>
                </div>

                
                <Divider variant="middle"/>
                <div className={styles.product_filter__discount}>
                    <FormGroup>
                        <FormLabel id="demo-radio-buttons-group-label">Availability:</FormLabel>
                        <FormControlLabel control={<Checkbox />} label={<Typography className={styles.formControlLabel}>Include out of Stock</Typography>} />
                    </FormGroup>
                </div>
            </div>

        </div>
    )
}

export default Filter;