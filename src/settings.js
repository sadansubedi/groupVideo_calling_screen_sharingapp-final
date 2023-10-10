import {
    // AgoraVideoPlayer,
  createClient,
  createMicrophoneAndCameraTracks,
 // createScreenVideoTrack
} from "agora-rtc-react";


 const appid ="get it from agora https://console.agora.io/projects";
 const token ="same get it from agora ok "

export const config = { mode: "rtc", codec: "vp8", appID: appid, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = 'screenshare2';
//export const screenshare = createScreenVideoTrack()
// export const Videoplayer = AgoraVideoPlayer();
/*here we only setup Agora  */
