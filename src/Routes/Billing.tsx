import styled from "styled-components";
import Header from "../Components/Header";
import Line from "../Components/Line";
import Title from "../Components/Title";
import Filter from "../Components/Billing/Filter";
import Selector from "../Components/Billing/Selector";

const Wrapper = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 100%;
  margin: 30px 50px;
  color: ${(props) => props.theme.primary.black};
`;

const Table = styled.table`
  padding: 20px;
  margin: 20px;
`;

const THead = styled.thead``;

const TH = styled.th`
  border-collapse: collapse;
  border: 1px solid black;
`;
const TBody = styled.tbody``;

const TR = styled.tr``;

const TD = styled.td`
  border-collapse: collapse;
  border: 1px solid black;
`;

function Billing() {
  return (
    <Wrapper>
      <Header />
      <Line />
      <Contents>
        <Title />
        <Filter />
        <Table>
          <THead>
            <TR>
              <TH>상품명</TH>
              <TH>플랫폼</TH>
              <TH>리전</TH>
              <TH>마이 페이지</TH>
              <TH>빌링 API</TH>
              <TH>사용량 계산</TH>
            </TR>
          </THead>
          {/* <TBody>
            <TRow>
              <TD>Hello</TD>
              <TD>Bonjur</TD>
              <TD>Nihao</TD>
              <TD>안녕</TD>
            </TRow>
          </TBody> */}
        </Table>
      </Contents>
    </Wrapper>
  );
}

export default Billing;
