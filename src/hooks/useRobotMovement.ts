// useRobotMovement.ts
import { useState } from 'react';
import { Direction } from '../constants/constants';

interface UseRobotMovementProps {
  robotPosition: { x: number; y: number };
  setRobotPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setTeleportDelay: React.Dispatch<React.SetStateAction<number>>;
}

export const useRobotMovement = ({ robotPosition, setRobotPosition, setTeleportDelay }: UseRobotMovementProps) => {
  const handleMove = (direction: string) => {
    const newPosition = { ...robotPosition };

    switch (direction) {
      case Direction.NORTH:
        if (newPosition.y > 0) newPosition.y--;
        break;
      case Direction.EAST:
        if (newPosition.x < 4) newPosition.x++;
        break;
      case Direction.SOUTH:
        if (newPosition.y < 4) newPosition.y++;
        break;
      case Direction.WEST:
        if (newPosition.x > 0) newPosition.x--;
        break;
      default:
        break;
    }

    setRobotPosition(newPosition);

    const distance = Math.abs(newPosition.x - robotPosition.x) + Math.abs(newPosition.y - robotPosition.y);
    setTeleportDelay(distance);
  };

  return { handleMove };
};
