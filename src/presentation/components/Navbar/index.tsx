import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
  ArrowDownCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  useThemeSetter,
  useThemeValue,
} from "@/presentation/contexts/ThemeContext";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = ({ isScrollY }: any) => {
  const router = useRouter();

  const onToggleLanguageClick = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const navigation = [
    { name: "Home", href: "#home", current: true },
    { name: "About", href: "#about", current: true },
    { name: "Skills", href: "#skills", current: true },
    { name: "Career", href: "#carrer", current: true },
    { name: "Education", href: "#education", current: true },
    { name: "More About Me", href: "#more-about-me", current: true },
  ];

  const theme = useThemeValue();
  const setTheme = useThemeSetter();

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <Disclosure
      as="nav"
      className={`fixed w-full z-50 transition ${
        isScrollY
          ? !theme
            ? "bg-black bg-opacity-80"
            : "bg-white bg-opacity-80"
          : !theme
          ? "bg-black bg-opacity-20"
          : "bg-white bg-opacity-20"
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`${
                    isScrollY
                      ? !theme
                        ? "text-white hover:bg-zinc-700 hover:text-white"
                        : "text-black hover:bg-white hover:bg-opacity-50"
                      : !theme
                      ? "text-white hover:bg-zinc-200 hover:bg-opacity-10"
                      : "text-zinc-500 hover:bg-white hover:bg-opacity-10"
                  } inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div
                  className={`${
                    isScrollY
                      ? !theme
                        ? "text-white"
                        : "text-black"
                      : !theme
                      ? "text-white"
                      : "text-zinc-500"
                  } flex flex-shrink-0 items-center`}
                >
                  Rodolfo Belo
                </div>
                <div className="hidden transition duration-200 sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`${
                          isScrollY
                            ? !theme
                              ? "bg-zinc-900 bg-opacity-70 text-white"
                              : "bg-white bg-opacity-20 text-zinc-800"
                            : !theme
                            ? "bg-zinc-900 bg-opacity-70 text-white"
                            : "bg-white bg-opacity-20 text-zinc-500"
                        } px-3 py-2 rounded-md text-sm font-medium`}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="text-white flex items-center mx-5">
                  <button type="button" onClick={toggleTheme}>
                    {theme ? "🌙" : "☀️"}
                  </button>
                </div>
                <button
                  type="button"
                  className={`${
                    isScrollY
                      ? !theme
                        ? "text-white hover:bg-zinc-700 hover:text-white"
                        : "text-black hover:bg-white hover:bg-opacity-50"
                      : !theme
                      ? "text-white hover:bg-zinc-200 hover:bg-opacity-10"
                      : "text-zinc-500 hover:bg-white hover:bg-opacity-10"
                  } inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={"/profile.jpeg"}
                        alt="avatar"
                        width={32}
                        height={32}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="https://wa.me/5521997929884"
                            target="_blank"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "px-4 py-2 text-sm gap-2 flex items-center text-gray-700"
                            )}
                          >
                            <UsersIcon height={20} width={20} />
                            Contate-me
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="https://drive.google.com/file/d/1oBVze0__j353SiAmw6uIoKzwRt_vqbkU/view?usp=sharing"
                            target="_blank"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "px-4 py-2 text-sm gap-2 flex items-center text-gray-700"
                            )}
                          >
                            <ArrowDownCircleIcon height={20} width={20} />
                            Download CV
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${
                    isScrollY
                      ? !theme
                        ? "bg-zinc-900 bg-opacity-70 text-white"
                        : "bg-white bg-opacity-50 text-zinc-800"
                      : !theme
                      ? "bg-zinc-900 bg-opacity-70 text-white"
                      : "bg-white bg-opacity-20 text-zinc-500"
                  } px-3 flex flex-col py-2 rounded-md text-sm font-medium`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="gap-4 flex items-center justify-center p-5">
                <button onClick={() => onToggleLanguageClick("pt")}>
                  <Image src="/br.webp" alt="brazil" width={30} height={30} />
                </button>
                <button onClick={() => onToggleLanguageClick("en")}>
                  <Image src="/us.webp" alt="usa" width={30} height={30} />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
