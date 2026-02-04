export const metadata = {
  title: "Ramko Associates – Rooftop Solar",
  description: "Rooftop Solar EPC Company in Maharashtra"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

