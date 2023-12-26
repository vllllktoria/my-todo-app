import styled from "styled-components";
import {Color} from "../../constants/Colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 650px;
  border-radius: 10px;
  border: 1px solid white;
  gap: 30px;
  min-height: 518px;
  background: ${Color.darkBlue};
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  color: ${Color.lightYellow};
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  line-height: 90%;
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${Color.blue};
  width: 168px;
  height: 31px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${Color.smokyWhite};
  font-weight: 800;
  line-height: 90%;
`;
