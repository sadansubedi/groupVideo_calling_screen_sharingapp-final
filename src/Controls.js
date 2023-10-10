import React,{useState} from 'react'
import {  useClient } from './settings'
import { Grid} from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Controls = (props) => {
    const client = useClient();
    const {tracks,setStart, setIncall} = props;
    //console.log(tracks);
    const [trackState, setTrackState] = useState({video:true , audio: true});
    const [screenTrack,setscreentrack] = useState(true)
    const mute = async (type)=>{
        if(type === "audio"){
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((prevState)=>{
                return{...prevState , audio: !prevState.audio};
            });
        } else if(type === "video"){
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((prevState)=>{
                return{...prevState , video: !prevState.video};
            });
        }
    }
    
//try to implement here but unsuccessfull what? screenshare 

    // const startScreenShare = async () => {
    //     try {
    //       client = client({ mode: 'rtc', codec: 'h264' }); // Create the client instance
    //       await client.join(appid, channelName,token); // Join the channel
          
    //       // Create a screen-sharing video track
    //       screenTrack = await createScreenVideoTrack();
          
    //       // Publish the screen-sharing track to the channel
    //       await client.publish(screenTrack);
    //     } catch (error) {
    //       console.error('Error starting screen share:', error);
    //     }
    //   };

    //   const stopScreenShare = async () => {
    //     try {
    //       if (screenTrack) {
    //         // Unpublish the screen-sharing track from the channel
    //         await client.unpublish(screenTrack);
            
    //         // Close the screen-sharing track
    //         screenTrack.close();
    //       }
    //     } catch (error) {
    //       console.error('Error stopping screen share:', error);
    //     }
    //   };
      

    const leaveChannel= async () =>{
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setIncall(false);
    }

    return (
    <Grid container spacing={2} style={{alignItems:"center"}}>
        <Grid item>  
            <button style={trackState.audio ?{backgroundColor:"blue",padding:"10px"}:{backgroundColor:"red"}}  onClick={()=>mute("audio")}> 
                 {trackState.audio ? <MicIcon/>:<MicOffIcon/>}
            </button>
        </Grid>

        <Grid item>
            <button style={trackState.video ?{backgroundColor:"blue",padding:"10px"}:{backgroundColor:"red"}}  onClick={()=>mute("video")}> 
                 {trackState.video ? <VideocamIcon/>:<VideocamOffIcon/>}
            </button>
        </Grid>

        <Grid item>
            <button onClick={()=>leaveChannel()}>
                    leave
                <ExitToAppIcon/>
            </button>
        </Grid>
      

        Control it
    </Grid>
  )
}

export default Controls