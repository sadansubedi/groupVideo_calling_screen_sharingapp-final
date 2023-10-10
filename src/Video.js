import React from "react";
import { AgoraVideoPlayer } from "agora-rtc-react";
//import { Grid } from "@mui/material";
//import { useState, useEffect } from "react";
//import "./index.css";
const Video = (props) => {
  const { users, tracks } = props;
  console.log(users);
  // const [gridSpacing, SetGridSpacing] = useState(12);

  // useEffect(() => {
  //   SetGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  // }, [users, tracks]);


  const videoTrackStyle = {
    flex: "1 1 20%",
    // aspectRatio: "1/1", 
    aspectRatio: "0.3/0.13", 
    margin: "5px",
    ':last-child': {
      height: "40%", 
      width: "40%",
      position:"absolute"
    }
    
  }

  return (
    <div style={{ height: "100%", width: "100%", display: "flex", flexWrap: "wrap" }}>
  <AgoraVideoPlayer
    videoTrack={tracks[1]}
    // style={{ flex: "1 1 20%",height:'30%',width:"30%", margin: "5px" }} // For the host
     style={{ flex: "1 1 20%",aspectRatio: "0.3/0.13", margin: "5px" }} // For the host
    className="admin"
  />
  {users.length > 0 && users.map((user, index) => (
    user.videoTrack ? (
      <AgoraVideoPlayer
        videoTrack={user.videoTrack}
        key={user.uid}
        // style={{ flex: "1 1 20%",height:'30%',width:"30%", margin: "5px" }}
        style={videoTrackStyle}
        // style={{ flex: "1 1 20%", aspectRatio: "0.3/0.13", margin: "5px" }}
        className="userharu"
      />
    ) : null
  ))}
  
</div>
  );
};

{/* <div style={{ height: "100%", width: "100%", display: "flex", flexWrap: "wrap" }}>
  <AgoraVideoPlayer
    videoTrack={tracks[1]}
    style={{ flex: "1 0 calc(33.33% - 10px)", height: "40%",width:"40%", aspectRatio: "1/1", margin: "5px" }} // For the host
    className="admin"
  />
  {users.length > 0 && users.map((user, index) => (
    user.videoTrack ? (
      <AgoraVideoPlayer
        videoTrack={user.videoTrack}
        key={user.uid}
        style={{ flex: "1 0 calc(33.33% - 10px)", height: "30%",width:"30%", aspectRatio: "1/1", margin: "5px" }}
        className="userharu"
      />
    ) : null
  ))}
</div> */}


    // <div  style={{ height: "100%",width:"100%",display:"flex",flexWrap:"wrap"}}>
    //     <AgoraVideoPlayer
    //       videoTrack={tracks[1]}
    //       style={{ height: "40%", width: "40%",position:"absolute" }}//if there is only one user or we can say host ok 
    //       className="admin"
    //     />
    //   {users.length >= 0 && // if other people join the videocall
    //     users.map((user) => {
    //       if (user.videoTrack) {
    //         return (
    //             <AgoraVideoPlayer
    //               videoTrack={user.videoTrack}
    //               key={user.uid}
    //               style={{  height: "30%", width: "30%",position:"absolute" }}
    //               className="userharu"
    //             />
    //         );
    //        }
    //       else {
    //         return null;
    //       }
    //     })}
    // </div>


    // <Grid container style={{ height: "100%",width:"100%",position:"static"}}>
    //   <Grid item xs={gridSpacing}>
    //     <AgoraVideoPlayer
    //       videoTrack={tracks[1]}
    //       style={{ height: "30%", width: "30%",top:"40%",display:"inline-block",position:"absolute" }}//if there is only one user or we can say host ok 
    //       className="agoravideo"
    //     />
    //   </Grid>
      
    //   {users.length >= 0 && // if other people join the videocall
    //     users.map((user) => {
    //       if (user.videoTrack) {
    //         return (
    //           <Grid item xs={gridSpacing}>
    //             <AgoraVideoPlayer
    //               videoTrack={user.videoTrack}
    //               key={user.uid}
    //               style={{  height: "30%", width: "30%",position:"absolute" }}
    //               className="userharu"
    //             />
    //           </Grid>
    //         );
    //        }

    //       else {
    //         return null;
    //       }
    //     })}
    // </Grid>

    // <div style={{ height: "100%",position:"static",display:"flex",flexDirection:"row"}}>      
    //     <AgoraVideoPlayer
    //       videoTrack={tracks[1]}
    //       style={{ height: "70%", width: "70%",position:"absolute"}} 
    //      // style={videoTrackStyle}
    //       className="agorovideo"
    //     />
    //   {users.length > 0 &&
    //     users.map((user) => {
    //       if (user.videoTrack) {
    //         return (
    //           <div style={{display:"flex"}}>
    //             <AgoraVideoPlayer
    //               videoTrack={user.videoTrack}
    //               key={user.uid}
    //               style={{ height: "30%", width: "30%",position:"absolute" }}
    //             />
    //           </div>
    //         );
    //       } else {
    //         return null;
    //       }
    //     })}
    // </div>


export default Video;

