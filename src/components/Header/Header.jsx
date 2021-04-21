import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "../common/Button";
import styled, { css, keyframes } from "styled-components";
import Div from "../common/Div";

const spinAnimation = keyframes`
  0% {
    transform: scale(1, 1) rotate(0deg);
  }
  50% {
    transform: scale(-1, 1) rotate(180deg);
  }
  100% {
    transform: scale(1, 1) rotate(360deg);
  }
`;

const Wrapper = styled.div`
  background-color: rgb(245, 245, 245);
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr minmax(150px, 1fr) minmax(800px, 7fr) 1fr;
  height: 6vh;
  transition: all 0.4s ease 0s;
  img {
    height: 5vh;
    grid-column: 2 / 3;
    align-self: center;
  }
`;
const AuthBlock = styled.div`
  width: 170px;
  display: flex;
  justify-self: flex-end;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  ${(props) =>
    props.spin &&
    css`
      display: inline-block;
      position: relative;
      animation-name: ${spinAnimation};
      animation-duration: 1500ms;
      animation-iteration-count: 1;
      animation-direction: normal;
    `}
`;

const Header = (props) => {
  const { isAuthorized = false } = props;
  return (
    <Wrapper>
      <StyledLogo src={logo} alt="Logo" className="spinning-logo" spin={props.spin} />
      <AuthBlock>
        {isAuthorized ? (
          <>
            <Div margin="0 1em 0 0">
              <span>{props.login}</span>
            </Div>

            <Div width="100px" alignSelf="center">
              <Button onClick={props.handleSignOut}>Sign Out</Button>
            </Div>
          </>
        ) : (
          <Div>
            <Button>
              <NavLink to="/login">Sign in</NavLink>
            </Button>
          </Div>
        )}
      </AuthBlock>
    </Wrapper>
  );
};

export default Header;

/* export const spinLogo = () => {
  const logo = document.querySelector(`.spinning-logo`);
  logo.classList.add('spin');
  setTimeout(() => {
      logo.classList.remove('spin');
  }, 1500);
}; */
