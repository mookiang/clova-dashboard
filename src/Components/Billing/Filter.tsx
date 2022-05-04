import styled from "styled-components";
import { useRecoilState } from "recoil";
import { serviceState, Services, platformState, Platforms } from "../../atoms";
import Selector from "./Selector";
import Button from "../Button";
import React from "react";

const Box = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  background-color: ${(props) =>
    props.theme.primary.billing.fillter.background};
  border: 2px solid ${(props) => props.theme.primary.billing.fillter.border};
  border-radius: 10px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px
    ${(props) => props.theme.primary.billing.fillter.border};
  margin: 20px;
  p {
    font-size: 15px;
  }
`;

const Temp = styled.div`
  padding: 10px;
  margin-left: 20px;
  margin-right: 50px;
  align-items: center;
`;

const BoxWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-top: 20px;
  }
`;

const Label = styled.label`
  font-family: inherit;
  font-size: 16px;
  color: ${(props) => props.theme.primary.text.title.color};
  font-weight: 600;
  display: flex;
  padding: 5px;
  margin-bottom: 10px;
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

  const [platform, setPlatform] = useRecoilState(platformState);
  const platforms = [
    Platforms.PUB,
    Platforms.FIN,
    Platforms.GOV,
  ];

  const changeService = (event: React.FormEvent<HTMLSelectElement>) => {
    setService(event.currentTarget.value as any);
  };

  const changeSelector = (event: React.FormEvent<HTMLSelectElement>) => {
    setService(event.currentTarget.value as any);
  };

  const resetFilltering = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value as any);
  };

  return (
    <>
      <Box>
        <Temp>
          <Label>상품</Label>
          <Selector item={service} items={services} onChange={changeService} />
        </Temp>
        <Temp>
          <Label>플랫폼</Label>
          <Selector item={platform} items={platforms} onChange={changeSelector} />
        </Temp>
        {/* <Temp>
          <Label>리전</Label>
          <Selector item={service} items={services} onChange={changeService} />
        </Temp> */}
        {/* <Temp>
          <Label>달력</Label>
        </Temp> */}
        <BoxWrapper>
          <Button text="초기화" onClick={resetFilltering} />
        </BoxWrapper>
      </Box>
    </>
  );
}

export default Filter;
