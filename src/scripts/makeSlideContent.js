const makeSlideContent = (leftContent, leftContainer) => {

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

export default makeSlideContent;