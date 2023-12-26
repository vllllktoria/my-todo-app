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

  @media only screen and (max-width: 990px) {
    width: 90%;
    padding: 20px;
    height: 70%;
    display: flex;
  }
`;

export const Title = styled.h1`
  color: ${Color.lightYellow};
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  line-height: 90%;

  @media only screen and (max-width: 990px) {
    font-size: 24px;
  }
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

export const DeleteConfirm = styled.div`
  height: 30%;
  width: 30%;
  background-color: ${Color.nightBlue};
  border: 1px solid white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ConfirmText = styled.span`
  padding-left: 10px;
  color: ${Color.smokyWhite};
  font-weight: 400;
  font-size: 20px;
`;

export const ConfirmButton = styled.button`
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

export const DeleteConfirmBack = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
