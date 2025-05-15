import Link from 'next/link';
import { ArrowLeftRight, Clock3, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Materi & Simulasi Algoritma Page Replacement
        </h1>
        <p className="text-center mt-2 text-gray-600 max-w-2xl mx-auto">
          Aplikasi ini membantu Anda memahami dan membandingkan efisiensi algoritma page replacement FIFO, LRU, dan Optimal dalam manajemen memori virtual.
        </p>
      </header>

      {/* Navigasi */}
      <nav className="flex justify-center gap-6 mt-6">
        <Link href="/materi" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
          Materi
        </Link>
        <Link href="/simulasi" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
          Simulasi
        </Link>
      </nav>

      {/* Penjelasan Singkat Algoritma */}
      <section className="mt-12 px-4 md:px-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Penjelasan Algoritma</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'FIFO',
              desc: 'Algoritma mengganti halaman yang paling awal dimasukkan ke memori.',
              icon: <ArrowLeftRight size={40} className="text-blue-600 mx-auto" />,
            },
            {
              title: 'LRU',
              desc: 'Mengganti halaman yang paling lama tidak digunakan.',
              icon: <Clock3 size={40} className="text-green-600 mx-auto" />,
            },
            {
              title: 'Optimal',
              desc: 'Mengganti halaman yang tidak akan digunakan dalam waktu terlama ke depan.',
              icon: <Sparkles size={40} className="text-purple-600 mx-auto" />,
            },
          ].map((algo) => (
            <div key={algo.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
              <div className="mb-4 bg-green-100 p-4 rounded-full">{algo.icon}</div>
              <h3 className="text-xl font-bold mb-2">{algo.title}</h3>
              <p className="text-gray-600 text-center">{algo.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visualisasi Sederhana */}
      <section className="mt-16 px-4 md:px-16">
        <h2 className="text-2xl font-semibold text-center mb-4">Ilustrasi Visual</h2>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow p-6 text-center text-gray-500">
            (Ilustrasi animasi atau diagram proses page replacement bisa diletakkan di sini.)
          </div>
        </div>
      </section>

      {/* Tujuan Aplikasi */}
      <section className="mt-16 px-4 md:px-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Tujuan Aplikasi</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Membandingkan efisiensi tiap algoritma dalam manajemen memori virtual melalui simulasi interaktif.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 p-6 bg-gray-100 text-center text-sm text-gray-500">
        © 2025 Simulasi Page Replacement – Sosims
      </footer>
    </main>
  );
}