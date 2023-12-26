import styled from 'styled-components';
import {Color} from "../../constants/Colors";

export const Backdrop = styled.div`
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

export const ModalWrapper = styled.div`
  width: 500px;
  height: 450px;
  background: ${Color.darkBlue};
  border: 1px solid ${Color.white};
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${Color.smokyWhite};

  text-align: center;
  font-size: 20px;
  font-weight: 400;
`;

export const ModalButton = styled.button`
  background-color: ${Color.blue};
  width: 168px;
  height: 31px;
  padding: 6px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 140px;

  color: ${Color.smokyWhite};
  font-weight: 800;
  line-height: 90%;
`;