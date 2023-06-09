import { MainSection, Navbar } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";

import { ChatsMain } from "@/components";

const Chats: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chats | Dietition Dashboard | Diet Ideas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Navbar />
        <MainSection>
          <ChatsMain />
        </MainSection>
      </main>
    </>
  );
};

export default Chats;
