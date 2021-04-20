import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
import { Button } from '../common/Buttons';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: rgb(245, 245, 245);
    grid-area       : header;
    display         : grid;
    grid-template-columns: 1fr minmax(150px, 1fr) minmax(800px, 7fr) 1fr;
    height: 6vh;
    transition: all 0.4s ease 0s;
    img {
        height: 5vh;
        grid-column: 2 / 3;
        align-self : center;
    }
`
const AuthBlock = styled.div`
    width: 170px;
    display: flex;
    justify-self: flex-end;
    justify-content: space-between;
`

const LoginContainer = styled.div`
    align-self: center;
    margin-right: 10px;
`

const ButtonContainer = styled.div`
    width: 100px;
    align-self: center;
`

const Header = props => {
    const { isAuthorized = false } = props
    return (
        <Wrapper>
            <img src={logo} alt="Logo" className='spinning-logo' />
            <AuthBlock>
                {
                    isAuthorized ?
                        <>
                            <LoginContainer>
                                <span>{props.login}</span>
                            </LoginContainer>

                            <ButtonContainer>
                                <Button onClick={props.handleSignOut}>Sign Out</Button>
                            </ButtonContainer>
                        </>
                        :
                        <ButtonContainer>
                            <Button><NavLink to='/login'>Sign in</NavLink></Button>
                        </ButtonContainer>
                }
            </AuthBlock>
        </Wrapper>
    );
};

export default Header;