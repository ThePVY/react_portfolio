import styled from "styled-components";

const StyledDiv = styled.div.attrs((props) => ({
  width: props.width || "100%",
  height: props.height || "100%",
  alignSelf: props.alignSelf || "center",
  margin: props.margin || "auto",
  padding: props.padding || "0px",
}))`
  box-sizing: border-box;
  width: ${({width}) => width};
  height: ${({height}) => height};
  align-self: ${({alignSelf}) => alignSelf};
  margin: ${({margin}) => margin};
  padding: ${({padding}) => padding};
`;

const Div = (props) => <StyledDiv {...props} />;

export default Div;
