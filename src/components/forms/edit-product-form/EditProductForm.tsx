import { Button, FormControl, TextField } from '@mui/material';
import styles from './EditProductForm.module.css';
import { FormEvent, SetStateAction, useState } from 'react';
import { IProduct } from '../../../DataMock/data';

const EditProductForm = (props:any) =>{
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');

    const nameInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value)
    }

    const typeInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setType(event.target.value)
    }
    const descriptionInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(event.target.value)
    }
    const colorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setColor(event.target.value)
    }
    const priceInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(event.target.value)
    }
    const onCreateFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        try {
            event.preventDefault();
            console.log(name,event);
            let data: IProduct = {
                productName: name,
                active: true,
                descriptionId: description,
                cost: price
            }
            props.submitForm(data)
            setName('');
            setColor('');
            setPrice('');
            setDescription('');
            setType('');            
        } catch (error) {
            throw new Error('Error On Submission of form')
        }
    }
    
    return(
        <div className={styles.edit_product_form__root}>
            <form onSubmit={onCreateFormSubmit}>
                <label className={styles.create_product_form_label}>Basic Details Section</label>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Name of Product" variant="outlined" onChange={nameInputChangeHandler} />
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Type" variant="outlined" onChange={typeInputChangeHandler}/>
                    </FormControl>
                </div>

               

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Color" variant="outlined" onChange={colorInputChangeHandler}/>
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
                        <TextField required id="outlined-basic" label="Material" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Color" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Body Color" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Door Color" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Features" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Description Details" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Description" variant="outlined" onChange={descriptionInputChangeHandler}/>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Cancel</Button>
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Update</Button>
                    </FormControl>

                </div>
            </form>
        </div>
    )
}
export default EditProductForm;