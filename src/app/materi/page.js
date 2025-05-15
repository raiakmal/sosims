"use client";
import { useState } from "react";
import { ArrowLeftRight, Clock3, Sparkles } from "lucide-react";

const algorithmList = [
  {
    key: "fifo",
    title: "FIFO",
    subtitle: "First-In-First-Out",
    icon: <ArrowLeftRight size={32} className="text-blue-600" />,
    color: "blue-600",
    bg: "bg-blue-100",
    text: "text-blue-600",
    hover: "hover:bg-blue-50 hover:border-blue-600",
    border: "border-blue-600",
  },
  {
    key: "lru",
    title: "LRU",
    subtitle: "Least Recently Used",
    icon: <Clock3 size={32} className="text-green-600" />,
    color: "green-600",
    bg: "bg-green-100",
    text: "text-green-600",
    hover: "hover:bg-green-50 hover:border-green-500",
    border: "border-green-500",
  },
  {
    key: "optimal",
    title: "Optimal",
    subtitle: "Algoritma Optimal",
    icon: <Sparkles size={32} className="text-purple-600" />,
    color: "purple-600",
    bg: "bg-purple-100",
    text: "text-purple-600",
    hover: "hover:bg-purple-50 hover:border-purple-500",
    border: "border-purple-500",
  },
];

const quizData = {
  fifo: [
    {
      question: "1. Algoritma mana yang mengganti halaman yang paling lama berada di memori?",
      options: ["LRU", "FIFO", "Optimal"],
      answer: "FIFO",
    },
    {
      question: "2. Algoritma mana yang tidak dapat diimplementasikan dalam sistem nyata?",
      options: ["FIFO", "LRU", "Optimal"],
      answer: "Optimal",
    },
    {
      question: "3. Algoritma mana yang memiliki performa terbaik dalam hal jumlah page fault?",
      options: ["FIFO", "LRU", "Optimal"],
      answer: "Optimal",
    },
    {
      question: "4. Struktur data apa yang digunakan oleh FIFO?",
      options: ["Stack", "Queue", "Heap"],
      answer: "Queue",
    },
    {
      question: "5. Apa yang menyebabkan \"Belady's Anomaly\" pada FIFO?",
      options: [
        "Jumlah page fault turun saat frame bertambah",
        "Jumlah page fault naik saat frame bertambah",
        "Halaman diganti berdasarkan akses terbaru",
      ],
      answer: "Jumlah page fault naik saat frame bertambah",
    },
  ],
  lru: [
    {
      question: "1. Apa prinsip dasar dari algoritma LRU?",
      options: [
        "FIFO - First In First Out",
        "LRU - Least Recently Used",
        "Optimal Replacement",
      ],
      answer: "LRU - Least Recently Used",
    },
    {
      question: "2. Kelebihan utama LRU dibanding FIFO adalah?",
      options: [
        "Lebih sederhana",
        "Mempertimbangkan penggunaan terakhir",
        "Tidak butuh memori tambahan",
      ],
      answer: "Mempertimbangkan penggunaan terakhir",
    },
    {
      question: "3. Apa tantangan implementasi LRU di sistem nyata?",
      options: [
        "Butuh pelacak waktu akses",
        "Terlalu sederhana",
        "Tidak efisien",
      ],
      answer: "Butuh pelacak waktu akses",
    },
    {
      question: "4. LRU lebih cocok digunakan ketika:",
      options: [
        "Data jarang diakses ulang",
        "Data sering diakses berulang",
        "Cache tidak penting",
      ],
      answer: "Data sering diakses berulang",
    },
    {
      question: "5. Contoh nyata penggunaan LRU adalah:",
      options: [
        "Penjadwalan CPU",
        "Sistem cache browser",
        "Manajemen user",
      ],
      answer: "Sistem cache browser",
    },
  ],
  optimal: [
    {
      question: "1. Apa prinsip utama dari algoritma Optimal?",
      options: [
        "Mengganti halaman yang paling awal masuk",
        "Mengganti halaman yang tidak akan digunakan dalam waktu lama",
        "Mengganti halaman yang paling lama tidak digunakan",
      ],
      answer: "Mengganti halaman yang tidak akan digunakan dalam waktu lama",
    },
    {
      question: "2. Mengapa algoritma Optimal tidak digunakan dalam praktik sistem nyata?",
      options: [
        "Karena sulit divisualisasikan",
        "Karena memerlukan pengetahuan referensi di masa depan",
        "Karena membutuhkan kapasitas memori besar",
      ],
      answer: "Karena memerlukan pengetahuan referensi di masa depan",
    },
    {
      question: "3. Algoritma Optimal dapat memberikan...",
      options: [
        "Jumlah page fault terbanyak",
        "Jumlah page fault paling sedikit",
        "Jumlah page fault acak tergantung keberuntungan",
      ],
      answer: "Jumlah page fault paling sedikit",
    },
    {
      question: "4. Dalam referensi 1, 2, 3, 4, 1, 2, 5 (frame 3), halaman mana yang diganti saat 5 masuk?",
      options: ["3", "4", "2"],
      answer: "4",
    },
    {
      question: "5. Optimal sering digunakan sebagai...",
      options: [
        "Benchmark dalam penelitian",
        "Algoritma default di semua OS",
        "Pengganti FIFO di sistem embedded",
      ],
      answer: "Benchmark dalam penelitian",
    },
  ],
};

