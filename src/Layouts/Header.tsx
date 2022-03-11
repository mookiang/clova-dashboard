import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.primary.blue};
  font-size: 15px;
  padding: 15px 20px;
  color: ${(props) => props.theme.primary.white};
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-weight: bold;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Items>
          <Item>CLOVA Dashboard</Item>
        </Items>
      </Col>
    </Nav>
  );
}

export default Header;
