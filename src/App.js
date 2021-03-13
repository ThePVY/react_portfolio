import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';

import LC from "./components/Profile/Left-Content/Left-Content.module.css";
import makeSlideContent from './scripts/makeSlideContent';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;


window.onload = () => {
    const leftContent = document.querySelector(`.${LC.leftContent} div`);
    const leftContainer = document.querySelector(`.${LC.leftContent}`);
    makeSlideContent(leftContent, leftContainer);
};
