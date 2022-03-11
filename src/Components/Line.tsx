import styled from "styled-components";

const Hr = styled.hr`
  width: 100%;
  border: 0px;
  height: 2px;
  background-color: ${(props) => props.theme.primary.line.color};
`;

function Line() {
  return <Hr />;
}

export default Line;
