import styled from 'styled-components';
import TrashType, {TrashTypeType} from "./trash-type/trash-type";
import {Button} from "@mui/material";
import {useEffect, useState} from "react";
import axios, {AxiosResponse} from 'axios';

/* eslint-disable-next-line */
export interface TrashStateProps {}

const Action = styled.div`
  font-size: 20px;
`;

const StyledTrashState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface Trash {
  id: TrashTypeType,
  takeOutDay: string,
  lastTakeOutDate: Date
}

export function TrashState(props: TrashStateProps) {
  const [currentTrash, setCurrentTrash] = useState<Trash>();

  useEffect(() => {
    if(currentTrash) return;
    axios.get('http://localhost:3333/api/trash').then((res:AxiosResponse<Trash>) => {
      const trashFromRes: Trash = {...res.data, lastTakeOutDate: new Date(res.data.lastTakeOutDate)}
      setCurrentTrash(trashFromRes)
    })
  })

  const handleTookOut = () => {
    if(!currentTrash) return;

    axios.post(`http://localhost:3333/api/trash/${currentTrash.id}/took-out`).then((res) => {
      setCurrentTrash({
        ...currentTrash,
        lastTakeOutDate: new Date(),
      })
    })
  }

  const trashAlreadyTookOut = () => {
    if (!currentTrash) return;
    const today = new Date();
    return currentTrash.lastTakeOutDate.setHours(0,0,0,0) === today.setHours(0,0,0,0)
  }

  return (
    <StyledTrashState>
      {currentTrash && currentTrash.id && (
        <>
          <Action>Sortir la poubelle</Action>
          <TrashType type={currentTrash.id}/>
          {!trashAlreadyTookOut() && (
              <Button variant='contained' onClick={handleTookOut}>J'ai sorti la poubelle</Button>
            )}

          {trashAlreadyTookOut() && (
            <p>La poubelle à déjà été sortie. Merci 😘</p>
          )}
        </>
      )}

      {!currentTrash || !currentTrash.id && (
        <p>
          Pas de poubelle à sortir aujourd'hui :)
        </p>
      )}
    </StyledTrashState>
  );
}

export default TrashState;
