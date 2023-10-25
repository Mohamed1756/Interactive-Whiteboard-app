import React from 'react';

function Sidebar({ onDraw, onErase, onClear }) {
  return (
    <div className="sidebar">
      <h2>Tools</h2>
      <button onClick={onDraw}>Draw</button>
      <button onClick={onErase}>Erase</button>
      <button onClick={onClear}>Clear</button>
      {/* Add more tool buttons and UI elements here */}
    </div>
  );
}

export default Sidebar;
