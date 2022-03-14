import styled from "styled-components";
import { motion } from "framer-motion";

export const T = styled.table`
  width: 80%;
  /* border-collapse: collapse; */
  border: 2px solid ${(props) => props.theme.primary.gray};
  padding: 10px;
  margin-top: 50px;
  margin-left: 20px;
`;
export const THead = styled.thead``;
export const THR = styled.tr`
`;
export const TH = styled.th`
  width: 200px;
  padding: 15px 10px;
  color: ${(props) => props.theme.primary.table.th.color};
  font-weight: 550;
  font-size: 18px;
`;
export const TBody = styled.tbody`
`;
export const TR = styled.tr`
  &:nth-child(odd) {
    background-color: #dddddd;
  }
  &:nth-child(even) {
    background-color: #e9e9e9;
  }
`;
export const TD = styled.td`
  width: 200px;
  padding: 15px 10px;
  text-align: center;
  color: ${(props) => props.theme.primary.text.title.color};
  font-size: 16px;
  font-weight: 550;
`;

function Table() {
  return (
    <T>
      <THead>
        <THR>
          <TH>상품명</TH>
          <TH>플랫폼</TH>
          <TH>리전</TH>
          <TH>마이 페이지</TH>
          <TH>빌링 API</TH>
          <TH>사용량 계산</TH>
        </THR>
      </THead>
      <TBody>
        <TR>
          <TD>하나</TD>
          <TD>둘</TD>
          <TD>셋</TD>
          <TD>넷</TD>
          <TD>다섯</TD>
          <TD>여섯</TD>
        </TR>
        <TR>
          <TD>하나</TD>
          <TD>둘</TD>
          <TD>셋</TD>
          <TD>넷</TD>
          <TD>다섯</TD>
          <TD>여섯</TD>
        </TR>
        <TR>
          <TD>하나</TD>
          <TD>둘</TD>
          <TD>셋</TD>
          <TD>넷</TD>
          <TD>다섯</TD>
          <TD>여섯</TD>
        </TR>
        <TR>
          <TD>하나</TD>
          <TD>둘</TD>
          <TD>셋</TD>
          <TD>넷</TD>
          <TD>다섯</TD>
          <TD>여섯</TD>
        </TR>
      </TBody>
    </T>
  );
}

export default Table;
