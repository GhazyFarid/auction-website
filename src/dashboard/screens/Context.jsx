import React, { useState } from "react";
import { Menu, User, Bell, Search } from "lucide-react";

const Context = () => {
  return (
    <div className="p-6">
      {/* membuat lebar maximal */}
      {/* <div className="max-w-7xl mx-auto"> */}
      <div className="mx-auto">
        {/* Demo Content */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to AutoLelang Dashboard
          </h2>
          <p className="text-gray-600 mb-4">
            Dashboard ini telah diperbarui dengan fitur-fitur berikut:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Sidebar yang fixed dan tidak bergerak saat scroll halaman</li>
            <li>Tombol untuk collapse/expand sidebar (desktop only)</li>
            <li>Smooth transitions dan animasi</li>
            <li>Tooltip untuk menu items saat sidebar di-collapse</li>
            <li>Responsive design untuk mobile</li>
          </ul>
        </div>

        {/* Demo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-2">Card {i}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>

        {/* Long content to demonstrate scrolling */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Scroll Test Content</h2>
          {[...Array(20)].map((_, i) => (
            <p key={i} className="mb-4 text-gray-600">
              Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Context;
