import { Button, FormControl, TextField } from '@mui/material';
import styles from './CreateProductForm.module.css';
import { FormEvent, SetStateAction, useRef, useState } from 'react';
import { IProduct } from '../../../DataMock/data';
const CreateProductForm = (props: { submitForm: (arg0: IProduct) => void; }) => {

    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [colors, setColors] = useState('');
    const [price, setPrice] = useState('');
    const [bodyColor, setBodyColor] = useState('');
    const [doorColor, setDoorColor] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [descriptionDetails, setDescriptionDetails] = useState('');
    const [material, setMaterial] = useState('')

    const nameInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value)
    }
    const descriptionInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(event.target.value)
    }
    const colorsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setColors(event.target.value)
    }
    const priceInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(event.target.value)
    }

    const dimensionsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setDimensions(event.target.value)
    }

    const bodyColorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setBodyColor(event.target.value)
    }
    const doorColorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setDoorColor(event.target.value)
    }
    const descriptionDetailsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) =>{
        setDescriptionDetails(event.target.value)
    }

    const materialInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMaterial(event.target.value)
    }

    
    const onCreateFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        try {
            event.preventDefault();
            console.log(name,event);
            let data: IProduct = {
                productName: name,
                active: true,
                cost: price,
                material: material,
                dimensions: dimensions,
                colors: colors,
                bodyColor: bodyColor,
                doorColor: doorColor,
                description: description,
                descriptionDetails: descriptionDetails
            }
            props.submitForm(data);
            // setName('');
            // setColors('');
            // setPrice('');
            // setDescription('');     
        } catch (error) {
            throw new Error('Error On Submission of form')
        }
    }

    return (
        <div className={styles.create_product_form__root}>
            <form onSubmit={onCreateFormSubmit}>
                <label className={styles.create_product_form_label}>Basic Details Section</label>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Name of Product" variant="outlined" onChange={nameInputChangeHandler} />
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Price" variant="outlined" onChange={priceInputChangeHandler}/>
                    </FormControl>
                </div>

                <label className={styles.create_product_form_label}>Description Section</label>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Material" variant="outlined" onChange={materialInputChangeHandler}/>
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="dimensions" variant="outlined" onChange={dimensionsInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Color" variant="outlined" onChange={colorsInputChangeHandler}/>
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Body Color" variant="outlined" onChange={bodyColorInputChangeHandler}/>
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Door Color" variant="outlined" onChange={doorColorInputChangeHandler}/>
                    </FormControl>
                </div>

               
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Description" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Description Details" variant="outlined" onChange={descriptionDetailsInputChangeHandler}/>
                    </FormControl>
                </div>

                

                <div className={styles.form__row}>
                <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Reset</Button>
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Cancel</Button>
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Submit</Button>
                    </FormControl>

                </div>
            </form>
        </div>
    )
}

export default CreateProductForm;