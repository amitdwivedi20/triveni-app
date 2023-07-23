import { Button, FormControl, TextField } from '@mui/material';
import styles from './EditProductForm.module.css';
import { FormEvent, SetStateAction, useEffect, useState } from 'react';
import { IProduct } from '../../../DataMock/data';

const EditProductForm = (props: { product: IProduct | null, submitForm: (arg0: IProduct) => void; }) => {
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState(props.product);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [colors, setColors] = useState('');
    const [bodyColor, setBodyColor] = useState('');
    const [doorColor, setDoorColor] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [descriptionDetails, setDescriptionDetails] = useState('');
    const [material, setMaterial] = useState('')

    useEffect(() => {
        try {
            if(props.product)
            setProduct(props.product);
            setFieldValues(props.product)

        } catch (error) {
            throw new Error('Error while fetching response')
        }

    }, []);
    const nameInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setName(event.target.value)
    }

    const colorsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setColors(event.target.value)
    }

    const descriptionInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDescription(event.target.value)
    }

    const priceInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPrice(event.target.value)
    }
    const dimensionsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDimensions(event.target.value)
    }

    const bodyColorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setBodyColor(event.target.value)
    }
    const doorColorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDoorColor(event.target.value)
    }
    const descriptionDetailsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDescriptionDetails(event.target.value)
    }

    const materialInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMaterial(event.target.value)
    }

    const onCreateFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        try {
            event.preventDefault();
            console.log(name, event);
            let data: IProduct = {
                productName: name,
                active: true,
                cost: price,
                material: '',
                dimensions: '',
                colors: '',
                bodyColor: '',
                doorColor: '',
                description: '',
                descriptionDetails: ''
            }
            props.submitForm(data)
            setName('');
            setColor('');
            setPrice('');
            setDescription('');
        } catch (error) {
            throw new Error('Error On Submission of form')
        }
    }

    const setFieldValues = (product: IProduct | null) => {
        product && setName(product.productName);
        product && setPrice(product.cost);
        product && setColors(product.colors);
        product && setDimensions(product.dimensions);
        product && setMaterial(product.material);
        product && setBodyColor(product.bodyColor);
        product && setDoorColor(product.doorColor);
        product && setDescription(product.description);
        product && setDescriptionDetails(product.descriptionDetails);
    }
    const onClickResetHandler = () => {
        resetFormControls();
    }
    const resetFormControls = () => {
        setName('');
        setPrice('');
        setColors('');
        setDimensions('');
        setMaterial('');
        setBodyColor('');
        setDoorColor('');
        setDescription('');
        setDescriptionDetails('');
    }

    return (
        <div className={styles.edit_product_form__root}>

            <form onSubmit={onCreateFormSubmit}>
                <label className={styles.create_product_form_label}>Basic Details Section</label>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Name of Product" variant="outlined" onChange={nameInputChangeHandler} value={name} />
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Price" variant="outlined" onChange={priceInputChangeHandler} value={price} />
                    </FormControl>
                </div>

                <label className={styles.create_product_form_label}>Description Section</label>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Material" variant="outlined" onChange={materialInputChangeHandler} value={material} />
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="dimensions" variant="outlined" onChange={dimensionsInputChangeHandler} value={dimensions} />
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Color" variant="outlined" onChange={colorsInputChangeHandler} value={colors} />
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Body Color" variant="outlined" onChange={bodyColorInputChangeHandler} value={bodyColor} />
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Door Color" variant="outlined" onChange={doorColorInputChangeHandler} value={doorColor} />
                    </FormControl>
                </div>


                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Description" variant="outlined" onChange={descriptionInputChangeHandler} value={description} />
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Description Details" variant="outlined" onChange={descriptionDetailsInputChangeHandler} value={descriptionDetails} />
                    </FormControl>
                </div>



                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="button" onClick={onClickResetHandler}>Reset</Button>
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Submit</Button>
                    </FormControl>

                </div>
            </form>
        </div>
    )
}
export default EditProductForm;