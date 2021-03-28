import { connect } from "react-redux";
import { action } from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from 'react'
import axios from "axios";
import { withRouter } from "react-router";

class ProfileInfoAPI extends React.Component {
    render = () => {
        return (
            <ProfileInfo {...this.props} />
        )
    }

    componentDidMount = () => {
        const { setUserData } = this.props
        const { userId = 2 } = this.props.match.params
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
            console.log(response.data)
            setUserData(response.data)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profile.info.data
    }
}


export default connect(mapStateToProps, action.info)(withRouter(ProfileInfoAPI));