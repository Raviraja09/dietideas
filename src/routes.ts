import { FaHome, FaUsers, FaBell, FaUser } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { TbFolderFilled } from "react-icons/tb";
import { MdRestaurantMenu } from "react-icons/md";

import type { IconType } from "react-icons";

export interface IRoute {
  path: string;
  name: string;
  icon: IconType;
}

const routes: IRoute[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: FaHome,
  },
  {
    path: "/clients",
    name: "Client Management",
    icon: FaUsers,
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: FaBell,
  },
  {
    path: "/chats",
    name: "Chats",
    icon: AiFillWechat,
  },
  {
    path: "/meals",
    name: "Meal Plan",
    icon: MdRestaurantMenu,
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: SlCalender,
  },
  {
    path: "/resources",
    name: "Resources",
    icon: TbFolderFilled,
  },
  {
    path: "/account",
    name: "Account",
    icon: FaUser,
  },
];

export default routes;
