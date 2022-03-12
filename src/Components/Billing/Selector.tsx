import styled from "styled-components";
import { useRecoilState } from "recoil";
import { IBillingFilter } from "../../interface";
import { serviceState } from "../../atoms";

const Select = styled.select`
  padding: 5px;
  cursor: pointer;
  &:hover {
  }
`;
const Option = styled.option`
  cursor: pointer;
  margin: 10px;
`;

function Selector({ item, items, setFilter }: IBillingFilter) {
  const onChange = () => {
    console.log("CHANGED");
  };
  const arr = ["안녕하세요", "반갑습니다", "감사해요"];

  return (
    <>
      <Select value={item} onInput={setFilter}>
        {items?.map((value, idx) => {
          return <Option key={idx} value={value}>
            {value}
          </Option>;
        })}
      </Select>
    </>
  );
}

export default Selector;
