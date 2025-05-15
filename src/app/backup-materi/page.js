"use client";

export default function MateriPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Materi Algoritma Page Replacement
      </h1>
      <p className="text-lg text-gray-700">
        Algoritma Page Replacement digunakan untuk menentukan halaman mana yang akan diganti
        ketika terjadi page fault dalam sistem memori. Algoritma ini sangat penting dalam
        pengelolaan memori untuk meningkatkan efisiensi sistem.
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-700 space-y-4">
        <li>
          <strong>FIFO (First-In-First-Out):</strong>
          <p>
            Algoritma ini mengganti halaman yang paling lama berada di memori. Halaman yang pertama kali masuk akan menjadi yang pertama keluar.
          </p>
          <p className="mt-2">
            <strong>Contoh:</strong> Jika urutan halaman adalah 1, 2, 3, 4, dan jumlah frame adalah 3:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>1, 2, 3 dimasukkan ke frame.</li>
            <li>Ketika 4 masuk, 1 diganti karena 1 adalah yang pertama masuk.</li>
          </ul>
        </li>
        <li>
          <strong>LRU (Least Recently Used):</strong>
          <p>
            Algoritma ini mengganti halaman yang paling lama tidak digunakan. Hal ini didasarkan pada asumsi bahwa halaman yang baru saja digunakan kemungkinan akan digunakan lagi.
          </p>
          <p className="mt-2">
            <strong>Contoh:</strong> Jika urutan halaman adalah 1, 2, 3, 2, 4, dan jumlah frame adalah 3:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>1, 2, 3 dimasukkan ke frame.</li>
            <li>Ketika 4 masuk, 1 diganti karena 1 adalah yang paling lama tidak digunakan.</li>
          </ul>
        </li>
        <li>
          <strong>Optimal:</strong>
          <p>
            Algoritma ini mengganti halaman yang tidak akan digunakan dalam waktu terlama di masa depan. Algoritma ini memberikan hasil terbaik tetapi sulit diterapkan karena memerlukan prediksi masa depan.
          </p>
          <p className="mt-2">
            <strong>Contoh:</strong> Jika urutan halaman adalah 1, 2, 3, 2, 4, dan jumlah frame adalah 3:
          </p>
          <ul className="list-disc list-inside ml-6">
            <li>1, 2, 3 dimasukkan ke frame.</li>
            <li>Ketika 4 masuk, 3 diganti karena 3 tidak akan digunakan lagi di masa depan.</li>
          </ul>
        </li>
      </ul>
      <p className="text-lg text-gray-700 mt-6">
        Dengan memahami algoritma-algoritma ini, kita dapat memilih strategi yang paling sesuai
        untuk kebutuhan sistem tertentu.
      </p>
    </div>
  );
}