import styled from 'styled-components';
import {Paper} from "@mui/material";

export enum TrashTypeType {
  Yellow = 'YELLOW',
  Green = 'GREEN',
  Blue = 'BLUE',
  Brown = 'BROWN',
}

const colorByType = {
  [TrashTypeType.Yellow]: '#fbd037',
  [TrashTypeType.Green]: '#306b1e',
  [TrashTypeType.Blue]: '#016aaf',
  [TrashTypeType.Brown]: '#842f00',
}

export interface TrashTypeProps {
  type: TrashTypeType
}

const StyledTrashType = styled(Paper)<{type: TrashTypeType}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  ${({type}) => `background-color: ${colorByType[type]};`}
  margin: 40px 0;

  & > span {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: bold;
    color: rgba(0, 0, 0, .2);
  }
`;

export function TrashType({type}: TrashTypeProps) {
  return (
    <StyledTrashType type={type} elevation={3}>
      <span>{type}</span>
    </StyledTrashType>
  );
}

export default TrashType;
