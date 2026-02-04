"use client";

export default function Home() {
  const whatsappNumber = "917620209899";

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
      `I want a free rooftop solar quote.`;

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-slate-50 text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
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

          {/* FORM */}
          <form
            onSubmit={handleQuote}
            className="bg-white text-slate-900 p-6 rounded-xl shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-4">
              Get Free Solar Quote
            </h3>
            <input
              name="name"
              required
              placeholder="Your Name"
              className="w-full border p-3 rounded mb-3"
            />
            <input
              name="phone"
              required
              placeholder="Mobile Number"
              className="w-full border p-3 rounded mb-3"
            />
            <input
              name="city"
              required
              placeholder="City"
              className="w-full border p-3 rounded mb-4"
            />
            <button className="w-full bg-sky-500 text-white py-3 rounded font-semibold">
              Get Free Solar Quote
            </button>
          </form>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-xl shadow">10+ Years Experience</div>
        <div className="bg-white p-6 rounded-xl shadow">500+ Installations</div>
        <div className="bg-white p-6 rounded-xl shadow">Govt Approved EPC</div>
        <div className="bg-white p-6 rounded-xl shadow">Top Brand Partners</div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Calculate Your Solar Savings
          </h2>
          <input
            type="number"
            placeholder="Monthly Electricity Bill (₹)"
            className="w-full border p-3 rounded"
            onChange={(e) => {
              const bill = Number(e.target.value || 0);
              document.getElementById("saving").innerText =
                bill ? `₹${Math.round(bill * 0.9)}` : "₹0";
            }}
          />
          <p
            id="saving"
            className="mt-4 text-2xl font-bold text-sky-500"
          >
            ₹0
          </p>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded shadow">1. Free Consultation</div>
          <div className="bg-white p-6 rounded shadow">2. Site Survey</div>
          <div className="bg-white p-6 rounded shadow">3. Installation</div>
          <div className="bg-white p-6 rounded shadow">4. Start Saving</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <a href="/3kw" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">3 kW Solar System</h3>
          <p className="text-sky-500 font-bold">₹1,99,000</p>
        </a>
        <a href="/5kw" className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">5 kW Solar System</h3>
          <p className="text-sky-500 font-bold">₹3,30,000</p>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p className="font-semibold">Ramko Associates</p>
        <p>Rooftop Solar EPC Company – Maharashtra</p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </footer>

    </main>
  );
}
