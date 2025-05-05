"use client";

import { useState } from "react";
import { SimulasiPage } from "./simulasi/simulasipage.js";
import { MateriPage } from "./simulasi/materipage";

export default function Home() {
  const [activePage, setActivePage] = useState("materi");

  return (
    <div>
      <nav className="flex justify-center space-x-4 my-4">
        <button
          onClick={() => setActivePage("materi")}
          className={`px-4 py-2 rounded-lg ${
            activePage === "materi" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Materi
        </button>
        <button
          onClick={() => setActivePage("simulasi")}
          className={`px-4 py-2 rounded-lg ${
            activePage === "simulasi" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Simulasi
        </button>
      </nav>

      {activePage === "materi" && <MateriPage />}
      {activePage === "simulasi" && <SimulasiPage />}
    </div>
  );
}
