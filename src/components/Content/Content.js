import s from './Content.module.css'
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../../redux/app-reducer'
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import Users from './Users/Users';
import LoginContainer from './Login/LoginContainer';
import Preloader from '../common/Preloader';


const Content = ({ initialized, initializeApp }) => {
    useEffect(() => {
        initializeApp()
    }, [])

    return (
        <div className={s.content}>
            {
                initialized ?
                    <>
                        <Route path='/profile/:userId?' render={() => <Profile />} />
                        <Route path='/dialogs' render={() => <Dialogs />} />
                        <Route path='/users' render={() => <Users />} />
                        <Route path='/login' render={() => <LoginContainer />} />
                    </>
                    :
                    <div className={s.preloaderContainer}>
                        <Preloader isFetching={true} />
                    </div>
                    
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(Content);

