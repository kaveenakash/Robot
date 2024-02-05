import React from 'react';
import styled from 'styled-components';

interface ActionButtonProps {
  onClick: () => void;
  direction: string;
}

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3f51b5;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #283593;
  }
`;

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, direction }) => {
  return <Button onClick={onClick}>{direction}</Button>;
};

export default ActionButton;
