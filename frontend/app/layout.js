"use client";

import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Ramko Associates | Rooftop Solar EPC in Maharashtra",
  description:
    "Ramko Associates provides rooftop solar installation in Maharashtra. 3kW & 5kW on-grid solar systems with complete EPC and installation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
