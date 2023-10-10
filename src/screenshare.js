import React, { useState,useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { v4 as uuidv4 } from 'uuid';

function ScreenShare() {
 // const { tracks }= props //we try to implement props to make video off while screen is share but unsuccessfull
  //console.log(tracks[1]);
  //let client = null;
  let screenTrack = null;
  const AppID ='d1c732e22f2743d7b97184d404a6536e';
  const channelName = 'screenshare2';
  const token ="007eJxTYAiZ4PnYXWVNkTTfHsaK7H2n95zVeJG1/NcO81+solc6U30UGFIMk82NjVKNjNKMzE2MU8yTLM0NLUxSTAxMEs1Mjc1Sj3xWSW0IZGRI0DzDxMgAgSA+D0NxclFqal5xRmJRqhEDAwA+IiIk"
  

  const [uuid, setUuid] = useState();
 const [client,setclient] = useState(null);

  const generateUUID = () => {
    const newUuid = parseInt(uuidv4());
    console.log(newUuid);
    setUuid(newUuid);
  };

  useEffect(() => {
    const agoraclient = AgoraRTC.createClient({ mode: 'rtc', codec: 'h264' });
    setclient(agoraclient);
  }, []);

  // const startScreenShare = async () => {
  //   await client.join(AppID, channelName,token,uuid);
  //   screenTrack = await AgoraRTC.createScreenVideoTrack();
  //   await client.publish(screenTrack);
  //   generateUUID();
  // };

const startScreenShare = async () => {
    try {
      // Ensure that client is properly initialized before calling join
      if (!client) {
       // setclient(true);
        console.error('Client is not properly initialized.');
        return;
      }
  
      await client.join(AppID, channelName, token, uuid);
      screenTrack = await AgoraRTC.createScreenVideoTrack();
      await client.publish(screenTrack);
     // tracks[1]= false;
      generateUUID();
      
      //await tracks[1].setEnabled(!tracks.video);


    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  const stopScreenShare = async () => {
    await client.unpublish(screenTrack);
    screenTrack.close();
  };

  return (
    <div>
      <button onClick={startScreenShare}>Start Screen Share</button>
      <button onClick={stopScreenShare}>Stop Screen Share</button>
    </div>
  );
}

export default ScreenShare;