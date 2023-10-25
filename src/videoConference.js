import React, { useRef, useEffect } from 'react';

function VideoConference() {
  const localVideoRef = useRef(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    startWebcam();
  }, []);

  return (
    <div className="video-conference">
      {/* Local video feed */}
      <div className="video-screen">
        <video autoPlay playsInline muted ref={localVideoRef}></video>
        <div className="avatar">You</div>
      </div>
      {/* Remote video feed */}
      <div className="video-screen">
        <video autoPlay playsInline id="remoteVideo"></video>
        <div className="avatar">User 2</div>
      </div>
      {/* Add more screens for additional participants */}
    </div>
  );
}

export default VideoConference;
