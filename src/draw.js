import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './sidebar'; // Note that the component name is 'Sidebar', not 'sidebar'.
import VideoConference from './videoConference';

function DrawingArea() {
    const canvasRef = useRef(null);
    const [isVideoConferenceVisible, setVideoConferenceVisible] = useState(false);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
  
      // Configure drawing settings (e.g., color, line thickness) here
  
      // Add event listeners for drawing interactions
  
      // Implement real-time collaboration features here
  
    }, []);
  
    const handleDraw = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
  
      let isDrawing = false; // A flag to track whether the user is currently drawing.
      let lastX = 0;
      let lastY = 0;
  
      // Configure drawing settings (e.g., color, line thickness) here
      context.strokeStyle = 'black';
      context.lineWidth = 2;
  
      // Event listeners for mouse or touch interactions
      canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];
      });
  
      canvas.addEventListener('mousemove', (e) => {
        if (!isDrawing) return; // Stop drawing if the mouse isn't held down
  
        const x = e.clientX - canvas.offsetLeft;
        const y = e.clientY - canvas.offsetTop;
  
        context.beginPath();
        context.moveTo(lastX, lastY);
        context.lineTo(x, y);
        context.stroke();
  
        [lastX, lastY] = [x, y];
      });
  
      canvas.addEventListener('mouseup', () => {
        isDrawing = false;
      });
  
      canvas.addEventListener('mouseout', () => {
        isDrawing = false;
      });
    };
  
    const handleErase = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
      
        let isErasing = false; // A flag to track whether the user is currently erasing.
        let lastX = 0;
        let lastY = 0;
      
        // Set the eraser color to match the canvas background color (e.g., white)
        context.strokeStyle = 'white';
        context.lineWidth = 10; // Adjust the line thickness for the eraser
      
        // Event listeners for mouse or touch interactions while erasing
        canvas.addEventListener('mousedown', (e) => {
          isErasing = true;
          [lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];
        });
      
        canvas.addEventListener('mousemove', (e) => {
          if (!isErasing) return; // Stop erasing if the mouse isn't held down
      
          const x = e.clientX - canvas.offsetLeft;
          const y = e.clientY - canvas.offsetTop;
      
          context.beginPath();
          context.moveTo(lastX, lastY);
          context.lineTo(x, y);
          context.stroke();
      
          [lastX, lastY] = [x, y];
        });
      
        canvas.addEventListener('mouseup', () => {
          isErasing = false;
        });
      
        canvas.addEventListener('mouseout', () => {
          isErasing = false;
        });
      };
      
  
      const handleClear = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
      
        // Clear the entire canvas by filling it with the canvas background color (e.g., white)
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvasWidth, canvasHeight);
      };

      const toggleVideoConference = () => {
        setVideoConferenceVisible(!isVideoConferenceVisible);
      };
    
      
  
    return (
        <div className="drawing-area">
        <canvas ref={canvasRef} width={800} height={600}></canvas>
        <Sidebar onDraw={handleDraw} onErase={handleErase} onClear={handleClear} />
        <button onClick={toggleVideoConference}>
          {isVideoConferenceVisible ? 'Close Video Conference' : 'Open Video Conference'}
        </button>
        {isVideoConferenceVisible && <VideoConference />}
      </div>
    );
  }
  
export default DrawingArea;

