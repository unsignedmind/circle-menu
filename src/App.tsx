import React, { useEffect, useState } from 'react';
import './App.scss';
import Quarter, { QuarterPosition } from './components/Quarter';

function App() {
  const [rotationDegree, setRotationDegree] = useState(45);

  const rotationStyle = {
    transform: `rotate(${rotationDegree}deg) scale(20)`,
  }
  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      setRotationDegree(rotationDegree + 90);
    } else if (event.deltaY > 0) {
      setRotationDegree(rotationDegree - 90);
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener('wheel', handleWheel);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [rotationDegree]);

  return (
    <>
      <div className="circle" style={rotationStyle}>
        <Quarter color={'red'} position={QuarterPosition.PosOne}/>
        <Quarter color={'blue'} position={QuarterPosition.PosTwo}/>
        <Quarter color={'yellow'} position={QuarterPosition.PosThree}/>
        <Quarter color={'green'} position={QuarterPosition.PosFour}/>
      </div>

    </>
  );
}

export default App;
