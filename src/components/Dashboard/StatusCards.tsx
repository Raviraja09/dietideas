import type { IStatusCard } from "@/types";
import { FC, useState } from "react";

import StatusCard from "./StatusCard";

const StatusCards: FC = () => {
  const [cardsData, setCardsData] = useState<IStatusCard[]>([
    {
      color: "bg-success",
      count: 5,
      title: "Total New Clients This Month",
    },
    {
      color: "bg-primary",
      count: 50,
      title: "Total Number of Clients",
    },
    {
      color: "bg-background",
      count: 15,
      title: "Remaining Meal Plans To Send",
    },
    {
      color: "bg-warning",
      count: 50,
      title: "Total Appointments This Month",
    },
  ]);

  return (
    <div className="flex gap-3">
      {cardsData.map((data: IStatusCard, index: number) => (
        <StatusCard key={index * 6226520} data={data} />
      ))}
    </div>
  );
};

export default StatusCards;
