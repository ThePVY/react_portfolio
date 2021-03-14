import styles from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={styles.dialog}>
            <div className={styles.ava}>
                <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt="q"/>
            </div>
            <div className={styles.preview}>
                <span>{ props.preview }</span>
            </div>
        </div>
    );
};

export default Dialog;