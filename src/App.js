import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import Users from "./components/Users/Users";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from './components/Login/Login';

function App() {
    return (
        <div className="app-wrapper">
                <HeaderContainer />
                <Sidebar />
                <Route path='/profile/:userId?'  render={ () => <Profile /> } />
                <Route path='/dialogs'  render={ () => <Dialogs /> } />
                <Route path='/users'    render={ () => <Users /> } />
                <Route path='/login'    render={ () => <Login /> } />
                <Footer />
        </div>
    );
}

export default App;

 window.onload = () => {
    
}; 
