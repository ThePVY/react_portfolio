import { connect } from "react-redux"
import { compose } from "redux"
import { thunkCreator } from "../../../redux/auth-reducer"
import Login from "./Login"


const LoginContainer = props => {
    return (
        <>
            <Login signIn={props.signIn}/>
        </>
    )
}


export default compose(
    connect(() => ({}),{...thunkCreator})
)(LoginContainer)