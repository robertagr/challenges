import styled, { css } from "styled-components";

// export default function BoxWithStyledComponents({ isBlack }) {
//   return <StyleBox isBlack={isBlack}></StyleBox>;
// }

export default styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  background-color: ${(props) => (props.isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;
