import styled from 'styled-components';
import {Color} from "../../constants/Colors";

export const TaskItem = styled.li`
  width: 550px;
  height: 40px;
  border: 1px solid ${Color.smokyWhite};
  border-radius: 10px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Color.nightBlue};
`;
export const TaskText = styled.span`
  padding-left: 10px;
  color: ${Color.smokyWhite};
  font-weight: 400;
`;

export const TaskButtons = styled.div`
  display: flex;
`;

export const TaskButton = styled.button`
  border: none;
  background: none;
  display: flex;
`;

export const DeleteIcon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const EditIcon = styled.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`;
