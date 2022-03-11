import styled from "styled-components";

import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  display: flex;
`;

const Nav = styled.nav``;

const Content = styled.div``;

function Container(children: any) {
  return;
  <Wrapper>
    <Nav>
      <Sidebar />
    </Nav>
    <Content>{children}</Content>
  </Wrapper>;
}

export default Container;
