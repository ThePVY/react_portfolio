const makeSlideContent = (content, container) => {

    let isStick = false;
    let inRange = false;
    let [prevOffset, currOffset] = ['',''];
    let [prevScroll, currScroll] = ['',''];

    let top2container = container.getBoundingClientRect().top; //Frop page top to top of the sticky container
    let topBoundary = top2container;
    let bottomBoundary = topBoundary + container.offsetHeight;
    window.addEventListener('scroll', () => {
        inRange = checkRange(topBoundary, bottomBoundary);
        if(inRange && content.offsetHeight > window.innerHeight) {
            currOffset = window.pageYOffset;
            if(currOffset > prevOffset) {
                //scrolling down
                currScroll = 'down';
                if(!isStick && currOffset + window.innerHeight >= content.offsetTop + content.offsetHeight) {
                    content.style.position = 'sticky';
                    content.style.top = `-${content.offsetHeight - window.innerHeight}px`;
                    isStick = true;
                }
                else if(!isStick && currScroll !== prevScroll) {
                    content.style.position = 'relative';
                    content.style.top = `${content.offsetTop - top2container}px`;
                }
                else if(isStick && currScroll !== prevScroll) {
                    content.style.position = 'relative';
                    content.style.top = `${currOffset  - top2container}px`;
                    isStick = false;
                }
                prevScroll = 'down';
            }
            else {
                //scrolling up
                currScroll = 'up';
                if(!isStick && currOffset <= content.offsetTop) {
                    content.style.position = 'sticky';
                    content.style.top = `0px`;
                    isStick = true;
                }
                else if(!isStick && currScroll !== prevScroll) {
                    content.style.position = 'relative';
                    content.style.top = `${content.offsetTop - top2container}px`;
                }
                else if(isStick && currScroll !== prevScroll) {
                    content.style.position = 'relative';
                    content.style.top = `${currOffset - content.offsetHeight + window.innerHeight  - top2container}px`;
                    isStick = false;
                }
                prevScroll = 'up';
            }
            prevOffset = window.pageYOffset;
        }
        else if(content.offsetHeight < window.innerHeight) {
            content.style.position = 'sticky';
            content.style.top = '0px';
        }
    });

    const checkRange = (topBoundary, botBoundary) => {
        let inRange = ( botBoundary > window.pageYOffset + window.innerHeight && topBoundary < window.pageYOffset)? true : false;
        return inRange;
    };
};

export default makeSlideContent;