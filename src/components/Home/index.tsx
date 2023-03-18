import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { About } from "../About";
import { Skills } from "../Skills";
import { Career } from "../Career";
import { Education } from "../Education";
import { MoreAboutMe } from "../MoreAboutMe";

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

  return (
    <>
      <Navbar isScrollY={colorHeader} />
      <Main />
      <div className="bg-black text-white">
        <About />
        <Skills />
        <Career />
        <Education />
        <MoreAboutMe />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
