import { MdOutlinePerson,MdAddBox,MdOutlineDashboard } from "react-icons/md";

const menu = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    path: "/dashboard",
  },
  {
    title: "Add Product",
    icon: <MdAddBox />,
    path: "/add-product",
  },
  {
    title: "Account",
    icon: <MdOutlinePerson />,
    childrens: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Change Password",
        path: "/edit-profile",
      },
    ],
  },
];

export default menu;
