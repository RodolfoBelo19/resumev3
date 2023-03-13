import { Navbar } from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { VideoBackground } from "../VideoBackground";

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
      <VideoBackground />
      <div className="pt-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quidem
        vel explicabo, nam accusantium hic perspiciatis doloribus id eius
        deserunt repudiandae nesciunt iure, unde, labore magni? Deleniti ad
        facere harum.
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
