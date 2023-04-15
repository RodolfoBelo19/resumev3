import { Social } from "../Social";

export const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl pb-24 px-2 sm:px-6 lg:px-8">
      <Social classProp="py-5 justify-center flex gap-3" />
      <div className="flex flex-col items-center justify-center">
        <span className="py-2">Feito com: Nextjs, NestJs e MongoDB</span>
        <small className="font-thin">Rodolfo Belo - 2023</small>
      </div>
    </div>
  );
};
