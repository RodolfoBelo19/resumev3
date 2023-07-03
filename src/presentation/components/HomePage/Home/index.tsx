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

  const dark_gradient =
    "text-white bg-gradient-to-r from-transparent via-black to-transparent";
  const light_gradient =
    "text-black bg-opacity-90 bg-gradient-to-r from-transparent via-gray-300 to-transparent";

  return (
    <div id="home">
      <Navbar isScrollY={colorHeader} />
      <Main />
      <div className={`${!theme ? dark_gradient : light_gradient}`}>
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
