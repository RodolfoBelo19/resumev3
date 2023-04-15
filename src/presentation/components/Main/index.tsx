import Image from "next/image";
import profile from "../../../../public/profile.jpg";
import { ImageOrVideoBackground } from "../ImageOrVideoBackground";
import { Social } from "../Social";

export const Main = () => {
  return (
    <>
      <div className="pt-20 mx-auto max-w-7xl h-screen px-2 sm:px-6 lg:px-8">
        <ImageOrVideoBackground />
        <div className="flex my-24 flex-col items-center justify-center">
          <Image
            className="shadow-md rounded-full w-44 md:w-60"
            alt="profile"
            src={profile}
          />
          <p className="text-white shadow-md py-5 text-3xl md:text-5xl mt-3 font-thin tracking-widest">
            Rodolfo Belo
          </p>
          <div className="flex gap-2">
            <button className="bg-cyan-600 text-white shadow-md font-thin p-1 rounded-md w-40">
              Contrate-me
            </button>
            <button className="bg-cyan-600 text-white shadow-md font-thin p-1 rounded-md w-40">
              Download CV
            </button>
          </div>
          <Social classProp="py-16 flex gap-3" />
        </div>
      </div>
    </>
  );
};
