import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Ramko Associates – Rooftop Solar",
  description: "Rooftop Solar EPC Company in Maharashtra"
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
