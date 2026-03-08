import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";


const DashboardLayout = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar
          setMobileOpen={setMobileOpen}
          profileOpen={profileOpen}
          setProfileOpen={setProfileOpen}
          handleNav={handleNav}
        />

        <main className="flex-1 overflow-auto p-5 lg:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;