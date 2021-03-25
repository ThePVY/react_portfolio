import User from './User/User'
import styles from './UsersList.module.css'
import * as axios from 'axios'
import React from 'react';

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
            this.props.setUsers(response.data.items)
        })
    }   

    render() {
        return (
            <div className={styles.usersList}>
                {
                    this.props.usersList.map((user) => <User key={user.id} user={user} onClick={this.props.onClick} />)
                }
            </div>
        )
    }
}


export default UsersList