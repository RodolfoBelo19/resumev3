import Image from "next/image";
import profile from "../../../public/profile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Main = () => {
  return (
    <div className="flex py-24 flex-col items-center justify-center">
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
      <div className="py-16 flex gap-3">
        <Link
          href=""
          className="hover:bg-sky-800 rounded-sm"
        >
          <FaLinkedin className="text-white cursor-pointer text-4xl" />
        </Link>
        <Link
          href=""
          className="hover:bg-zinc-700 rounded-full"
        >
          <FaGithub className="text-white cursor-pointer text-4xl" />
        </Link>
        <Link
          href=""
          className="hover:bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 rounded-xl"
        >
          <FaInstagram className="text-white cursor-pointer text-4xl rounded" />
        </Link>
      </div>
    </div>
  );
};
