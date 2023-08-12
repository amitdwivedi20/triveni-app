import React from "react";
import styles from './Loader.module.css';
import { Backdrop, Box, CircularProgress } from "@mui/material";

const Loader = (props: any) => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className={styles.loader__root__container}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
export default Loader;