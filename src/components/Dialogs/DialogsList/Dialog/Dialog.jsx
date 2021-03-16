import styles from './Dialog.module.css'
import Ava from './Ava/Ava';
import Name from './Name/Name';
import Preview from './Preview/Preview';


const Dialog = (props) => {

    return (
        <div className={styles.dialog}>
            <Ava id={props.id} src='https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg' />
            <Name id={props.id} name={props.name} />
            <Preview preview={props.preview} />
        </div>
    );
};

export default Dialog;