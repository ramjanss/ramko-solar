"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-sky-600">
          Ramko Associates
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-sky-600">Home</Link>
          <Link href="/3kw" className="hover:text-sky-600">3kW</Link>
          <Link href="/5kw" className="hover:text-sky-600">5kW</Link>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600"
          >
            Get Quote
          </a>
        </nav>

      </div>
    </header>
  );
}
