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

      {/* SAVINGS CALCULATOR */}
<section className="bg-white py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Calculate Your Solar Savings
    </h2>
    <p className="text-slate-600 mb-8">
      Enter your electricity bill to see how much you can save with solar
    </p>

    <div className="bg-slate-50 p-8 rounded-xl shadow max-w-xl mx-auto">
      <input
        type="number"
        placeholder="Monthly Electricity Bill (₹)"
        className="w-full border p-3 rounded mb-6"
        onChange={(e) => {
          const bill = Number(e.target.value || 0);
          document.getElementById("monthly").innerText =
            bill ? `₹${Math.round(bill * 0.9)}` : "—";
          document.getElementById("yearly").innerText =
            bill ? `₹${Math.round(bill * 0.9 * 12)}` : "—";
        }}
      />

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-slate-500">Monthly Savings</p>
          <p id="monthly" className="text-xl font-bold text-sky-500">—</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-slate-500">Yearly Savings</p>
          <p id="yearly" className="text-xl font-bold text-sky-500">—</p>
        </div>
      </div>

      <a
        href="https://wa.me/917620209899"
        target="_blank"
        className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600"
      >
        Get Free Solar Quote
      </a>
    </div>
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
