import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <aside className={classes.sidebar}>
            <nav>
                <div className={classes.item}>
                    <a href="">Profile</a>
                </div>
                <div className={classes.item}>
                    <a href="">Messages</a>
                </div>
                <div className={classes.item}>
                    <a href="">News</a>
                </div>
                <div className={classes.item}>
                    <a href="">Music</a>
                </div>
                <div className={classes.item}>
                    <a href="">Video</a>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;