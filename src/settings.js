import {
    // AgoraVideoPlayer,
  createClient,
  createMicrophoneAndCameraTracks,
 // createScreenVideoTrack
} from "agora-rtc-react";


 const appid ="d1c732e22f2743d7b97184d404a6536e";
 const token ="007eJxTYAiZ4PnYXWVNkTTfHsaK7H2n95zVeJG1/NcO81+solc6U30UGFIMk82NjVKNjNKMzE2MU8yTLM0NLUxSTAxMEs1Mjc1Sj3xWSW0IZGRI0DzDxMgAgSA+D0NxclFqal5xRmJRqhEDAwA+IiIk"

export const config = { mode: "rtc", codec: "vp8", appID: appid, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = 'screenshare2';
//export const screenshare = createScreenVideoTrack()
// export const Videoplayer = AgoraVideoPlayer();
/*here we only setup Agora  */
