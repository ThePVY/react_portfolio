import styles from './Header.module.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = props => {
    const { isAuthorized = false } = props
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" />
            <div className={styles.authBlock}>
                {
                    isAuthorized ?
                        <> 
                            <div className={styles.loginContainer}>
                                <span>{props.login}</span>
                            </div>
                            <div className={styles.buttonContainer} >
                                <button onClick={props.handleSignOut}>Sign Out</button> 
                            </div>
                        </>
                        :
                        <div className={styles.buttonContainer} >
                            <button><NavLink to='/login'>Sign in</NavLink></button>
                        </div>
                }
            </div>
        </header>
    );
};

export default Header;