import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { actionCreator, thunkCreator } from '../../redux/auth-reducer';
import { compose } from 'redux';

class HeaderAPI extends React.Component {
    render = () => (
        <Header isAuthorized={this.props.isAuthorized} login={this.props.login} handleSignOut={this.props.signOut} />
    )

    componentDidMount = () => {
        this.props.getAuthData()
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized,
    login: state.auth.data.login
})

export default compose(
    connect(mapStateToProps, {...actionCreator, ...thunkCreator})
)(HeaderAPI)