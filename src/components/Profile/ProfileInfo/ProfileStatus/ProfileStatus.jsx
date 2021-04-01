import { useState } from 'react';
import { validate } from '../../../../scripts/scripts';
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

    const { newStatus, status = 'No status...', updateProfileStatus, publishStatus } = props
    const { authId, userId } = props

    const [hideTA, setideTA] = useState(false)
    const [hideButton, setHideButton] = useState(false)

    const toggleMode = e => {
        if (authId === userId) {
            setHideTA(true)
            setHideButton(false)
        }
    }

    const publish = () => {
        publishStatus(newStatus)
        setHideButton(true)
        setHideTA(true)
    }

    const updateStatus = e => updateProfileStatus(e.target.value)

    return (
        <div className={styles.profileStatus}>
            {
                !hideTA || !hideButton ?
                    <div onBlur={toggleMode} className={styles.textareaContainer}>
                        <textarea autoFocus={true} onChange={updateStatus} value={newStatus} />
                        <button disabled={!validate(newStatus)} onClick={publish}>Publish</button>
                    </div>
                    :
                    <div className={styles.statusContainer}>
                        <span onClickCapture={toggleMode} >{status}</span>
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;