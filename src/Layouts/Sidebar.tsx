import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";
import React from "react";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primary.sidebar.background};
  width: 280px;
  height: 100vh;
`;

const Title = styled.h2`
  padding: 20px 0px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Items = styled.ul`
  align-items: center;
`;

const Item = styled(motion.li)<{ isActive: boolean }>`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px 0px 0px 10px;
  font-weight: 600;
  font-size: 15px;
  transition: color 0.3s ease-in-out;
  color: ${(props) =>
    props.isActive
      ? props.theme.primary.sidebar.background
      : props.theme.primary.sidebar.text.normal};
  background-color: ${(props) =>
    props.isActive
      ? props.theme.primary.background
      : props.theme.primary.sidebar.background};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primary.black};
  }
  a {
    display: block;
    padding: 15px;
    width: auto;
    height: auto;
  }
`;

function Sidebar() {
  const homeMatch = useMatch("/home");
  const billingMatch = useMatch("/billing");
  const setCategory = useSetRecoilState(categoryState);
  const clickItem = (event: React.MouseEvent<HTMLLIElement>) => {
    // console.log(event.currentTarget.getAttribute("value"));
    setCategory(event.currentTarget.getAttribute("value") as any);
  };

  return (
    <>
      <Nav>
        <Title>CLOVA Dashboard</Title>
        <Items>
          <Item
            isActive={homeMatch !== null}
            value={Categories.HOME}
            onClick={clickItem}
          >
            <Link to="/home">Home</Link>
          </Item>
          <Item
            isActive={billingMatch !== null}
            value={Categories.BILLING}
            onClick={clickItem}
          >
            <Link to="/billing">Billing</Link>
          </Item>
        </Items>
      </Nav>
    </>
  );
}
export default Sidebar;
