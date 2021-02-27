import { useEffect, useReducer, useRef, useState } from 'react';

import RtcClient from '../../../RTCConfig/RtcClient';

const useRtcClient = () => {
  const [rtcClient, setRtcClientState] = useState(null);
  const remoteVideoRef = useRef(null);
  const [, forceRender] = useReducer(boolean => !boolean, false);

  const setRtcClient = (client: any) => {
    setRtcClientState(client);
    forceRender();
  };

  useEffect(() => {
    const init = async () => {
      const client = new RtcClient(remoteVideoRef, setRtcClient);
      await client.setMediaStream();
    };

    init();
  }, []);

  return rtcClient;
};

export default useRtcClient;
