import React from 'react';
import './App.css';
import Globe from 'react-globe.gl';
import Cities from './cities';

function App() {
  
  console.log(Cities.length)

  return (
    <Globe
      globeImageUrl="background.jpg"
      pointsData={Cities}
      pointColor="color"
      pointLabel={(point: any) => `${point.name} (${point.temp_rounded})`}
    />
  );
}

export default App;
