import React from 'react';
import DrawingArea from './draw';


function App() {
  const titleStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
  };

  return (
    <div className="App" style={{ position: 'relative' }}>
      <h1 style={titleStyle}>Whiteboard App</h1>
      <DrawingArea />

    </div>
  );
}

export default App;
