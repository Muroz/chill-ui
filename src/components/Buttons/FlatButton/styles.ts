import styled from "styled-components";
import { ButtonContainer } from "../common/styles";

export const FlatButtonContainer = styled(ButtonContainer)`
  border: none;

  &:hover {
    background: ${props => `${props.bg}CC`};
  }
`;
