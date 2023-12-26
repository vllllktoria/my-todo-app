import styled from "styled-components";
import {Color} from "../../constants/Colors";

export const TasksListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  @media only screen and (max-width: 990px){
    padding: 10px;
  }
`;

export const TasksPanelWrapper = styled.div`
  @media only screen and (max-width: 990px){
    width: 100%;
  }
`;

export const Search = styled.input`
  width: 550px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${Color.smokyWhite};

  text-align: center;
  font-size: 20px;
  font-weight: 400;
  @media only screen and (max-width: 990px){
    width: 100%;
  }
`;

export const TasksWrapperText = styled.span`
  font-size: 24px;
  color: ${Color.smokyWhite};
  font-weight: 400;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media only screen and (max-width: 990px){
    font-size: 20px;
  }
`;