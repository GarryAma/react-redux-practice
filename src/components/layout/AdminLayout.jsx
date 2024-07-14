import React from "react";
import { Button } from "../ui/button";
import { IoAdd, IoCart, IoPerson, IoPricetag } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const SideBarItem = (props) => {
  const { icon, text } = props;
  return (
    <Button
      variant="ghost"
      size="lg"
      className="w-full rounded-none justify-start"
    >
      {icon}
      {text}
    </Button>
  );
};

export const AdminLayout = ({
  title = "dummy title",
  description = "dummy description",
  rightSection,
  children,
}) => {
  return (
    <div className="flex">
      <aside className="w-72 border-r h-screen ">
        <div className="h-16 flex-col flex items-center justify-center border-b">
          <h2 className="font-semibold text-2xl">Admin Dashboard</h2>
        </div>
        <div className="flex flex-col space-y-0 py-4">
          {/* <Button
            variant="ghost"
            size="lg"
            className="w-full rounded-none justify-start"
          >
            <IoPricetag className="h-4 w-4 mr-4" />
            Products Management
          </Button> */}
          <SideBarItem
            text="Products Management"
            icon={<IoPricetag className="h-4 w-4 mr-4" />}
          />
          <SideBarItem
            text="Order Management"
            icon={<IoCart className="h-4 w-4 mr-4" />}
          />
        </div>
      </aside>
      <div className="flex-1">
        <header className="h-16 border-b w-full flex justify-end items-center px-8">
          <Button className="rounded-full" size="icon">
            <IoPerson className="w-4 h-4" />
          </Button>
        </header>
        <main className="flex flex-col p-4">
          <div className="flex justify-between items-center pb-4 border-b mb-8">
            <div>
              <h1 className="font-bold text-2xl">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            {rightSection}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};
