import { useState } from 'react';
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {

    const { newStatus, status = 'Your status here...', updateProfileStatus, addProfileStatus } = props

    const [editMode, setMode] = useState(false)

    const toggleMode = e => {
        setMode(!editMode)
        addProfileStatus(newStatus)
    }

    const updateStatus = e => updateProfileStatus(e.target.value)

    return (
        <div className={styles.profileStatus}>
            {
                editMode ?
                    <div className={styles.textareaContainer}>
                        <textarea autoFocus={true} onBlur={toggleMode} onChange={updateStatus} value={newStatus} />
                    </div>
                    :
                    <div className={styles.statusContainer}>
                        <span onClick={toggleMode} >{status}</span>
                    </div>
            }
        </div>
    );
};

export default ProfileStatus;