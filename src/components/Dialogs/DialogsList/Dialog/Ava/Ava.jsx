import styles from './Ava.module.css'
import { NavLink } from 'react-router-dom';

const Ava = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={styles.ava}>
            <NavLink to={path} activeClassName={styles.active}>
                <img src={props.src} alt="q" />
            </NavLink>
        </div>
    );
};


export default Ava;