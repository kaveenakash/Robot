// App.tsx
import React from 'react';
import Header from './components/Header'; // Import the Header component
import RobotTable from './components/RobotTable';
import Controls from './components/Controls';
import TeleportInfo from './components/TeleportInfo';
import { useRobotMovement } from './hooks/useRobotMovement';
import './styles.css';

const App: React.FC = () => {
  const [robotPosition, setRobotPosition] = React.useState({ x: 0, y: 4 });
  const [teleportDelay, setTeleportDelay] = React.useState(0);

  const { handleMove } = useRobotMovement({
    robotPosition,
    setRobotPosition,
    setTeleportDelay,
  });

  return (
    <div className="app">
      <Header />
      <RobotTable
        robotPosition={robotPosition}
        setRobotPosition={setRobotPosition}
        setTeleportDelay={setTeleportDelay}
      />
      <Controls handleMove={handleMove} />
      <TeleportInfo teleportDelay={teleportDelay} />
    </div>
  );
};

export default App;
