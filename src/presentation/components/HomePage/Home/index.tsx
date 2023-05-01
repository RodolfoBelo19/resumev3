import { Navbar } from "@/presentation/components/HomePage/Navbar";
import { Main } from "@/presentation/components/HomePage/Main";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { About } from "../About";
import { Skills } from "../Skills";
import { Career } from "../Career";
import { Education } from "../Education";
import { MoreAboutMe } from "../MoreAboutMe";
import { useThemeValue } from "@/presentation/contexts/ThemeContext";

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

  const theme = useThemeValue();

  return (
    <div id="home">
      <Navbar isScrollY={colorHeader} />
      <Main />
      <div
        className={`${
          !theme
            ? "bg-black text-white"
            : "bg-zinc-200 text-black bg-opacity-90"
        }`}
      >
        <About />
        <Skills />
        <Career />
        <Education />
        <MoreAboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
