import { useNavigate } from 'react-router-dom';
import styles from './AdminHome.module.css';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
const AdminHome = () => {
    const navigate = useNavigate();
    const onClickItemHandler = (key: string) => {
        console.log(key);
        switch (key) {
            case 'product':
                navigate(`/admin/products`);
                break;

            case 'homepage':
                navigate(`/admin/homepagepanel`);
                break;
            default:
                break;
        }
    }

    return (
        <div className={styles.adminpanelhome_root}>

            <div className={styles.adminpanelhome_content}>

                <div className={styles.adminpanelhome_content__item} onClick={event => onClickItemHandler('product')}>
                    <div className={styles.adminpanelhome_content__item__content}>
                        <div className={styles.gear}>
                            <SettingsTwoToneIcon />
                        </div>

                        <label>Products Panel</label>
                        <p> Select this for create, update or delete product</p>
                    </div>
                </div>

                <div className={styles.adminpanelhome_content__item} onClick={event => onClickItemHandler('homepage')}>
                    <div className={styles.adminpanelhome_content__item__content}>
                    <div className={styles.gear}>
                            <SettingsTwoToneIcon />
                        </div>
                        <label>Home Page Panel</label>
                        <p> Select this for homepage, update or delete</p>
                    </div>
                </div>

                <div className={styles.adminpanelhome_content__item} onClick={event => onClickItemHandler('aboutUs')}>
                    <div className={styles.adminpanelhome_content__item__content}>
                    <div className={styles.gear}>
                            <SettingsTwoToneIcon />
                        </div>
                        <label>About Us Panel</label>
                        <p> Select this for changing/updating About Us Page content</p>
                    </div>
                </div>

                <div className={styles.adminpanelhome_content__item} onClick={event => onClickItemHandler('r&r')}>
                    <div className={styles.adminpanelhome_content__item__content}>
                    <div className={styles.gear}>
                            <SettingsTwoToneIcon />
                        </div>
                        <label>Rewards & Recognitions Panel</label>
                        <p> Select this for changing/updating Rewards & Recognition Page</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminHome;