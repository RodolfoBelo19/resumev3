import { useThemeValue } from "@/presentation/contexts/ThemeContext";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

type SocialProps = {
  classProp?: string;
};

export const Social = ({ classProp }: SocialProps) => {
  const theme = useThemeValue();
  
  return (
    <div className={classProp}>
      <Link href="" className="hover:bg-sky-800 rounded-sm">
        <FaLinkedin className="text-white cursor-pointer text-4xl" />
      </Link>
      <Link href="" className="hover:bg-zinc-700 rounded-full">
        <FaGithub className="text-white cursor-pointer text-4xl" />
      </Link>
      <Link
        href=""
        className="hover:bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 rounded-xl"
      >
        <FaInstagram className="text-white cursor-pointer text-4xl rounded" />
      </Link>
    </div>
  );
};
