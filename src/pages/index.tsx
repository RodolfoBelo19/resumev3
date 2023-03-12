import HomePage from "@/components/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rodolfo Belo</title>
        <meta name="description" content="Welcome to my resume!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
