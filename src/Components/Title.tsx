import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { categoryState } from "../atoms";

const Header = styled.h2`
  margin: 20px 30px;
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => props.theme.primary.text.title.color};
`;

function Title() {
  const category = useRecoilValue(categoryState);
  return <Header>CLOVA Dashboard {">"} {category}</Header>;
}

export default Title;
