import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { actionCreator, thunkCreator } from '../../redux/auth-reducer';

class HeaderAPI extends React.Component {
    render = () => (
        <Header isAuthorized={this.props.isAuthorized} />
    )

    componentDidMount = () => {
        this.props.getAuthData()
    }
}

const mapStateToProps = state => ({
    isAuthorized: state.auth.isAuthorized
})

export default connect(mapStateToProps, {...actionCreator, ...thunkCreator})(HeaderAPI)
