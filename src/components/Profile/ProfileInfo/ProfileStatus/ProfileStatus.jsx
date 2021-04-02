import { useState } from 'react';
import { validate } from '../../../../scripts/scripts';
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

    const { newStatus, status = 'No status...', updateProfileStatus, publishStatus } = props
    const { authId, userId } = props

    const [editMode, setEditMode] = useState(false)

    const toggleMode = e => {
        if (authId === userId) {
            setEditMode(!editMode)
        }
    }

    const publish = () => {
        publishStatus(newStatus)
        setEditMode(false)
    }

    const updateStatus = e => updateProfileStatus(e.target.value)

    return (
        <div className={styles.profileStatus}>
            {
                editMode ?
                    <div className={styles.textareaContainer} onMouseLeave={toggleMode} >
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