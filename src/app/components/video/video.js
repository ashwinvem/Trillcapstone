import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
 
export default function VideoComp (props) {
  return (
    <HoverVideoPlayer
     className="video-main"
      videoSrc={props.video}
      loadingOverlay={
        <div className="loading-spinner-overlay" />
      }
      videoStyle={{
        borderRadius : 8
      }}
    />
  );
}