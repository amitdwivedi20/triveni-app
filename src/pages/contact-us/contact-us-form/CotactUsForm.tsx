import React from "react";
import styles from './ContactUsForm.module.css';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from "@mui/material";

const ContactUsForm = () => {

    return (
        <div className={styles.contactusform}>
            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap',flexDirection:'column' }}> */}
            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                </FormControl>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                </FormControl>
            </div>

            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </FormControl>

            </div>
            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="City" variant="outlined" />
                </FormControl>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Mobile" variant="outlined" />
                </FormControl>
            </div>
            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Address" variant="outlined" />
                </FormControl>
            </div>
            <div className={styles.contactusform__row}>
                <div className={styles.contactusform__control__button}>
                    <Button variant="contained" >Submit</Button>
                </div>
            </div>
            {/* </Box> */}
        </div>
    )
}

export default ContactUsForm;