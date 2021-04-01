import { connect } from 'react-redux'
import { Redirect } from 'react-router'


export const WithAuthRedirection = Component => {

    const mapStateToProps = (state) => ({
        isAuthorized: state.auth.isAuthorized
    })

    const withRedirect = ({isAuthorized, ...props}) => {
        return isAuthorized ? 
            <Component {...props} isAuthorized={isAuthorized} />
            :
            <Redirect to='/login' />   
    }

    return connect(mapStateToProps, {})(withRedirect)
}