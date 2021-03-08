import logo from './logo.svg';
import './App.css';
import logoBird from "./images/logo.png";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';
import onloadListener from './scripts/WindowOnload';

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </div>
    );
}

export default App;


window.onload = onloadListener;
