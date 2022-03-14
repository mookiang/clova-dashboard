import styled from "styled-components";
import Header from "../Components/Header";
import Line from "../Components/Line";
import Title from "../Components/Title";
import Filter from "../Components/Billing/Filter";
import Table from "../Components/Billing/Table";

const Wrapper = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 100%;
  margin: 30px 50px;
  color: ${(props) => props.theme.primary.black};
`;

function Billing() {
  return (
    <Wrapper>
      <Header />
      <Line />
      <Contents>
        <Title />
        <Filter />
        <Table />
      </Contents>
    </Wrapper>
  );
}

export default Billing;
