import styled from "styled-components";
import { useRecoilState } from "recoil";
import { IBillingFilter } from "../../interface";
import { serviceState } from "../../atoms";

const Select = styled.select`
  width: 250px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 12px;
  border: 2px solid ${(props) => props.theme.primary.billing.fillter.border};
  border-radius: 5px;
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; */
  cursor: pointer;
  &:hover {
  }
`;
const Option = styled.option`
  cursor: pointer;
  margin: 10px;
`;

function Selector({ item, items, onChange }: IBillingFilter) {
  return (
    <>
      <Select value={item} onInput={onChange}>
        {items?.map((value, idx) => {
          return (
            <Option key={idx} value={value}>
              {value}
            </Option>
          );
        })}
      </Select>
    </>
  );
}

export default Selector;
