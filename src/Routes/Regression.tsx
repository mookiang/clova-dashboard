import styled from "styled-components";
import Header from "../Layouts/Header";
import Line from "../Components/Line";

const Wrapper = styled.div`
  width: 100%;
`

const Contents = styled.div`
  width: 100%;
  margin: 30px 50px;
  color: ${(props) => props.theme.primary.black};
`

function Regression() {
  return(
    <Wrapper>
      <Header />
      <Line />
    </Wrapper>
  );
}

export default Regression;