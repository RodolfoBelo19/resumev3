import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { ImageOrVideoBackground } from "../ImageOrVideoBackground";

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
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  // "../../../public/intro.mp4";

  return (
    <>
      <Navbar isScrollY={colorHeader} />
      <ImageOrVideoBackground />
      <div className="pt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
