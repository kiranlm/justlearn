import React from 'react';

const Video = ({ isLocal, name, videoRef }: any) => (
  <div>
    <video autoPlay muted={isLocal} ref={videoRef}>
      <track kind='captions' default />
    </video>
    <div>{name}</div>
  </div>
);

export default Video;
