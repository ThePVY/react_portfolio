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
                            <span>{props.login}</span>
                            <button onClick={props.handleSignOut}>Sign Out</button> 
                        </>
                        :
                        <button><NavLink to='/login'>Sign in</NavLink></button>
                }
            </div>
        </header>
    );
};

export default Header;