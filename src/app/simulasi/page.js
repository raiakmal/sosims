"use client";

import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import fifoAlgorithm from "../../components/algorithms/fifo";
import lruAlgorithm from "../../components/algorithms/lru";
import optimalAlgorithm from "../../components/algorithms/opt";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SimulasiPage() {
  const [pages, setPages] = useState("");
  const [frameCount, setFrameCount] = useState("");
  const [algorithms, setAlgorithms] = useState([]);
  const [result, setResult] = useState(null);

  const algorithmOptions = [
    { label: "FIFO", value: "FIFO" },
    { label: "LRU", value: "LRU" },
    { label: "Optimal", value: "Optimal" },
  ];

  const handleCheckboxChange = (value) => {
    setAlgorithms((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSimulate = () => {
    const pageList = pages.split(",").map((p) => parseInt(p.trim()));
    if (pageList.some(isNaN)) {
      alert("Pastikan semua input page berupa angka dipisahkan koma!");
      return;
    }

    if (algorithms.length === 0) {
      alert("Pilih setidaknya satu algoritma!");
      return;
    }

    const algoMap = {
      FIFO: fifoAlgorithm,
      LRU: lruAlgorithm,
      Optimal: optimalAlgorithm,
    };

    const simResult = {};
    algorithms.forEach((algo) => {
      simResult[algo] = algoMap[algo](pageList, frameCount);
    });

    setResult(simResult);
  };

  // Data untuk chart
  const chartData = result ? {
    labels: algorithms,
    datasets: [
      {
        label: "Page Fault",
        data: algorithms.map((algo) => result[algo]?.pageFault || 0),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Hits",
        data: algorithms.map((algo) => {
          const res = result[algo];
          return res ? res.steps.length - res.pageFault : 0;
        }),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  } : {};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Simulasi Algoritma Page Replacement
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Masukkan Halaman:
          </label>
          <input
            type="text"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            placeholder="Masukkan halaman, pisahkan dengan koma (contoh: 1,2,3,2,1,4)"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Jumlah Frame:
          </label>
          <input
            type="number"
            value={isNaN(frameCount) ? '' : frameCount}
            onChange={(e) => setFrameCount(parseInt(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black"
            placeholder="Jumlah frame (misal: 3)"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Pilih Algoritma:
          </label>
          <div className="flex gap-8 flex-wrap">
            {algorithmOptions.map(({ label, value }) => (
              <label
                key={value}
                className="flex items-center space-x-2 text-lg font-medium text-gray-700"
              >
                <input
                  type="checkbox"
                  value={value}
                  checked={algorithms.includes(value)}
                  onChange={() => handleCheckboxChange(value)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleSimulate}
          className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Simulasikan
        </button>
      </div>

      {result && (
        <div className="mt-8 space-y-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Perbandingan Hasil Algoritma
            </h2>

            <Bar data={chartData} options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Perbandingan Page Fault dan Hits',
                  font: {
                    size: 18,
                  },
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                  },
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }} />
          </div>

          {Object.entries(result).map(([name, res]) => (
            <div key={name} className="p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Hasil: {name}
              </h2>

              <div className="space-y-4">
                {res.steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-sm">
                    <span className="w-6 text-gray-600">{step.page}</span>
                    <div className="flex gap-2">
                      {Array.from({ length: frameCount }).map((_, j) => (
                        <div
                          key={j}
                          className={`w-12 h-12 border rounded-lg flex items-center justify-center text-lg transition-all duration-500 ease-in-out ${
                            step.frame[j] !== undefined
                              ? "bg-green-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {step.frame[j] !== undefined ? step.frame[j] : "-"}
                        </div>
                      ))}
                    </div>
                    <span
                      className={`text-xs ${step.fault ? "text-red-600" : "text-green-600"}`}
                    >
                      {step.fault ? "⛔ Fault" : "✅ Hit"}
                    </span>
                  </div>
                ))}
              </div>

              <p className="font-medium mt-4 text-lg">
                Total Page Fault:{" "}
                <span className="text-red-600">{res.pageFault}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}