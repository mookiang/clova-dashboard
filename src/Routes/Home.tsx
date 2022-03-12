import styled from "styled-components";
import Header from "../Components/Header";
import Line from "../Components/Line";
import Title from "../Components/Title";

const Wrapper = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 100%;
  margin: 30px 50px;
  color: ${(props) => props.theme.primary.black};
`;

function Home() {
  return (
    <Wrapper>
      <Header />
      <Line />
      <Contents>
        <Title />
      </Contents>
    </Wrapper>
  );
}

export default Home;
