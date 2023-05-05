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
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/rodolfo-belo-5786b21a0"
        className="hover:bg-sky-800 rounded-sm"
      >
        <FaLinkedin className="text-white cursor-pointer text-4xl" />
      </Link>
      <Link
        target="_blank"
        href="https://github.com/RodolfoBelo19"
        className="hover:bg-zinc-700 rounded-full"
      >
        <FaGithub className="text-white cursor-pointer text-4xl" />
      </Link>
      <Link
        target="_blank"
        href="https://www.instagram.com/rodolfobeloo"
        className="hover:bg-gradient-to-r from-purple-500 via-orange-500 to-pink-500 rounded-xl"
      >
        <FaInstagram className="text-white cursor-pointer text-4xl rounded" />
      </Link>
    </div>
  );
};
