import styled from "styled-components";
import { ButtonContainer } from "../common/styles";

export const TextButtonContainer = styled(ButtonContainer)`
  border: none;

  &:hover {
    background: ${(props) =>
      props.color &&
      `${props.theme.chillUI.colors[props.color] || props.color}0D`};
  }
`;
