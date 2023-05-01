import Image from "next/image";
import profile from "../../../../../public/profile.jpg";
import { ImageOrVideoBackground } from "../ImageOrVideoBackground";
import { Social } from "../Social";
import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

export const Main = () => {
  const theme = useThemeValue();

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="pt-20 mx-auto max-w-7xl h-screen px-2 sm:px-6 lg:px-8">
        <ImageOrVideoBackground />
        <div className="flex my-24 flex-col items-center justify-center">
          <motion.button
            className="text=white"
            onClick={() => {}}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Image
              className="shadow-md rounded-full w-44 md:w-60"
              alt="profile"
              src={profile}
            />
          </motion.button>
          <p className="text-white shadow-md py-5 text-3xl md:text-5xl mt-3 font-thin tracking-widest">
            Rodolfo Belo
          </p>
          <div className="flex gap-2">
            <Link
              href="https://wa.me/5521997929884"
              className={`${
                !theme
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-white text-black shadow-md"
              } 
              font-thin text-center p-1 rounded-md w-40`}
            >
              Contate-me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1oBVze0__j353SiAmw6uIoKzwRt_vqbkU/view?usp=sharing"
              target="_blank"
              className={`${
                !theme
                  ? "bg-cyan-600 text-white shadow-md"
                  : "bg-white text-black shadow-md"
              } 
              font-thin text-center p-1 rounded-md w-40`}
            >
              Download CV
            </Link>
          </div>
          <Social classProp="py-16 flex gap-3" />
        </div>
      </div>
    </>
  );
};
