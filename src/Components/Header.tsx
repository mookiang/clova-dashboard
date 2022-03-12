import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { categoryState } from "../atoms";

const HT = styled.h2`
  padding: 20px 30px;
  display: flex;
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  background-color: ${(props) => props.theme.primary.header.background};
  color: ${(props) => props.theme.primary.text.title.color};
`;

function Header() {
  const category = useRecoilValue(categoryState);
  return <HT>CLOVA Dashboard {">"} {category}</HT>;
}

export default Header;
