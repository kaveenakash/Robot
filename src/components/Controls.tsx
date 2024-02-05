import React from 'react';
import ActionButton from './ActionButton';
import styled from 'styled-components';
import { Direction } from '../constants/constants'; 

interface ControlsProps {
  handleMove: (direction: Direction) => void;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Controls: React.FC<ControlsProps> = ({ handleMove }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowUp':
        handleMove(Direction.NORTH);
        break;
      case 'ArrowRight':
        handleMove(Direction.EAST);
        break;
      case 'ArrowDown':
        handleMove(Direction.SOUTH);
        break;
      case 'ArrowLeft':
        handleMove(Direction.WEST);
        break;
      default:
        break;
    }
  };

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} className='controls'>
      <ButtonContainer>
        <ActionButton onClick={() => handleMove(Direction.NORTH)} direction="⬆️" />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton onClick={() => handleMove(Direction.WEST)} direction="⬅️" />
        <ActionButton onClick={() => handleMove(Direction.SOUTH)} direction="⬇️" />
        <ActionButton onClick={() => handleMove(Direction.EAST)} direction="➡️" />
      </ButtonContainer>
    </div>
  );
};

export default Controls;
