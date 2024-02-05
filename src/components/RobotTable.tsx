import React from 'react';
import GridCell from './GridCell';

interface RobotTableProps {
  robotPosition: { x: number; y: number };
  setRobotPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setTeleportDelay: React.Dispatch<React.SetStateAction<number>>;
}

const ROWS = 5;
const COLS = 5;

const RobotTable: React.FC<RobotTableProps> = ({ robotPosition, setRobotPosition, setTeleportDelay }) => {
    const handleTeleport = (x: number, y: number) => {
      setRobotPosition({ x, y });
      setTeleportDelay(Math.abs(x - 0) + Math.abs(y - 4)); 
    };
  
    return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: '5px' }}>
        {[...Array(ROWS)].map((_, rowIndex) => (
          [...Array(COLS)].map((_, colIndex) => (
            <GridCell
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleTeleport(colIndex, rowIndex)}
              isRobot={robotPosition.x === colIndex && robotPosition.y === rowIndex}
            />
          ))
        ))}
      </div>
    );
  };

export default RobotTable;
