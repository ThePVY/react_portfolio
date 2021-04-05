import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { actionCreator, thunkCreator } from '../../redux/auth-reducer';
import { compose } from 'redux';
import selecror from '../../redux/selectors';

const HeaderContainer = (props) => (
    <Header isAuthorized={props.isAuthorized} login={props.login} handleSignOut={props.signOut} />
)

const mapStateToProps = state => ({
    isAuthorized: selecror.auth.getIsAuthorized(state),
    login: selecror.auth.getLogin(state)
})

export default compose(
    connect(mapStateToProps, {...actionCreator, ...thunkCreator})
)(HeaderContainer)