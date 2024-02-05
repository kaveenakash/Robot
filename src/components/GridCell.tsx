import React from 'react';
import styled from 'styled-components';

interface GridCellProps {
  onClick: () => void;
  isRobot: boolean;
}

const Cell = styled.div<{ isRobot: boolean }>`
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.isRobot ? '#3f51b5' : 'transparent')};

  &:hover {
    background-color: ${(props) => (props.isRobot ? '#283593' : '#f0f0f0')};
  }
`;

const GridCell: React.FC<GridCellProps> = ({ onClick, isRobot }) => {
  return (
    <Cell onClick={onClick} isRobot={isRobot}>
      {isRobot ? '🤖' : ''}
    </Cell>
  );
};

export default GridCell;
