import type { FC } from "react";

import { Inter } from "next/font/google";
import Table from "./Table";
import { useRouter } from "next/router";

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const MealsMain: FC = () => {
  const router = useRouter();

  return (
    <div className="p-10 pb-20 flex flex-col pt-20 gap-16">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center w-full justify-between">
          <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
            New Clients
          </h1>

          <button
            onClick={() => router.push("/meal/add")}
            className={`${inter500.className} shadow bg-primary text-white rounded-lg text-md px-6 py-1`}
          >
            Add Meal Item
          </button>
        </div>
        <Table actions={["ADD MEAL PLAN"]} />
      </div>
      <div className="flex relative flex-col mt-10 gap-3 w-full">
        <h1 className={`${inter500.className} text-2xl my-2 text-black`}>
          Existing Clients
        </h1>
        <Table actions={["EDIT", "DELETE"]} />
      </div>
    </div>
  );
};

export default MealsMain;
