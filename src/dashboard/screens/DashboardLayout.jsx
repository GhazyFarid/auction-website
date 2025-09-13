import React, { useState } from "react";
import { Menu, User, Bell, Search } from "lucide-react";
import Sidebar from "../components/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { menuItems } from "../constants/menus";
import { userData } from "../constants/constants";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationCount] = useState(3);

  const toggleMobileSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar - Fixed Position */}
      <div
        className={`hidden lg:flex lg:flex-shrink-0 transition-all duration-300 ${
          sidebarCollapsed ? "lg:w-20" : "lg:w-80"
        }`}
      >
        <div
          className="fixed top-0 left-0 h-full bg-white shadow-lg z-30"
          style={{ width: sidebarCollapsed ? "5rem" : "20rem" }}
        >
          <Sidebar
            isMobile={false}
            sidebarCollapsed={sidebarCollapsed}
            toggleMobileSidebar={toggleMobileSidebar}
            toggleDesktopSidebar={toggleDesktopSidebar}
          />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative flex flex-col w-80 max-w-xs bg-white shadow-xl h-full">
            {/* <Sidebar isMobile={true} /> */}
            <Sidebar
              isMobile={true}
              sidebarCollapsed={sidebarCollapsed}
              toggleMobileSidebar={toggleMobileSidebar}
              toggleDesktopSidebar={toggleDesktopSidebar}
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Top Header - Fixed */}
        <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0 sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              >
                <Menu className="h-5 w-5" />
              </button>

              {/* Page Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-800 capitalize">
                  {menuItems.find((item) => item.path === pathname)?.label ||
                    "Dashboard"}
                </h1>
                <p className="text-sm text-gray-600">
                  {menuItems.find((item) => item.path === pathname)
                    ?.description || "Selamat datang di dashboard"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Cari..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>

              {/* User Menu */}
              <div className="flex items-center space-x-2">
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-800">
                    {userData?.name || "Admin User"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {userData?.email || "admin@autolelang.com"}
                  </p>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content - Scrollable */}
        <main className="flex-1 overflow-y-auto">
          {/* <Context /> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
