import logo from './logo.svg';
import styles from "./components/Profile/ProfileInfo/ProfileInfo.module.css";
import makeSlideContent from './scripts/makeSlideContent';


import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Route path='/profile' render={ () => <Profile data={ props.store.getState().profile } /> } />
                <Route path='/dialogs' render={ () => <Dialogs data={ props.store.getState().dialogs }  /> } />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;


window.onload = () => {
    const leftContent = document.querySelector(`.${styles.ProfileInfo} div`);
    const leftContainer = document.querySelector(`.${styles.ProfileInfo}`);
    //makeSlideContent(leftContent, leftContainer);
};
