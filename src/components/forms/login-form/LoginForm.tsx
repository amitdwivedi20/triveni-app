import FormControl from '@mui/material/FormControl/FormControl';
import styles from './LoginForm.module.css';
import TextField from '@mui/material/TextField/TextField';
import { FormEvent, SetStateAction, useState } from 'react';
import { Button } from '@mui/material';
import { IUser } from '../../../DataMock/data';

const LoginFormComponent = (props: { submitLoginForm: (arg0: IUser) => void; }) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const userNameChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setUserName(event.target.value)
    }
    const passwordChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value)
    }

    const onLoginFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            let data : IUser = {
                username: userName,
                password: password,
                active: true
            }
            props.submitLoginForm(data);

        } catch (error) {
            
        }
    }

    return (
        <div className={styles.loginform_root}>
            <h2>Login In</h2>
            <form onSubmit={onLoginFormSubmit}>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="User Name" variant="outlined" onChange={userNameChangeHandler} />
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <TextField required id="outlined-basic" label="Password" variant="outlined" onChange={passwordChangeHandler} />
                    </FormControl>
                </div>
                <div className={styles.form__row}>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Cancel</Button>
                    </FormControl>
                    <FormControl className={styles.form__row___control}>
                        <Button variant="contained" type="submit">Login</Button>
                    </FormControl>

                </div>
            </form>
        </div>
    )
}

export default LoginFormComponent;