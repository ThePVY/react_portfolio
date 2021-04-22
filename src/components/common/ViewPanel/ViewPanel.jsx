import styled, { css, keyframes } from 'styled-components'
import Div from '../Div'
import FlexContainer from '../FlexContainer'
import s from './ViewPanel.module.css'

const ShadowDiv = styled(Div)`
    ${props =>
        props.isShown &&
        css`
        background-color: rgba(0, 0, 0, 0.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    `}
`

/* 
    NullContainer нужен для того, чтобы ...FlexContainer можно было позиционировать relative
    при этом не влияя на элементы, окружающие ViewPanel
*/
const NullContainer = styled.div`
    ${props =>
        props.hide &&
        css`
        width: 0;
        height: 0;
        z-index: 10;
        margin: 0 auto;
    `}
`

const ViewArea = styled(Div)`
height: 50vh;
width: 50vw;
z-index: 10;
${props => {
    props.fixed ?
        css`
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        `
        :
        css`
        position: relative;
        left: 0;
        top: 0;
        transform: translate(-50%, 40%);
        `
}}
`
const hoistAnimation = keyframes`
0% { transform: scale3d(.5, .5, .5); }
100% { transform: scale3d(1,1,1); }
` 
const ContentArea = styled(FlexContainer)`
background-color: white;

min-height: max-content;
position: absolute;
top: 0;

animation: ${hoistAnimation} 0.5s 1;
animation-delay: .5;
`


const ViewPanel = ({ isShown, content, multiple = false, onNext, onPrev, onClose, fixed = false }) => {

    const viewPanelStyle = `${s.viewPanel} ${fixed ? s.fixed : s.relative}`

    return (
        <>
            <ShadowDiv onClick={onClose} isShown={isShown} ></ShadowDiv>
            <NullContainer hide={!fixed}>
                <ViewArea fixed={fixed} >
                    <ContentArea jstfCnt='space-between'>
                        {
                            multiple &&
                            <div className={s.leafContainer} onClick={onPrev}></div>
                        }
                        <Div>
                            {content}
                        </Div>
                        {
                            multiple &&
                            <div className={s.leafContainer} onClick={onNext}></div>
                        }
                    </ContentArea>
                </ViewArea>
            </NullContainer>
        </>
    )
}

export default ViewPanel
