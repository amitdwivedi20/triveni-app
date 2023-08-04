import React from "react";
import Product from "./product/Product";
import styles from './ProductList.module.css';
import Filter from "./filter/Filter";
import { Box, Divider, Drawer, IconButton, InputBase, Paper, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
const drawerWidth = '100%';
const ProductList = (props: any) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleFilterClick = () =>{
        setMobileOpen(true);
    }
    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div className={styles.nav_mobile__close}>
                    Filters
                    <span className={styles.nav_mobile__close___icon}>
                        <CloseIcon onClick={handleDrawerToggle} />
                    </span>
                </div>

            </Typography>
            <Divider />
            <Filter />
        </Box>
    );
    return (
        <div className={styles.productlist_root}>
            <div className={styles.filter_section}>
                <Filter />
            </div>
            <div className={styles.filter_section__mobile}>
                {/* <div className={styles.filter_section__mobile___content}>
                    <div className={styles.s_mobile_toolbar_sticky}>
                        <div className={ `${styles.filter_section__mobile___content___item__searchFilterBox} ${styles.searchFilterBox}`}>

                        </div>
                        
                        <div className={styles.filter_section__mobile___content___item__filters}>
                            <div className={styles.filter_section__mobile___content___item__filters__content}>
                            Filters
                            </div>
                            
                        </div>
                    </div>
                </div> */}
                <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'auto', borderRadius: 0 }}>
                    {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Product"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton> */}
                    <Typography onClick={handleFilterClick}>
                        Filters <ArrowDropDownIcon className={styles.filter__arowdownicon} />
                    </Typography>
                </Paper>
            </div>
            <div className={styles.productList_section}>
                {props.productList.map((item: any, index: number) => <div className={styles.productList_content}><Product product={item} key={item.productId + item.productName + index} /></div>)}

            </div>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>
        </div>
    )
}

export default ProductList;