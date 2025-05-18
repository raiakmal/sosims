"use client";

import Navbar from "@/components/navbar";
import {
  ArrowLeftRight,
  Clock3,
  Sparkles,
  BookOpen,
  Wrench,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="hero-bg py-36 px-4 bg-gradient-to-br from-blue-100 via-white to-green-100 relative overflow-hidden">
          {/* Optional: Decorative background shapes */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40rem] h-[38rem] bg-blue-300/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40rem] h-[38rem] bg-green-300/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
              Materi &amp; Simulasi Algoritma Page Replacement
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Platform interaktif untuk memahami dan mempraktikkan algoritma
              page replacement dalam sistem operasi. Pelajari konsep dasar,
              bandingkan algoritma, dan uji pemahaman Anda melalui simulasi
              interaktif.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/materi"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20 whitespace-nowrap"
              >
                Mulai Belajar Materi
              </a>
              <a
                href="/simulasi"
                className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity shadow-lg shadow-green-500/20 whitespace-nowrap"
              >
                Coba Simulasi
              </a>
            </div>
          </div>
        </div>

        {/* Algoritma Section */}
        <div className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              <span className="text-blue-600">Penjelasan Algoritma</span>
              <div className="absolute w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 left-1/2 -translate-x-1/2 bottom-0 mt-4"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* FIFO Card */}
              <div className="card-custom p-6 rounded-xl shadow-lg bg-white/90 backdrop-blur-lg border border-white/50 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-16 h-16 flex items-center justify-center algorithm-icon rounded-full mx-auto mb-6 shadow-inner bg-blue-100">
                  {/* Icon FIFO */}
                  <span className="text-blue-600 text-4xl">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M3 12h18M6 9l-3 3 3 3M18 15l3-3-3-3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 gradient-text">
                  FIFO
                </h3>
                <p className="text-gray-600 text-center">
                  Algoritma mengganti halaman yang paling awal dimasukkan ke
                  memori. Prinsip &quot;pertama masuk, pertama keluar&quot;
                  diterapkan untuk manajemen frame memori.
                </p>
              </div>
              {/* LRU Card */}
              <div className="card-custom p-6 rounded-xl shadow-lg bg-white/90 backdrop-blur-lg border border-white/50 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-16 h-16 flex items-center justify-center algorithm-icon rounded-full mx-auto mb-6 shadow-inner bg-green-100">
                  {/* Icon LRU */}
                  <span className="text-green-600 text-4xl">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M12 6v6l4 2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 gradient-text">
                  LRU
                </h3>
                <p className="text-gray-600 text-center">
                  Mengganti halaman yang paling lama tidak digunakan. Algoritma
                  ini melacak waktu penggunaan terakhir dari setiap halaman
                  untuk mengoptimalkan performa.
                </p>
              </div>
              {/* Optimal Card */}
              <div className="card-custom p-6 rounded-xl shadow-lg bg-white/90 backdrop-blur-lg border border-white/50 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="w-16 h-16 flex items-center justify-center algorithm-icon rounded-full mx-auto mb-6 shadow-inner bg-purple-100">
                  {/* Icon Optimal */}
                  <span className="text-purple-600 text-4xl">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 gradient-text">
                  Optimal
                </h3>
                <p className="text-gray-600 text-center">
                  Mengganti halaman yang tidak akan digunakan dalam waktu
                  terlama ke depan. Algoritma teoritis ini memberikan performa
                  terbaik namun sulit diimplementasikan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ilustrasi Visual Section */}
        <div className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/30 pointer-events-none"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="container mx-auto max-w-4xl relative">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-blue-600 inline-block transform hover:scale-105 transition-transform duration-300">
                Ilustrasi Visual
              </span>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="card-custom rounded-xl shadow-xl p-6 bg-white/90 backdrop-blur-lg transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-video rounded-lg mb-6 relative overflow-hidden group">
                  <Image
                    src="/ilustrasi1.jpg"
                    alt="Memory Management Animation"
                    fill
                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      Visualisasi Proses Page Replacement
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500">
                  Visualisasi Interaktif
                </h3>
                <p className="text-gray-600">
                  Visualisasi dinamis membantu menggambarkan proses page
                  replacement secara real-time, membuat konsep abstrak menjadi
                  lebih konkret dan mudah dipahami.
                </p>
              </div>
              <div className="card-custom rounded-xl shadow-xl p-6 bg-white/90 backdrop-blur-lg transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-video rounded-lg mb-6 relative overflow-hidden group">
                  <Image
                    src="/ilustrasi2.jpg"
                    alt="Performance Analysis"
                    fill
                    className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">
                      Grafik Analisis Real-time
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-500">
                  Analisis Performa
                </h3>
                <p className="text-gray-600">
                  Bandingkan kinerja berbagai algoritma melalui grafik dan
                  statistik yang informatif, memudahkan pemahaman efisiensi
                  setiap metode.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tujuan Aplikasi Section */}
        <div className="py-20 px-4 relative bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0zM4 4h4v4H4V4zm8 0h4v4h-4V4zm8 0h4v4h-4V4zM0 8h4v4H0V8zm8 0h4v4H8V8zm8 0h4v4h-4V8zM4 12h4v4H4v-4zm8 0h4v4h-4v-4zm8 0h4v4h-4v-4zM0 16h4v4H0v-4zm8 0h4v4H8v-4zm8 0h4v4h-4v-4z' fill='%232563EB' fill-opacity='.05'/%3E%3C/svg%3E")`,
            }}
          ></div>
          <div className="container mx-auto max-w-4xl relative">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-blue-600 inline-block transform hover:scale-105 transition-transform duration-300">
                Tujuan Aplikasi
              </span>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card rounded-xl shadow-xl hover:shadow-sm hover:shadow-blue-400 p-8 bg-white/90 backdrop-blur-lg border-t-4 border-x-1  border-blue-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 mx-auto">
                  <BookOpen size={40} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-500 text-center">
                  Pembelajaran Interaktif
                </h3>
                <p className="text-gray-600">
                  Aplikasi ini dirancang untuk membantu mahasiswa memahami
                  konsep page replacement melalui pendekatan hands-on dan
                  visualisasi interaktif. Pengguna dapat bereksperimen dengan
                  berbagai skenario untuk memperdalam pemahaman mereka.
                </p>
              </div>
              <div className="card rounded-xl shadow-xl hover:shadow-sm hover:shadow-green-400 p-8 bg-white/90 backdrop-blur-lg border-t-4 border-x-1 border-green-500 transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 mx-auto">
                  <Wrench size={40} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-500 text-center">
                  Analisis &amp; Perbandingan
                </h3>
                <p className="text-gray-600">
                  Sosims memungkinkan pengguna menganalisis dan membandingkan
                  kinerja algoritma FIFO, LRU, dan Optimal dalam berbagai
                  skenario, membantu memahami trade-off dalam desain sistem
                  operasi modern.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <p className="text-gray-600 text-center text-sm">
              © 2025 Simulasi Page Replacement – Sosims
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
