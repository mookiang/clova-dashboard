import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { categoryState } from "../atoms";

const HO = styled.h1`
  display: flex;
  padding: 20px;
  width: 100%;
  font-weight: 600;
  font-size: 24px;
  color: ${(props) => props.theme.primary.text.title.color};
`;

function Title() {
  const category = useRecoilValue(categoryState);
  return <HO>{category}</HO>;
}

export default Title;
