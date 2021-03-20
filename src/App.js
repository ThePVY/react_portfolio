import styles from "./components/Profile/ProfileInfo/ProfileInfo.module.css";


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
                <Header />
                <Sidebar />
                <Route path='/profile' render={ () => <Profile state={ props.state } dispatch={ props.dispatch } /> } />
                <Route path='/dialogs' render={ () => <Dialogs state={ props.state } dispatch={ props.dispatch } /> } />
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
