// frontend/src/pages/Admin.tsx
import { useState } from "react";

export default function Admin() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-3">
          <button
            onClick={() => setActivePage("dashboard")}
            className={`text-left px-3 py-2 rounded-md hover:bg-gray-700 ${
              activePage === "dashboard" ? "bg-gray-700" : ""
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActivePage("posts")}
            className={`text-left px-3 py-2 rounded-md hover:bg-gray-700 ${
              activePage === "posts" ? "bg-gray-700" : ""
            }`}
          >
            Manage Posts
          </button>
          <button
            onClick={() => setActivePage("settings")}
            className={`text-left px-3 py-2 rounded-md hover:bg-gray-700 ${
              activePage === "settings" ? "bg-gray-700" : ""
            }`}
          >
            Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold capitalize">{activePage}</h1>
          <button className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md">
            Logout
          </button>
        </header>

        {/* Content Area */}
        <div className="p-6 flex-1 overflow-y-auto">
          {activePage === "dashboard" && <p>📊 Dashboard content here...</p>}
          {activePage === "posts" && <p>✍️ Post management tools here...</p>}
          {activePage === "settings" && <p>⚙️ Settings here...</p>}
        </div>
      </main>
    </div>
  );
}
