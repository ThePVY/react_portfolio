import styles from "./components/Profile/ProfileInfo/ProfileInfo.module.css";


import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Users from "./components/Users/Users";

function App(props) {
    return (
        <div className="app-wrapper">
                <Header />
                <Sidebar />
                <Route path='/profile/:userId?'  render={ () => <Profile /> } />
                <Route path='/dialogs'  render={ () => <Dialogs /> } />
                <Route path='/users'    render={ () => <Users /> } />
                <Footer />
        </div>
    );
}

export default App;


window.onload = () => {
    const leftContent = document.querySelector(`.${styles.ProfileInfo} div`);
    const leftContainer = document.querySelector(`.${styles.ProfileInfo}`);
    //makeSlideContent(leftContent, leftContainer);
};
