import styled from "styled-components";
import { ButtonContainer } from "../common/styles";

export const OutlineButtonContainer = styled(ButtonContainer)`
  &:hover {
    background: ${(props) =>
      props.color &&
      `${props.theme.chillUI.colors[props.color] || props.color}0D`};
  }
`;
