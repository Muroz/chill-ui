import styled from "styled-components";
import { ButtonContainer } from "../common/styles";

export const IconButtonContainer = styled(ButtonContainer)`
  border: none;
  border-radius: 50%;

  & > svg {
    display: inline-block;
    fill: ${(props) => props.color && props.theme.chillUI.colors[props.color]};
    vertical-align: middle;
  }
`;
