import { Navbar } from "@/presentation/components/HomePage/Navbar";
import { Main } from "@/presentation/components/HomePage/Main";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { AboutComponent } from "../AboutComponent";
import { Skills } from "../Skills";
import { Career } from "../Career";
import { Education } from "../Education";
import { MoreAboutMe } from "../MoreAboutMe";
import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import { useSetColorHeader } from "@/presentation/hooks/useSetColorHeader";

function HomePage() {
  const { colorHeader } = useSetColorHeader();

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
        <AboutComponent />
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
