import React, { useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Col, Row, Tabs } from 'antd';
import { UserContext } from '../../Providers/UserProvider';
import useRtcClient from './hooks/useRtcClient';
import VideoLocal from './VideoLocal';
import VideoRemote from './VideoRemote';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

const ClassRoom = () => {
  const { session } = useParams<any>();
  const auth = useContext(UserContext);
  const rtcClient: any = useRtcClient();
  const { userState } = auth;

  const initializeLocalPeer = useCallback(
    async e => {
      if (rtcClient !== null) {
        await rtcClient.startListening('local user');
        e.preventDefault();
      }
    },
    [rtcClient]
  );

  const initializeRemotePeer = useCallback(
    async e => {
      await rtcClient.connect('instructor');
      e.preventDefault();
    },
    [rtcClient]
  );
  console.log(rtcClient);
  return (
    <Tabs defaultActiveKey='1' onChange={callback}>
      <TabPane tab={`Class Room - ${session}`} key='1'>
        <Row>
          <Col span={12}>
            <Button
              onClick={e => {
                rtcClient && initializeLocalPeer(e);
              }}
            >
              Ready Local
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Button
              onClick={e => {
                rtcClient && initializeRemotePeer(e);
              }}
            >
              Ready Remote
            </Button>
          </Col>
        </Row>
        {rtcClient && (
          <Row>
            <Col span={18}>
              <VideoLocal rtcClient={rtcClient} />
            </Col>
            <Col span={6}>
              <VideoRemote rtcClient={rtcClient} />
            </Col>
          </Row>
        )}
      </TabPane>
      <TabPane tab='Notes' key='2'>
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  );
};

export default ClassRoom;