function Quiz({ type }) {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (idx, value) => {
    setAnswers((prev) => ({ ...prev, [idx]: value }));
  };

  const handleCheck = () => {
    let score = 0;
    quizData[type].forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    setResult(`Kamu menjawab ${score} dari 5 soal dengan benar 🎯`);
  };

  return (
    <div className="mt-10 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">
        Kuis Singkat: Algoritma {type.toUpperCase()}
      </h3>
      {quizData[type].map((q, i) => (
        <div className="mb-6" key={i}>
          <h4 className="text-base font-semibold mb-2 text-gray-800">{q.question}</h4>
          <div className="space-y-2 text-sm text-gray-700">
            {q.options.map((opt) => (
              <label className="flex items-center space-x-2" key={opt}>
                <input
                  type="radio"
                  name={`${type}${i}`}
                  value={opt}
                  checked={answers[i] === opt}
                  onChange={() => handleChange(i, opt)}
                  className={`accent-${type === "fifo" ? "blue" : type === "lru" ? "green" : "purple"}-600`}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleCheck}
        className={`mt-4 px-5 py-2 bg-${type === "fifo" ? "blue" : type === "lru" ? "green" : "purple"}-600 hover:bg-${type === "fifo" ? "blue" : type === "lru" ? "green" : "purple"}-700 text-white font-semibold rounded`}
      >
        Periksa Jawaban
      </button>
      {result && (
        <p
          className={`mt-4 text-lg font-semibold ${
            type === "fifo"
              ? "text-green-600"
              : type === "lru"
              ? "text-green-600"
              : "text-purple-700"
          }`}
        >
          {result}
        </p>
      )}
    </div>
  );
}

export default function MateriPage() {
  const [active, setActive] = useState("fifo");

  return (
    <main className="w-full px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          Materi Algoritma Page Replacement
        </h1>
        <div className="bg-white rounded-lg p-8 mb-10 shadow-sm border border-gray-100">
          <p className="text-gray-700 leading-relaxed">
            Algoritma Page Replacement digunakan untuk menentukan halaman mana yang akan diganti ketika terjadi page fault dalam sistem memori. Algoritma ini sangat penting dalam pengelolaan memori untuk meningkatkan efisiensi sistem.
          </p>
        </div>
        {/* Algorithm Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {algorithmList.map((algo) => (
            <button
              key={algo.key}
              onClick={() => setActive(algo.key)}
              className={`algorithm-card bg-white rounded-lg p-5 shadow-sm border flex flex-col items-center text-center w-full cursor-pointer transition-all ${
                active === algo.key
                  ? `border-2 ${algo.border}`
                  : "border-gray-100"
              } ${algo.hover}`}
              style={{ fontFamily: "Inter, sans-serif" }}
              type="button"
            >
              <div className={`w-14 h-14 flex items-center justify-center ${algo.bg} rounded-full ${algo.text} mb-4`}>
                {algo.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{algo.title}</h3>
              <p className="text-gray-600 text-sm">{algo.subtitle}</p>
            </button>
          ))}
        </div>
        {/* Content Sections */}
        <div>
          {active === "fifo" && (
            <section className="mb-16">
              {/* FIFO Section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 mr-4">
                  <ArrowLeftRight size={28} className="text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold">FIFO (First-In-First-Out)</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Algoritma ini mengganti halaman yang paling lama berada di memori. Halaman yang pertama kali masuk akan menjadi yang pertama keluar.
                </p>
                <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-600">
                  <h4 className="font-semibold mb-2">Prinsip Kerja:</h4>
                  <p className="text-gray-700">
                    FIFO menggunakan struktur data antrian (queue) untuk melacak urutan masuknya halaman ke dalam memori. Ketika terjadi page fault dan memori penuh, halaman yang pertama masuk akan diganti.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Contoh:</h3>
                <p className="mb-4">Jika urutan halaman adalah 1, 2, 3, 4, dan jumlah frame adalah 3:</p>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">1</span>
                    </div>
                    <span className="text-gray-600">1, 2, 3 dimasukkan ke frame.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">2</span>
                    </div>
                    <span className="text-gray-600">Ketika 4 masuk, 1 diganti karena 1 adalah yang pertama masuk.</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Visualisasi:</h4>
                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full mb-6">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">Referensi</th>
                        <th className="text-center pb-2">1</th>
                        <th className="text-center pb-2">2</th>
                        <th className="text-center pb-2">3</th>
                        <th className="text-center pb-2">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 font-medium">Frame 1</td>
                        <td className="text-center py-2 bg-blue-50">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2 bg-red-50">4</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Frame 2</td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2 bg-blue-50">2</td>
                        <td className="text-center py-2">2</td>
                        <td className="text-center py-2">2</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Frame 3</td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2 bg-blue-50">3</td>
                        <td className="text-center py-2">3</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Status</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-400">
                  <h4 className="font-semibold mb-2">Kelebihan:</h4>
                  <ul className="list-disc pl-5 mb-3">
                    <li>Sederhana dan mudah diimplementasikan</li>
                    <li>Overhead rendah</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Kekurangan:</h4>
                  <ul className="list-disc pl-5">
                    <li>Tidak mempertimbangkan frekuensi penggunaan halaman</li>
                    <li>Dapat mengganti halaman yang masih sering digunakan</li>
                    <li>Rentan terhadap anomali Belady</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-400 mb-6 mt-6">
                <h4 className="font-semibold mb-2">🔍 Analogi Sehari-Hari</h4>
                <p>FIFO mirip kayak antrian di kasir: siapa yang duluan datang, dia yang duluan dilayani. Tanpa peduli siapa yang paling butuh.</p>
              </div>
              <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-400 mb-6">
                <h4 className="font-semibold mb-2">🧪 Studi Kasus Tambahan</h4>
                <p>Referensi urutan: <strong>7, 0, 1, 2, 0, 3, 0, 4</strong> dengan 3 frame. Saat 4 masuk, 7 diganti karena dia paling awal masuk.</p>
              </div>
              <div className="bg-blue-50 rounded p-4 border-l-4 border-blue-400 mt-6">
                <h4 className="font-semibold mb-2">📘 Fakta Tambahan</h4>
                <ul className="list-disc pl-5">
                  <li>FIFO tidak mempertimbangkan kapan halaman terakhir digunakan.</li>
                  <li>Masalah besar dari FIFO adalah "Belady's Anomaly", yaitu jumlah page fault bisa naik saat jumlah frame ditambah. Ini kontra-intuitif dan menunjukkan kelemahan FIFO.</li>
                  <li>Contoh kasus nyata: digunakan di sistem lama atau OS dengan arsitektur sederhana.</li>
                </ul>
              </div>
              <Quiz type="fifo" />
            </section>
          )}
          {active === "lru" && (
            <section className="mb-16">
              {/* LRU Section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full text-green-600 mr-4">
                  <Clock3 size={28} className="text-green-600" />
                </div>
                <h2 className="text-2xl font-bold">LRU (Least Recently Used)</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Algoritma ini mengganti halaman yang paling lama tidak digunakan. Hal ini didasarkan pada asumsi bahwa halaman yang baru saja digunakan kemungkinan akan digunakan lagi.
                </p>
                <div className="bg-green-50 rounded p-4 border-l-4 border-green-500">
                  <h4 className="font-semibold mb-2">Prinsip Kerja:</h4>
                  <p className="text-gray-700">
                    LRU melacak waktu terakhir setiap halaman diakses. Ketika terjadi page fault dan memori penuh, halaman yang paling lama tidak diakses akan diganti.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Contoh:</h3>
                <p className="mb-4">Jika urutan halaman adalah 1, 2, 3, 2, 4, dan jumlah frame adalah 3:</p>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">1</span>
                    </div>
                    <span className="text-gray-600">1, 2, 3 dimasukkan ke frame.</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">2</span>
                    </div>
                    <span className="text-gray-600">2 diakses kembali, menjadi yang paling baru digunakan.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">3</span>
                    </div>
                    <span className="text-gray-600">Ketika 4 masuk, 1 diganti karena 1 adalah yang paling lama tidak digunakan.</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Visualisasi:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full mb-6">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">Referensi</th>
                        <th className="text-center pb-2">1</th>
                        <th className="text-center pb-2">2</th>
                        <th className="text-center pb-2">3</th>
                        <th className="text-center pb-2">2</th>
                        <th className="text-center pb-2">4</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 font-medium">Frame 1</td>
                        <td className="text-center py-2 bg-green-50">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2 bg-red-50">4</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Frame 2</td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2 bg-green-50">2</td>
                        <td className="text-center py-2">2</td>
                        <td className="text-center py-2 bg-green-50">2</td>
                        <td className="text-center py-2">2</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Frame 3</td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2 bg-green-50">3</td>
                        <td className="text-center py-2">3</td>
                        <td className="text-center py-2">3</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Status</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-green-600">Hit</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-400">
                  <h4 className="font-semibold mb-2">Kelebihan:</h4>
                  <ul className="list-disc pl-5 mb-3">
                    <li>Mempertimbangkan temporal locality</li>
                    <li>Performa lebih baik dibanding FIFO</li>
                    <li>Tidak rentan terhadap anomali Belady</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Kekurangan:</h4>
                  <ul className="list-disc pl-5">
                    <li>Implementasi lebih kompleks</li>
                    <li>Memerlukan overhead untuk melacak waktu akses</li>
                    <li>Memerlukan hardware tambahan untuk implementasi efisien</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 rounded p-4 border-l-4 border-green-500 mb-6">
                <h4 className="font-semibold mb-2">🔍 Analogi Sehari-Hari</h4>
                <p>LRU itu kayak aplikasi yang auto logout akun kamu kalau udah lama gak dipakai. Jadi yang paling jarang kamu sentuh, bakal 'dibuang' duluan.</p>
              </div>
              <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-400">
                <h4 className="font-semibold mb-2">🧪 Studi Kasus Tambahan</h4>
                <p>Urutan referensi: <strong>1, 2, 3, 1, 4, 5</strong> dengan 3 frame. Ketika 5 masuk, halaman 2 diganti karena 2 adalah yang paling lama tidak digunakan.</p>
              </div>
              <div className="bg-green-50 rounded p-4 border-l-4 border-green-500 mb-6">
                <h4 className="font-semibold mb-2">📘 Fakta Tambahan</h4>
                <ul className="list-disc pl-5">
                  <li>LRU mengasumsikan bahwa halaman yang baru dipakai akan dipakai lagi.</li>
                  <li>Algoritma ini populer karena performanya lebih stabil dibanding FIFO.</li>
                  <li>Implementasi LRU biasanya membutuhkan pencatatan waktu akses atau daftar terurut.</li>
                  <li>Digunakan dalam cache modern, seperti web browser dan sistem database.</li>
                </ul>
              </div>
              <Quiz type="lru" />
            </section>
          )}
          {active === "optimal" && (
            <section className="mb-16">
              {/* Optimal Section */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full text-purple-600 mr-4">
                  <Sparkles size={28} className="text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold">Algoritma Optimal</h2>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Algoritma ini mengganti halaman yang tidak akan digunakan untuk waktu paling lama di masa depan. Ini adalah algoritma yang paling efisien tetapi sulit diimplementasikan dalam sistem nyata.
                </p>
                <div className="bg-purple-50 rounded p-4 border-l-4 border-purple-500">
                  <h4 className="font-semibold mb-2">Prinsip Kerja:</h4>
                  <p className="text-gray-700">
                    Algoritma Optimal memerlukan pengetahuan tentang referensi halaman di masa depan. Ketika terjadi page fault, algoritma ini akan mengganti halaman yang tidak akan digunakan untuk waktu paling lama atau tidak akan digunakan sama sekali.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Contoh:</h3>
                <p className="mb-4">Jika urutan halaman adalah 1, 2, 3, 4, 1, 2, 5, dan jumlah frame adalah 3:</p>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">1</span>
                    </div>
                    <span className="text-gray-600">1, 2, 3 dimasukkan ke frame.</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">2</span>
                    </div>
                    <span className="text-gray-600">Ketika 4 masuk, 3 diganti karena 3 tidak akan digunakan lagi dalam urutan referensi yang tersisa.</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded mr-2">
                      <span className="font-medium">3</span>
                    </div>
                    <span className="text-gray-600">Ketika 5 masuk, 4 diganti karena 4 tidak akan digunakan lagi, sedangkan 1 dan 2 akan digunakan.</span>
                  </div>
                </div>
                <h4 className="font-semibold mb-3">Visualisasi:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full mb-6">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">Referensi</th>
                        <th className="text-center pb-2">1</th>
                        <th className="text-center pb-2">2</th>
                        <th className="text-center pb-2">3</th>
                        <th className="text-center pb-2">4</th>
                        <th className="text-center pb-2">1</th>
                        <th className="text-center pb-2">2</th>
                        <th className="text-center pb-2">5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 font-medium">Frame 1</td>
                        <td className="text-center py-2 bg-purple-50">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                        <td className="text-center py-2">1</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Frame 2</td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2 bg-purple-50">2</td>
                        <td className="text-center py-2">2</td>
                        <td className="text-center py-2">2</td>
                        <td className="text-center py-2">2</td>
                        <td className="text-center py-2">2</td>
                        <td className="text-center py-2">2</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Frame 3</td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2"></td>
                        <td className="text-center py-2 bg-purple-50">3</td>
                        <td className="text-center py-2 bg-red-50">4</td>
                        <td className="text-center py-2">4</td>
                        <td className="text-center py-2">4</td>
                        <td className="text-center py-2 bg-red-50">5</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Status</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                        <td className="text-center py-2 text-green-600">Hit</td>
                        <td className="text-center py-2 text-green-600">Hit</td>
                        <td className="text-center py-2 text-blue-600">Miss</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-400">
                  <h4 className="font-semibold mb-2">Kelebihan:</h4>
                  <ul className="list-disc pl-5 mb-3">
                    <li>Memberikan performa terbaik (jumlah page fault minimum)</li>
                    <li>Menjadi standar untuk membandingkan algoritma lain</li>
                  </ul>
                  <h4 className="font-semibold mb-2">Kekurangan:</h4>
                  <ul className="list-disc pl-5">
                    <li>Tidak dapat diimplementasikan dalam sistem nyata</li>
                    <li>Memerlukan pengetahuan tentang referensi halaman di masa depan</li>
                    <li>Hanya digunakan sebagai benchmark teoritis</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-50 rounded p-4 border-l-4 border-purple-400 mt-6">
                <h4 className="font-semibold mb-2">📘 Fakta Tambahan</h4>
                <ul className="list-disc pl-5">
                  <li>Optimal digunakan sebagai patokan dalam membandingkan algoritma lain karena memberikan jumlah page fault paling minimal.</li>
                  <li>Meski tidak bisa diimplementasikan langsung, algoritma ini dipakai dalam simulasi dan penelitian akademik.</li>
                  <li>Optimal ideal untuk menilai efisiensi algoritma seperti FIFO, LRU, atau NRU dalam sistem eksperimen.</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-400 mt-6">
                <h4 className="font-semibold mb-2">📊 Studi Kasus Tambahan</h4>
                <p>Referensi urutan halaman: <strong>2, 3, 2, 1, 5, 2, 4, 5</strong> dengan 3 frame.</p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Halaman <strong>2, 3, 1</strong> dimasukkan pertama kali ke dalam memori.</li>
                  <li>Saat <strong>5</strong> masuk, <strong>3</strong> diganti karena tidak digunakan lagi dalam waktu dekat.</li>
                  <li>Optimal akan selalu mengganti halaman yang paling lambat (atau tidak pernah) dipakai kembali.</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded p-4 border-l-4 border-yellow-400 mt-6">
                <h4 className="font-semibold mb-2">🧠 Analogi Sehari-Hari</h4>
                <p>Bayangin kamu mau buang isi kulkas tapi cuma boleh buang satu makanan. Kamu cek label expired semua makanan dan buang yang masa berlakunya paling lama — karena dia akan 'digunakan' paling lambat. Itulah algoritma optimal 💡</p>
              </div>
              <Quiz type="optimal" />
            </section>
          )}
        </div>
        {/* Comparison Section */}
        <section id="perbandingan" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Perbandingan Algoritma</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4">Algoritma</th>
                    <th className="text-left py-3 px-4">Prinsip</th>
                    <th className="text-left py-3 px-4">Kelebihan</th>
                    <th className="text-left py-3 px-4">Kekurangan</th>
                    <th className="text-left py-3 px-4">Implementasi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">FIFO</td>
                    <td className="py-3 px-4">Mengganti halaman yang paling lama masuk</td>
                    <td className="py-3 px-4">Sederhana, overhead rendah</td>
                    <td className="py-3 px-4">Tidak mempertimbangkan frekuensi penggunaan</td>
                    <td className="py-3 px-4">Mudah (Queue)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 font-medium">LRU</td>
                    <td className="py-3 px-4">Mengganti halaman yang paling lama tidak digunakan</td>
                    <td className="py-3 px-4">Mempertimbangkan temporal locality</td>
                    <td className="py-3 px-4">Overhead tinggi, implementasi kompleks</td>
                    <td className="py-3 px-4">Menengah (Stack/Counter)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Optimal</td>
                    <td className="py-3 px-4">Mengganti halaman yang tidak akan digunakan untuk waktu paling lama</td>
                    <td className="py-3 px-4">Performa terbaik, jumlah page fault minimum</td>
                    <td className="py-3 px-4">Tidak dapat diimplementasikan dalam sistem nyata</td>
                    <td className="py-3 px-4">Tidak praktis (Memerlukan pengetahuan masa depan)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        {/* Summary Section */}
        <section id="kesimpulan">
          <h2 className="text-2xl font-bold mb-6">Kesimpulan</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Algoritma Page Replacement merupakan komponen penting dalam manajemen memori sistem operasi. Setiap algoritma memiliki kelebihan dan kekurangan masing-masing:
            </p>
            <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-2">
              <li>
                <span className="font-medium">FIFO</span> - Sederhana namun tidak selalu efisien karena tidak mempertimbangkan frekuensi penggunaan halaman.
              </li>
              <li>
                <span className="font-medium">LRU</span> - Lebih efisien karena mempertimbangkan temporal locality, namun implementasinya lebih kompleks.
              </li>
              <li>
                <span className="font-medium">Optimal</span> - Memberikan performa terbaik tetapi tidak dapat diimplementasikan dalam sistem nyata karena memerlukan pengetahuan tentang referensi halaman di masa depan.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Pemilihan algoritma yang tepat bergantung pada karakteristik aplikasi dan kebutuhan sistem. Dalam praktiknya, banyak sistem operasi menggunakan variasi atau kombinasi dari algoritma-algoritma ini untuk mendapatkan performa yang optimal.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}