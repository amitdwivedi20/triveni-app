import React, { SetStateAction, useState } from "react";
import styles from './ContactUsForm.module.css';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Loader from "../../../components/loader/Loader";

const ContactUsForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [showLoader, setShowLoader] = useState(false);

    const onSubmitHandler = () =>{
        let object = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            city: city,
            mobile: mobile,
            address: address
        }
        console.log('Contact us form submitted --- ', object);
        resetForm();
    }
    const firstNameInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setFirstName(event.target.value);
    }
    const lastNameInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLastName(event.target.value);
    }
    const emailInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    }
    const cityInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setCity(event.target.value);
    }
    const mobileInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMobile(event.target.value);
    }
    const addressInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAddress(event.target.value);
    }

    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setCity('');
        setMobile('');
        setAddress('');
    }


    return (
        <div className={styles.contactusform}>
            {showLoader && <Loader />}
            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField required id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={firstNameInputChangeHandler}/>
                </FormControl>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField required id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={lastNameInputChangeHandler}/>
                </FormControl>
            </div>

            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={emailInputChangeHandler}/>
                </FormControl>

            </div>
            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={cityInputChangeHandler}/>
                </FormControl>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Mobile" variant="outlined" value={mobile} onChange={mobileInputChangeHandler}/>
                </FormControl>
            </div>
            <div className={styles.contactusform__row}>
                <FormControl className={styles.contactusform__row___control}>
                    <TextField id="outlined-basic" label="Address" variant="outlined" value={address} onChange={addressInputChangeHandler}/>
                </FormControl>
            </div>
            <div className={styles.contactusform__row}>
                <div className={styles.contactusform__control__button}>
                    <Button variant="contained" onClick={onSubmitHandler}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default ContactUsForm;