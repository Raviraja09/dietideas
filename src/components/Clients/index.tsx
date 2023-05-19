import type { FC } from "react";

import { Inter } from "next/font/google";
import Table from "../common/Table";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const ClienMain: FC = () => {
  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          New Clients
        </h1>
        <Table />
      </div>
      <div className="flex relative flex-col mt-10 gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Existing Clients
        </h1>
        <Table />
      </div>
    </div>
  );
};

export default ClienMain;
