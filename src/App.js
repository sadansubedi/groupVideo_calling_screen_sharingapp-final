import { useState } from "react";
//import { Button } from "@mui/material";
import Videocall from "./Videocall";
function App() {
  const [inCall, setInCall] = useState(false);
   const [channelName, setChannelName] = useState("");
  return (
    <div className="App" style={{ height: "100%" }}>
      {inCall ? (
        <Videocall setInCall={setInCall} setChannelName ={setChannelName} />
      ) : (
        <button  onClick={() => setInCall(true)} 
        style={{color:"black",backgroundColor:"blue" , padding:"10px",fontSize:"50px",marginLeft:"500px"}} 
        >
           join the call</button>
        // <Button
        //   variant="contained"
        //   color="primary"
        //   onClick={() => setInCall(true)}
        // >
        //   join the call
        // </Button>
      )}
    </div>
  );
}

export default App;

/*here we only import Videocall.js but all other component(setting.js,Controls.js , Video.js,screenshare.js line no 79) are imported and
 used in Videocall.js  ok
for screen share we only work in screenshare.js only but to other file 
 
 */
