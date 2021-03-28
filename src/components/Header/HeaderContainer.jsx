import React  from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { action } from '../../redux/auth-reducer';
import axios from 'axios';

class HeaderAPI extends React.Component {
    render = () => (
        <Header isAuthorized={this.props.isAuthorized} />
    )

    componentDidMount = () => {
        const { setAuthData } = this.props
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
        .then((response) => {
            setAuthData(response.data)
        })
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, action)(HeaderAPI)
