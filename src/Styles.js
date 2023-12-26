import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 55px;
  @media only screen and (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }
`;