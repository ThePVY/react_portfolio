import s from './Content.module.css'
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../../redux/app-reducer'
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import Users from './Users/Users';
import Login from './Login/Login';
import Preloader from '../common/Preloader';
import selecror from '../../redux/selectors';
import News from './News/News';


const Content = ({ initialized, initializeApp }) => {
    useEffect(() => {
        initializeApp()
    }, [initializeApp])

    return (
        <div className={s.content}>
            {
                initialized ?
                    <>
                        <Route path='/profile/:userId?' render={() => <Profile />} />
                        <Route path='/dialogs' render={() => <Dialogs />} />
                        <Route path='/users' render={() => <Users />} />
                        <Route path='/login' render={() => <Login />} />
                        <Route path='/news' render={() => <News />} />
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
    initialized: selecror.app.getInitialized(state)
})

export default connect(mapStateToProps, { initializeApp })(Content);

