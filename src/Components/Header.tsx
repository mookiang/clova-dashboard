import styled from "styled-components";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { categoryState } from "../atoms";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { toUpperCaseFirstLetter } from "../Common/common";

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
  const [category, setCategory] = useRecoilState(categoryState);
  let { pathname } = useLocation();
  useEffect(() => {
    setCategory(toUpperCaseFirstLetter(pathname.substring(1)) as any);
  }, []);
  return (
    <HT>
      CLOVA Dashboard {">"} {category}
    </HT>
  );
}

export default Header;
