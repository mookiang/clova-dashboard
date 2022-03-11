import styled from "styled-components";
import Title from "../Components/Title";
import Line from "../Components/Line";

const Wrapper = styled.div`
  width: 100%;
`;

const Contents = styled.div`
  width: 100%;
  margin: 50px;
  color: ${(props) => props.theme.primary.black};
`

function Home() {
  return (
    <Wrapper>
      <Title />
      <Line />
      <Contents>안녕하세요</Contents>
    </Wrapper>
  );
}

export default Home;
