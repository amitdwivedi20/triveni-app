import React from 'react';
import styles from './Login.module.css';
import LoginFormComponent from '../../components/forms/login-form/LoginForm';
import { IUser } from '../../DataMock/data';
import { login } from '../../services/user-service/UserService';
import { useNavigate } from 'react-router-dom';
import { AppConstants } from '../../constants';

const Login = () => {
    const navigate = useNavigate();
    const onLoginSubmitActionHandler = (arg: IUser): void => {
        try {
            console.log('form data -- ',arg);
            login(arg).then((res) => {
                console.log('res after login',res);
                if(res){
                    localStorage.setItem(AppConstants.storageKeys.isUserLoggedIn, "true");
                    localStorage.setItem(AppConstants.storageKeys.authToken, res)
                    navigate(`/admin`);
                }
            })
        } catch (error) {
            throw new Error('OnSubmitLoginForm Error');
        }
    }
    return (
        <div className={styles.login_page}>
            <div className={styles.login_page__loginform}>
                <LoginFormComponent submitLoginForm={onLoginSubmitActionHandler} />
            </div>
        </div>
    )
}

export default Login;