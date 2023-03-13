import React from "react";
import ReactPlayer from "react-player";

export const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        playing
        loop
        muted
        width="100%"
        height="100vh"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <style jsx>{`
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -1;
        }
        .video-background::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 300px;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0), black);
        }
      `}</style>
    </div>
  );
};
