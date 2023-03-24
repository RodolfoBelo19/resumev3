import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { IAuthUserFirebase } from "../../interfaces/IAuthUserFirebase";

import { auth, providerGoogle } from "../../infra/firebase";
import { FcGoogle } from "react-icons/fc";

import Link from "next/link";
import { useRouter } from "next/router";

interface AuthUserProps {
  user: IAuthUserFirebase | any;
  setUser: (user: IAuthUserFirebase | any) => void;
  sign_in?: string | null;
  sign_out?: string | null;
  classNameProps?: string;
}

export const AuthUser =
  ({
     user,
     setUser,
     sign_in,
     sign_out,
     classNameProps,
   }: AuthUserProps) => {
    const router = useRouter()
    const signIn = async () => {
      try {
        const result = await signInWithPopup(auth, providerGoogle);
        setUser(result.user);
        await router.push('/admin');
      } catch (error) {
        console.log(error);
      }
    };

    const signOutUser = async () => {
      try {
        await signOut(auth);
        setUser({});
      } catch (error) {
        console.log(error);
      }
    };

    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return (
      <div className={classNameProps}>
        {
          !user &&
          <Link onClick={signIn} href="" className="flex gap-2 p-2">
            Login with <FcGoogle className="text-white cursor-pointer text-2xl"/>
          </Link>
        }
        {user && <button className="w-full text-left" onClick={signOutUser}>{sign_out}</button>}
      </div>
    );
  };