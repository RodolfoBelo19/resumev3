import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import backgroundImage from "../../../../../public/it.jpeg";
import backgroundLight from "../../../../../public/background_light.jpg";
import { useThemeValue } from "@/presentation/contexts/ThemeContext";

export const ImageOrVideoBackground = () => {
  const theme = useThemeValue();

  const themeCurrent = {
    dark: {
      color: "black",
    },
    light: {
      color: "#0c0c0c65",
    },
  };

  const themeSelected = !theme ? themeCurrent.dark : themeCurrent.light;

  return (
    <div className="video-background">
      {/* <ReactPlayer
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
      /> */}
      <Image
        style={{ objectFit: "cover" }}
        className="w-full h-screen"
        src={!theme ? backgroundImage : backgroundLight}
        alt="img"
        width={1920}
        height={1080}
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
          height: 100vh;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0),
            ${themeSelected.color}
          );
        }
      `}</style>
    </div>
  );
};
