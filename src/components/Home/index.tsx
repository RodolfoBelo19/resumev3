import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";

function HomePage() {
  const [colorHeader, setColorHeader] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setColorHeader(true);
      } else {
        setColorHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const video =
    // "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    // "../../../public/intro.mp4";
    "https://www.youtube.com/embed/BqFSHbzSs7U?autoplay=1&mute=1";

  return (
    <>
      <Navbar isScrollY={colorHeader} />
      <div className="h-screen">
        <iframe
          src={video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={true}
          title="video"
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="pt-20">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
