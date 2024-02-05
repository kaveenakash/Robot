import React from 'react';
import styled from 'styled-components';

interface TeleportInfoProps {
  teleportDelay: number;
}

const InfoContainer = styled.div`
  margin-top: 20px;
`;

const TeleportInfo: React.FC<TeleportInfoProps> = ({ teleportDelay }) => {
  return (
    <InfoContainer>
      {teleportDelay > 0 && <p>Teleporting in {teleportDelay} units...</p>}
    </InfoContainer>
  );
};

export default TeleportInfo;
