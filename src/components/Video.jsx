import React from "react";
import BanVid from "/src/assets/bannervedio.mp4"

const Video = () =>{
    return (
        <center>
            <video controls width="75%" src={BanVid}></video>
        </center>
    );
}

export default Video;