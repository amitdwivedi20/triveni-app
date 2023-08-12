import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Tooltip } from '@mui/material';
import styles from './EditProductForm.module.css';
import { ChangeEvent, FormEvent, SetStateAction, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { IProduct } from '../../../DataMock/data';
import { MuiFileInput } from 'mui-file-input';
import S3FileUpload from 'react-s3';
import { uploadFile } from 'react-s3';
import { deleteFile } from 'react-s3';
import Loader from '../../loader/Loader';
import { AppConstants } from '../../../constants';
import ClearIcon from '@mui/icons-material/Clear';
window.Buffer = window.Buffer || require("buffer").Buffer;

const EditProductForm = (props: { product: IProduct | null, submitForm: (arg0: IProduct) => void; }) => {
    const bucketConfig = AppConstants.s3Config;
    const [color, setColor] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState(props.product);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [colors, setColors] = useState('');
    const [bodyColor, setBodyColor] = useState('');
    const [doorColor, setDoorColor] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [material, setMaterial] = useState('');
    const [keyFeatureList, setKeyFeatureList] = useState([{ description: '' }]);
    const [aboutProductList, setAboutProductList] = useState([{ aboutProduct: '' }]);
    const [length, setLength] = useState('');
    const [breadth, setBreadth] = useState('');
    const [height, setHeight] = useState('');
    const [gaurantee, setGaurantee] = useState('');
    const [modelType, setModelType] = useState('');
    const [modelWidth, setModelWidth] = useState('');
    const [doorsCount, setDoorsCount] = useState('');
    const [availablePaintType, setAvailablePaintType] = useState('');
    const [imgUrl, setImageUrl] = useState('');
    const [showLoader, setShowLoader] = useState(false);
    const [value, setValue] = useState<File | null>(null)

    useEffect(() => {
        try {
            if (props.product)
                setProduct(props.product);



            setFieldValues(product);

        } catch (error) {
            throw new Error('Error while fetching response')
        }

    }, []);

    const getListValueForForm = (dataString: string = '[]', keyStr: string) => {
        let str;
        let strArray: any = [];
        try {
            str = JSON.parse(dataString);
            if (str && str.length) {
                str.forEach((element: string) => {
                    let obj: { [key: string]: string } = {};
                    obj[keyStr] = element;
                    strArray.push(obj);
                });
            }
        } catch (error) {
            console.log('error while parsing List Form Value --', error)
        }
        return strArray;
    }

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
    // const dimensionsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
    //     setDimensions(event.target.value)
    // }

    const bodyColorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setBodyColor(event.target.value)
    }
    const doorColorInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDoorColor(event.target.value)
    }
    // const descriptionDetailsInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
    //     setDescriptionDetails(event.target.value)
    // }

    const materialInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMaterial(event.target.value)
    }

    const lengthInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLength(event.target.value)
    }

    const breadthInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setBreadth(event.target.value)
    }

    const heightInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setHeight(event.target.value)
    }

    const onCreateFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        try {
            event.preventDefault();
            let data: IProduct = {
                productName: name,
                active: true,
                cost: price,
                material: material,
                dimensions: getDimensions(),
                colors: colors,
                bodyColor: bodyColor,
                doorColor: doorColor,
                description: description,
                keyFeatures: JSON.stringify(getKeyFeatureValueList(keyFeatureList)),
                aboutProduct: JSON.stringify(getAboutProductValueList(aboutProductList)),
                gaurantee: gaurantee,
                modelType: modelType,
                modelWidth: modelWidth,
                doorsCount: doorsCount,
                availablePaintType: availablePaintType,
                imgUrl: imgUrl
            }
            props.submitForm(data);
        } catch (error) {
            throw new Error('Error On Submission of form')
        }
    }

    const getDimensions = () => {
        return length + ' * ' + breadth + ' * ' + height;
    }
    const getKeyFeatureValueList = (keyFeatureList: any): string[] => {
        let keyFeatureArray: string[] = [];
        keyFeatureList.forEach((element: { description: string; }) => {
            keyFeatureArray.push(element.description);
        });
        return keyFeatureArray;
    }

    const setFieldValues = (product: IProduct | null) => {

        let aboutProduct = getListValueForForm(product?.aboutProduct, 'aboutProduct');
        setAboutProductList(aboutProduct);
        let keyFeatures = getListValueForForm(product?.keyFeatures, 'description');
        setKeyFeatureList(keyFeatures);
        let length, breadth, height;
        length = product && product.dimensions ? product.dimensions.split(' * ')[0] : '';
        breadth = product && product.dimensions ? product.dimensions.split(' * ')[1] : '';
        height = product && product.dimensions ? product.dimensions.split(' * ')[2] : '';
        setLength(length);
        setBreadth(breadth);
        setHeight(height);
        product && setName(product.productName);
        product && setPrice(product.cost);
        product && setColors(product.colors);
        product && setDimensions(product.dimensions);
        product && setMaterial(product.material);
        product && setBodyColor(product.bodyColor);
        product && setDoorColor(product.doorColor);
        product && setGaurantee(product.gaurantee);
        product && setModelType(product.modelType);
        product && setModelWidth(product.modelWidth);
        product && setAvailablePaintType(product.availablePaintType);
        product && setDoorsCount(product.doorsCount);
        product && setDescription(product.description);
        product && setImageUrl(product.imgUrl)
    }

    const onClickResetHandler = () => {
        resetFormControls();
    }

    const resetFormControls = () => {
        setName('');
        setPrice('');
        setColors('');
        setMaterial('');
        setBodyColor('');
        setDoorColor('');
        setDescription('');
        setGaurantee('');
        setLength('');
        setBreadth('');
        setHeight('');
        setAboutProductList([{ aboutProduct: '' }]);
        setKeyFeatureList([{ description: '' }]);
        setModelType('');
        setModelWidth('');
        setDoorsCount('');
        setAvailablePaintType('');
        setImageUrl('');
    }

    const removeAboutProductControl = (event: any, index: number) => {
        const list = [...aboutProductList];
        list.splice(index, 1);
        setAboutProductList(list);
    }

    const aboutProductInputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        const list = [...aboutProductList];
        list[index].aboutProduct = event.target.value;
        setAboutProductList(list);
    }

    const onClickAddAboutProduct = () => {
        setAboutProductList([...aboutProductList, { aboutProduct: '' }])
    }

    const getAboutProductValueList = (aboutProductList: any): string[] => {
        let aboutProductListArray: string[] = [];
        aboutProductList.forEach((element: { aboutProduct: string; }) => {
            aboutProductListArray.push(element.aboutProduct);
        });
        return aboutProductListArray;
    }

    const modelTypeInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setModelType(event.target.value)
    }
    const modelWidthInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setModelWidth(event.target.value)
    }
    const doorsCountInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDoorsCount(event.target.value)
    }
    const availablePaintTypeInputChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAvailablePaintType(event.target.value)
    }


    const removeKeyfeatureControl = (event: any, index: number) => {
        //console.log(event, index);
        const list = [...keyFeatureList];
        list.splice(index, 1);
        setKeyFeatureList(list);
    }

    const keyFeatureInputChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
        //console.log(event, index);
        //const { name, value } = event.target;
        const list = [...keyFeatureList];
        list[index].description = event.target.value;
        setKeyFeatureList(list);
    }

    const onClickAddDescription = () => {
        //console.log('Add Description clicked -- ');
        setKeyFeatureList([...keyFeatureList, { description: '' }])
    }

    const uploadProductImage = async (file) => {
        setShowLoader(true);
        uploadFile(file, bucketConfig)
            .then((data: { location: string; }) => {
                console.log('image uploaded successfully', data);
                let imgUrl = data && data.location ? data.location : '';
                setImageUrl(imgUrl);
                setShowLoader(false);
            })
            .catch((err) => {
                setShowLoader(false);
                console.error(err)
            })
    }

    const imageUploadChangeHandler = (event) => {
        uploadProductImage(event)
    }
    const removeImg = async () => {
        const fileName = imgUrl && imgUrl.length ? imgUrl.split('product_images/')[1] : '';
        try {
            if (fileName.length) {
                deleteUploadedFile(fileName, bucketConfig)
            }
        } catch (error) {
            console.log('error while deleting --', error)
        }

    }

    const deleteUploadedFile = async (fileName, bucketConfig) => {
        setShowLoader(true);
        deleteFile(fileName, bucketConfig)
            .then((data: { location: string; }) => {
                console.log('image deleted successfully', data);
                //let imgUrl = data && data.location ? data.location : '';
                setImageUrl('');
                setShowLoader(false);
            })
            .catch((err) => {
                setShowLoader(false);
                console.error(err)
            })
    }

    return (
        <div className={styles.edit_product_form__root}>
            {showLoader && <Loader />}
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
                        <TextField required label="Length" variant="outlined" onChange={lengthInputChangeHandler} value={length} />
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Breadth" variant="outlined" onChange={breadthInputChangeHandler} value={breadth} />
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Height" variant="outlined" onChange={heightInputChangeHandler} value={height} />
                    </FormControl>
                </div>

                {/* <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="dimensions" variant="outlined" onChange={dimensionsInputChangeHandler} value={dimensions} />
                    </FormControl>
                </div> */}

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
                        <InputLabel id="demo-simple-select-standard-label">Model Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={modelType} label="Model Type" onChange={modelTypeInputChangeHandler}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="household">House Hold</MenuItem>
                            <MenuItem value="office">Office Use</MenuItem>
                            <MenuItem value="commercial">Commercial</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl className={styles.form__row___control}>
                        <InputLabel id="demo-simple-select-standard-label">No of Doors</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={doorsCount} label="Model Type" onChange={doorsCountInputChangeHandler}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Model Width" variant="outlined" onChange={modelWidthInputChangeHandler} value={modelWidth} />
                    </FormControl>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Available Paint Type" variant="outlined" onChange={availablePaintTypeInputChangeHandler} value={availablePaintType} />
                    </FormControl>
                </div>


                <label className={styles.create_product_form_label}>Key features Section</label>


                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Description" variant="outlined" onChange={descriptionInputChangeHandler} value={description} />
                    </FormControl>
                </div>

                {
                    keyFeatureList.map((item, index) => {
                        return (
                            <div className={styles.form__row} key={index}>
                                <FormControl className={styles.form__row___control}>
                                    <TextField required label="key feature" variant="outlined" name="key-feature" onChange={(event) => keyFeatureInputChangeHandler(event, index)} value={item.description} />
                                </FormControl>
                                {keyFeatureList.length > 1 && <div>
                                    <Tooltip title={'Delete Key feature'} >
                                        <IconButton aria-label="delete" color="primary" onClick={(event) => { removeKeyfeatureControl(event, index) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>}
                            </div>

                        );
                    })
                }
                <div className={styles.form__row__btn}>
                    <div className={styles.add__new__control}>
                        <Button variant="outlined" size="small" startIcon={<AddIcon />} onClick={onClickAddDescription}>
                            Description
                        </Button>
                    </div>
                </div>

                <label className={styles.create_product_form_label}>About Product Section</label>

                {/* <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Description Details" variant="outlined" onChange={descriptionDetailsInputChangeHandler} value={descriptionDetails} />
                    </FormControl>
                </div> */}

                {
                    aboutProductList.map((item, index) => {
                        return (
                            <div className={styles.form__row} key={'key-feature' + index}>
                                <FormControl className={styles.form__row___control}>
                                    <TextField required label="About Product" variant="outlined" name="key-feature" onChange={(event) => aboutProductInputChangeHandler(event, index)} value={item.aboutProduct} />
                                </FormControl>
                                {aboutProductList.length > 1 && <div>
                                    <Tooltip title={'Delete About Product'} >
                                        <IconButton aria-label="delete" color="primary" onClick={(event) => { removeAboutProductControl(event, index) }}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>}
                            </div>

                        );
                    })
                }
                <div className={styles.form__row__btn}>
                    <div className={styles.add__new__control}>
                        <Button variant="outlined" size="small" startIcon={<AddIcon />} onClick={onClickAddAboutProduct}>
                            Description Details
                        </Button>
                    </div>
                </div>

                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required label="Image Url" variant="outlined" name="key-feature" disabled={true} value={imgUrl} />
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <MuiFileInput placeholder="Insert product Image" value={value} onChange={imageUploadChangeHandler} />
                    </FormControl>
                    <Tooltip title={'Delete Product Image'} >
                        <IconButton aria-label="delete" color="primary" onClick={removeImg}>
                            <ClearIcon />
                        </IconButton>
                    </Tooltip>
                </div>


                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="button" onClick={onClickResetHandler}>Reset</Button>
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