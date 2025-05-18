"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Materi", href: "/materi" },
    { name: "Simulasi", href: "/simulasi" },
  ];

  return (
    <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        <h1 className="text-2xl font-bold text-blue-600">Sosims</h1>
      </Link>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`px-3 py-2 rounded-md text-md font-medium transition ${
                pathname === item.href
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-500"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
