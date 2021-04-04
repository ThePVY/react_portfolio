import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import HeaderContainer from "./components/Header/HeaderContainer";
import Content from './components/Content/Content';

function App() {
    return (
        <div className="app-wrapper">
                <HeaderContainer />
                <Sidebar />
                <Content />
                <Footer />
        </div>
    );
}

export default App;

