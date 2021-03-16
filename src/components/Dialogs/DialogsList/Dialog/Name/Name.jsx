import styles from './Name.module.css'
import { NavLink } from 'react-router-dom';

const Name = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={styles.name}>
            <NavLink to={path} activeClassName={styles.active}>
                {props.name}
            </NavLink>
        </div>
    );
};

export default Name;