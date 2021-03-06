import logo from './logo.svg';
import './App.css';
import logoBird from "./images/logo.png";

let leftContentHeight = null;

window.onload = () => {
    const leftContent = document.querySelector('.left-content div');
    const leftContainer = document.querySelector('.left-content');
    const addLeftImageButton = document.getElementById('add-to-left-content');
    const rightContent = document.querySelector('.right-content');
    const addRightImageButton = document.getElementById('add-to-right-content');


    addLeftImageButton.addEventListener('click', () => {
        const image = document.createElement('img');
        image.setAttribute('src', `
            https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg`
        );
        image.setAttribute('alt', 'alt');
        leftContent.insertBefore(image, addLeftImageButton);
    });

    addRightImageButton.addEventListener('click', () => {
        const image = document.createElement('img');
        image.setAttribute('src', `
            https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg`
        );
        image.setAttribute('alt', 'alt');
        rightContent.insertBefore(image, addRightImageButton.parentNode);
    });

    let isStick = false;
    let inRange = false;
    let [prevOffset, currOffset] = ['',''];
    let [prevScroll, currScroll] = ['',''];
    const top2container = 76; //Frop page top to top of the sticky container
    const topBoundary = 76;
    const bottomBoundary = topBoundary + leftContainer.offsetHeight;
    window.addEventListener('scroll', () => {
        inRange = checkRange(topBoundary, bottomBoundary);
        if(inRange && leftContent.offsetHeight > window.innerHeight) {
            currOffset = window.pageYOffset;
            if(currOffset > prevOffset) {
                //scrolling down
                currScroll = 'down';
                if(!isStick && currOffset + window.innerHeight >= leftContent.offsetTop + leftContent.offsetHeight) {
                    leftContent.style.position = 'sticky';
                    leftContent.style.top = `-${leftContent.offsetHeight - window.innerHeight}px`;
                    isStick = true;
                }
                else if(!isStick && currScroll !== prevScroll) {
                    leftContent.style.position = 'relative';
                    leftContent.style.top = `${leftContent.offsetTop - top2container}px`;
                }
                else if(isStick && currScroll !== prevScroll) {
                    leftContent.style.position = 'relative';
                    leftContent.style.top = `${currOffset  - top2container}px`;
                    isStick = false;
                }
                prevScroll = 'down';
            }
            else {
                //scrolling up
                currScroll = 'up';
                if(!isStick && currOffset <= leftContent.offsetTop) {
                    leftContent.style.position = 'sticky';
                    leftContent.style.top = `0px`;
                    isStick = true;
                }
                else if(!isStick && currScroll !== prevScroll) {
                    leftContent.style.position = 'relative';
                    leftContent.style.top = `${leftContent.offsetTop - top2container}px`;
                }
                else if(isStick && currScroll !== prevScroll) {
                    leftContent.style.position = 'relative';
                    leftContent.style.top = `${currOffset - leftContent.offsetHeight + window.innerHeight  - top2container}px`;
                    isStick = false;
                }
                prevScroll = 'up';
            }
            prevOffset = window.pageYOffset;
        }
        else if(leftContent.offsetHeight < window.innerHeight) {
            leftContent.style.position = 'sticky';
            leftContent.style.top = '0px';
        }
    });

    const checkRange = (topBoundary, botBoundary) => {
        let inRange = ( botBoundary > window.pageYOffset + window.innerHeight && topBoundary < window.pageYOffset)? true : false;
        return inRange;
    };
};


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://images.vexels.com/media/users/3/127637/isolated/preview/0237c45fb5571dfb63b75d1103ed745d-fire-icon-svg-by-vexels.png" alt="Logo" />
            </header>
            <aside className="sidebar">
                <nav>
                    <div>Profile</div>
                    <div>Messages</div>
                    <div>News</div>
                    <div>Music</div>
                    <div>Video</div>
                </nav>
            </aside>
            <div className="content">
                <div className="left-content">
                    <div>
                        <button id="add-to-left-content">Add Image</button>
                    </div>
                </div>
                <div className="right-content">
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <img src="https://img4.goodfon.ru/wallpaper/nbig/1/17/art-devushka-vzgliad-rassvet-nebo-gorod-krasivo.jpg" alt="alt" />
                    <div>
                        <button id="add-to-right-content">Add Image</button>
                    </div>
                </div>
            </div>
            <footer className="footer">
                FOR PORTFOLIO
       </footer>
        </div>
    );
}

export default App;
