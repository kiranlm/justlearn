import React, { useEffect, useRef } from 'react';

import Video from './Video';

const VideoLocal = ({ rtcClient }: any) => {
  const videoRef = useRef(null);
  const currentVideoRef: any = videoRef.current;
  const { mediaStream } = rtcClient;

  useEffect(() => {
    if (currentVideoRef === null) return;

    const getMedia = () => {
      try {
        currentVideoRef.srcObject = mediaStream;
      } catch (err) {
        console.error(err);
      }
    };

    getMedia();
  }, [currentVideoRef, mediaStream]);

  return <Video isLocal={true} name={rtcClient.localPeerName} videoRef={videoRef} />;
};

export default VideoLocal;
