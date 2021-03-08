import './styles/Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Video</a>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;