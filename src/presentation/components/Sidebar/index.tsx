import { IAuthUserFirebase } from "@/interfaces/IAuthUserFirebase";
import Link from "next/link";
import { useState } from "react";
import { AuthUser } from "../HomePage/AuthUser";

export const Sidebar = ({ classProp }: any) => {
  const [user, setUser] = useState<IAuthUserFirebase>({} as IAuthUserFirebase);

  return (
    <div
      className={`${classProp} flex flex-col h-screen bg-zinc-800 w-56 pt-4`}
    >
      <div className="ml-4 mb-4">
        <Link href="/admin">
          <span className="text-white font-bold text-xl">Admin Area</span>
        </Link>
      </div>
      <div className="mt-8">
        <Link href="/admin/EditAbout/64565b07240ac550c34c4f4e">
          <span className="text-zinc-300 hover:bg-zinc-700 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            Edit About
          </span>
        </Link>
        <Link href="/admin/EditMain">
          <span className="text-zinc-300 hover:bg-zinc-700 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-md">
            Edit Main
          </span>
        </Link>
        <div className="flex gap-2 items-center">
          <AuthUser
            classNameProps="w-full text-zinc-300 hover:bg-zinc-700 hover:text-white group flex items-center px-3 py-2 text-sm font-medium rounded-md"
            user={user}
            setUser={setUser}
            sign_out={"logout"}
          />
        </div>
      </div>
    </div>
  );
};
