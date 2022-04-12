import styled from "styled-components";

import bg from "../assets/bg.jpeg";
import { colors } from "./Tokens";

export const Wrapper = styled.div`
  background-color: ${({ color }) => colors[color]};
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  top: inherit;
  justify-content: center;
  align-items: center;
  color: ${colors.purple};
  padding:50.2rem;
`;
//padding: 3.2