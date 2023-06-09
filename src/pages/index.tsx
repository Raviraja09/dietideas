import Head from "next/head";
import { Login } from "@/components";

import styles from "@/styles/Home.module.css";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Dietition Dashboard | Diet Ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Login />
      </main>
    </>
  );
};

export default LoginPage;
