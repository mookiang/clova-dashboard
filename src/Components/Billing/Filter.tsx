import styled from "styled-components";
import { useRecoilState } from "recoil";
import { IBillingFilter } from "../../interface";
import { serviceState, Services } from "../../atoms";
import Selector from "./Selector";

const Box = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  background-color: ${(props) =>
    props.theme.primary.billing.fillter.background};
  border: 1px solid ${(props) => props.theme.primary.billing.fillter.border};
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px
    ${(props) => props.theme.primary.billing.fillter.border};
  margin: 20px;

  p {
    font-size: 15px;
  }
`;

function Filter() {
  const [service, setService] = useRecoilState(serviceState);
  const services = [
    Services.ALL,
    Services.CHATBOT,
    Services.OCR,
    Services.AICALL,
    Services.DUBBING,
    Services.SPEECH,
    Services.AITEMS,
  ];
  const onServiceChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setService(event.currentTarget.value as any);
  };
  return (
    <>
      <Box>
        <div>
          <p>상품</p>
          <Selector item={service} items={services} setFilter={onServiceChange} />
        </div>
      </Box>
    </>
  );
}

export default Filter;
