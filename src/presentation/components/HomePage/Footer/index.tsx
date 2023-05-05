import { useEffect, useState } from "react";
import { Social } from "../Social";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl pb-24 px-2 sm:px-6 lg:px-8">
        <Social classProp="py-5 justify-center flex gap-3" />
        <div className="flex flex-col items-center justify-center">
          <span className="py-2">Feito com: Nextjs, NestJs e MongoDB</span>
          <small className="font-thin">Rodolfo Belo - 2023</small>
        </div>
      </div>
    </motion.div>
  );
};
