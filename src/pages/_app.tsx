import { Sidebar } from "@/presentation/components/Sidebar";
import { ThemeProvider } from "@/presentation/contexts/ThemeContext";
import { useAuth } from "@/presentation/hooks/useAuth";
import "@/presentation/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { user } = useAuth();

  let pathname = "";

  if (typeof window !== "undefined") {
    pathname = Router.pathname;
  }

  if (user?.uid) {
    return (
      <ThemeProvider>
        {pathname.startsWith("/admin") ? (
          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              <Component {...pageProps} />
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
