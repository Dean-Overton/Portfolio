import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "@/components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background text-foreground">
      <NavBar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
