import React  from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { action } from '../../redux/auth-reducer';
import { authAPI } from '../../api/auth-api';

class HeaderAPI extends React.Component {
    render = () => (
        <Header isAuthorized={this.props.isAuthorized} />
    )

    componentDidMount = () => {
        const { setAuthData } = this.props
        authAPI.getAuthData().then((data) => {
            setAuthData(data)
        })
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, action)(HeaderAPI)
