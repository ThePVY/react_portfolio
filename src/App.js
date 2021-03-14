import logo from './logo.svg';
import LC from "./components/Profile/Left-Content/Left-Content.module.css";
import makeSlideContent from './scripts/makeSlideContent';


import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Route path='/profile' component={Profile} />
                <Route path='/dialogs' component={Dialogs} />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;


window.onload = () => {
    const leftContent = document.querySelector(`.${LC.leftContent} div`);
    const leftContainer = document.querySelector(`.${LC.leftContent}`);
    //makeSlideContent(leftContent, leftContainer);
};
