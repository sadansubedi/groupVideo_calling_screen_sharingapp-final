import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material"
import { channelName, config, useClient, useMicrophoneAndCameraTracks} from './settings';
import Video from "./Video"
import Controls from './Controls';
import ScreenShare from './screenshare';

const Videocall = (props) => {
    
    const { setInCall, setChannelName } = props;
    const [users,setUsers] = useState([]);
    const [start,setstart] = useState(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();//here tracks are 2 one for audio and 1 for video to control like disable or display the video or audio and ready is saying that user to ready to use audio and video
    
    useEffect(()=>{

        let init = async (name) => {
            client.on("user-published",async(user,mediaType)=>{
                await client.subscribe(user,mediaType);

//when user click to join and ON the Audio and Video then ...

                if(mediaType=== "video"){
                    setUsers((prevUsers)=>{
                        return [...prevUsers,user]; //return previous user and the one who just join the video call(user) ok that means show everyone who join the video call who is already in call and who just join 
                    })
                }
                if(mediaType==="audio"){
                    user.audioTrack.play();
                }
            });

//when user click to leave  and OFF the Audio and Video then ...
// client.on()
            client.on("user-unpublished",(user,mediaType)=>{
                if(mediaType === "audio"){
                    if(user.audioTrack) user.audioTrack.stop();
                }
                if(mediaType === "video"){
                    setUsers((prevUsers)=>{
                        return prevUsers.filter((User)=> User.uid !== user.uid);// return array that contain every thing except the one who leave video call
                    })
                }
            });

            client.on("user-left",(user)=>{
                setUsers((prevUsers)=>{
                    return prevUsers.filter((User)=> User.uid !== user.uid);// if the one user leave that user is search in array by filter method and return or show all except that user who leave video call
                });
            });
// client.join()
            try{
                await client.join(config.appID, name , config.token,null)
            } catch{
                console.log("error");
            }

            if(tracks) await client.publish([tracks[0],tracks[1]]);
            setstart(true);
        };

        if(ready && tracks){
            try{
                init(channelName);
            } catch(error){
                console.log(error);
            }
        }


    },[channelName,client,ready,tracks])// that means whenever this 4 things change there is effect in whole system
    // channelName
    return (
        <Grid container direction="column" style={{height:"100%",position: "none"}}>
            <Grid item style={{height:"10%",position: "none",left:"40px",marginLeft:"500px"}}>
            {ready && tracks && (<>
                <Controls tracks={tracks} setStart={setstart} setInCall={setInCall} />
                <ScreenShare/>
                {/* <ScreenShare tracks={tracks}/> i try to pass tracks which contain video and audio so that i can stop video while screenshare is on but i failed */}
                </>
            )}
            </Grid>
           

            <Grid item style={{height:"90%"}} className='videocall_section'>
                    {start && tracks && (<Video users={users} tracks={tracks} />
                    )}
            </Grid>
    </Grid>
  )
}

export default Videocall

