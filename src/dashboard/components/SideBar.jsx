import { X, Car, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../constants/menus";

const Sidebar = ({
  isMobile = false,
  sidebarCollapsed,
  toggleMobileSidebar,
  toggleDesktopSidebar,
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div
        className={`flex items-center justify-between p-4 border-b border-gray-200 transition-all duration-300 ${
          sidebarCollapsed && !isMobile ? "px-2" : "px-4"
        }`}
      >
        <div className="flex items-center space-x-2">
          <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
            <Car className="h-6 w-6 text-white" />
          </div>
          {(!sidebarCollapsed || isMobile) && (
            <div className="transition-opacity duration-300">
              <span className="text-xl font-bold text-gray-800">
                AutoLelang
              </span>
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          )}
        </div>
        <button
          onClick={isMobile ? toggleMobileSidebar : toggleDesktopSidebar}
          className="p-1 rounded-md hover:bg-gray-100"
        >
          {isMobile ? (
            <X className="h-5 w-5" />
          ) : sidebarCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <div
          className={`space-y-2 transition-all duration-300 ${
            sidebarCollapsed && !isMobile ? "p-2" : "p-4"
          }`}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isRegistered = !!item.path;
            return isRegistered ? (
              <NavLink
                key={item.id}
                to={item.path}
                end={item.path === "/dashboard"} // biar dashboard nggak selalu aktif
                className={({ isActive }) =>
                  `w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  } ${sidebarCollapsed && !isMobile ? "justify-center" : ""}`
                }
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {(!sidebarCollapsed || isMobile) && (
                  <div className="flex-1 transition-opacity duration-300">
                    <p className="font-medium truncate">{item.label}</p>
                    <p className="text-xs truncate text-gray-400">
                      {item.description}
                    </p>
                  </div>
                )}
              </NavLink>
            ) : (
              <button
                key={item.id}
                disabled
                className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left text-gray-400 cursor-not-allowed"
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                {(!sidebarCollapsed || isMobile) && (
                  <div className="flex-1">
                    <p className="font-medium truncate">{item.label}</p>
                    <p className="text-xs truncate text-gray-400">
                      {item.description}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
