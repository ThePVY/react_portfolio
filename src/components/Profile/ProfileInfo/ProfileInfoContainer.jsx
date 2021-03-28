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
        const { setUserData, myId } = this.props
        const { userId = myId ? myId : 2 } = this.props.match.params
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
            setUserData(response.data)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profile.info.data,
        myId: state.auth.data.id
    }
}


export default connect(mapStateToProps, action.info)(withRouter(ProfileInfoAPI));