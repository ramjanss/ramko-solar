"use client";

export default function Home() {
  const whatsappNumber = "917620209899"; // <-- put your WhatsApp number (no +)

  const handleQuote = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const city = e.target.city.value;

    const msg =
      `Hello Ramko Associates,%0A%0A` +
      `Name: ${name}%0A` +
      `Mobile: ${phone}%0A` +
      `City: ${city}%0A%0A` +
      `I want a free solar quote.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Go Solar. Save Big on Electricity Bills.
            </h1>
            <p className="text-lg mb-6">
              Complete Rooftop Solar Solutions with Installation Across Maharashtra
            </p>
            <ul className="space-y-2 text-sm">
              <li>✔ Government Approved EPC</li>
              <li>✔ Trusted Brand Partners</li>
              <li>✔ End-to-End Installation</li>
            </ul>
          </div>

          {/* QUOTE FORM */}
          <div className="bg-white text-slate-900 rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Get Free Solar Quote</h3>
            <form onSubmit={handleQuote} className="space-y-4">
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                name="phone"
                required
                placeholder="Mobile Number"
                className="w-full border rounded-lg p-3"
              />
              <input
                name="city"
                required
                placeholder="City"
                className="w-full border rounded-lg p-3"
              />
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold"
              >
                Get Free Solar Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="text-2xl font-bold text-sky-500">10+</div>
          <p>Years Experience</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="text-2xl font-bold text-sky-500">500+</div>
          <p>Installations</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="text-2xl font-bold text-sky-500">Govt.</div>
          <p>Approved EPC</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="text-2xl font-bold text-sky-500">Top</div>
          <p>Brand Partners</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Rooftop Solar Systems
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">3 kW On-Grid Solar</h3>
            <p className="mb-4">Ideal for small homes</p>
            <p className="text-2xl font-bold text-sky-500 mb-4">₹1,99,000</p>
            <a href="/3kw" className="inline-block bg-sky-500 text-white px-6 py-2 rounded-lg">
              View Details
            </a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">5 kW On-Grid Solar</h3>
            <p className="mb-4">Ideal for large homes</p>
            <p className="text-2xl font-bold text-sky-500 mb-4">₹3,30,000</p>
            <a href="/5kw" className="inline-block bg-sky-500 text-white px-6 py-2 rounded-lg">
              View Details
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Ramko Associates</p>
        <p>Rooftop Solar EPC Company – Maharashtra</p>
      </footer>

    </main>
  );
}
