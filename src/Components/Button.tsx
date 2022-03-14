import styled from "styled-components";
import { motion } from "framer-motion";
import { IButton } from "../interface";

const BUTTON = styled(motion.button)`
  padding: 5px 15px;
  width: 130px;
  height: 40px;
  font-family: inherit;
  font-size: 15px;
  align-items: center;
  background-color: ${(props) => props.theme.primary.button.background};
  color: ${(props) => props.theme.primary.button.color};
  /* border: 2px solid ${(props) => props.theme.primary.button.border}; */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  transition: background 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.primary.button.hover.background};
    color: ${(props) => props.theme.primary.button.hover.color};
  }
`;

function Button({ text, onClick }: IButton) {
  return (
    <>
      <BUTTON value={text} onClick={onClick}>
        {text}
      </BUTTON>
    </>
  );
}

export default Button;
