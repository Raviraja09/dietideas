import { FC, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

type TableType = {
  patient_name: string;
  service_name: string;
  application_date: string;
  expiry_date: string;
};

const inter500 = Inter({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});

const inter400 = Inter({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

type Props = { actions: string[] };

const Table: FC<Props> = ({ actions }) => {
  const router = useRouter();

  const [data, setData] = useState<TableType[]>([
    {
      patient_name: "George R.R Martin",
      service_name: "Service 1",
      application_date: "11/11/2021",
      expiry_date: "11/11/2021",
    },
    {
      patient_name: "Markus Suzak",
      service_name: "Service 2",
      application_date: "11/11/2021",
      expiry_date: "11/11/2021",
    },
    {
      patient_name: "Ankur Warikoo",
      service_name: "Service 3",
      application_date: "11/11/2021",
      expiry_date: "11/11/2021",
    },
  ]);

  return (
    <>
      <div className="w-full relative overflow-hidden overflow-x-auto h-80">
        <table className="w-full p-5 border shadow-md h-80 bg-white">
          <thead className="bg-white">
            {Object.keys(data[0]).map((key: string, index: number) => (
              <td
                className={`capitalize w-56 text-xl py-3 text-center border ${inter500.className} `}
                key={index}
              >
                {key.split("_").join(" ")}
              </td>
            ))}
            <td className=" text-xl w-44 py-3 text-center border">Actions</td>
          </thead>
          <tbody>
            {data.map((item: TableType, index: number) => (
              <tr
                key={index * 5645}
                className={`${index % 2 === 0 ? "bg-secondary" : "bg-white"}`}
              >
                {Object.keys(item as TableType).map(
                  (key: string, index: number) => (
                    <td
                      className={`capitalize text-center border ${inter500.className} `}
                      key={index * 565}
                    >
                      {item[key as keyof TableType]}
                    </td>
                  )
                )}
                <td className="text-center flex  items-center justify-center h-full gap-2 px-5 border">
                  {actions.map((action: string, index: number) => (
                    <button
                      key={index * 564}
                      className={`bg-primary text-white px-2 py-1 rounded-md ${
                        index === 0 ? "bg-primary" : "bg-danger"
                      }`}
                      onClick={() => {
                        if (index === 0 && action === "ADD MEAL PLAN") {
                          router.push("/meals/add");
                        }
                      }}
                    >
                      {action}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-5 w-full h-10 px-5">
        <p className={`${inter400.className} text-sm `}>
          Showing 1 to 10 of 55 entries
        </p>

        <div className="flex gap-2">
          <button className="text-sm rounded-full">previous</button>
          {[1, 2, 3, 4, 5, 6].map((item: number) => (
            <button
              className={`p-2 rounded-lg ${
                item === 1 && "bg-primary text-white"
              } hover:bg-primary hover:text-white transition-all`}
              key={item / 561}
            >
              {item}
            </button>
          ))}
          <button className="text-sm rounded-full">Next</button>
        </div>
      </div>
    </>
  );
};

export default Table;
