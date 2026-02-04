"use client";

export default function Home() {
  const whatsappNumber = "917620209899"; // replace

  const handleQuote = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const city = e.target.city.value;

    const msg =
      `Hello Ramko Associates,%0A` +
      `Name: ${name}%0A` +
      `Mobile: ${phone}%0A` +
      `City: ${city}%0A%0A` +
      `I want a free solar quote`;

    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Go Solar. Save Big on Electricity Bills.
            </h1>
            <p className="mb-6">
              Complete Rooftop Solar Solutions with Installation Across Maharashtra
            </p>
          </div>

          <form onSubmit={handleQuote} className="bg-white text-black p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">Get Free Solar Quote</h3>
            <input name="name" required placeholder="Name" className="w-full border p-3 mb-3 rounded" />
            <input name="phone" required placeholder="Mobile" className="w-full border p-3 mb-3 rounded" />
            <input name="city" required placeholder="City" className="w-full border p-3 mb-4 rounded" />
            <button className="w-full bg-sky-500 text-white py-3 rounded font-semibold">
              Get Free Solar Quote
            </button>
          </form>
        </div>
      </section>

      {/* TRUST */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded shadow">10+ Years Experience</div>
        <div className="bg-white p-6 rounded shadow">500+ Installations</div>
        <div className="bg-white p-6 rounded shadow">Govt Approved EPC</div>
        <div className="bg-white p-6 rounded shadow">Top Brands</div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-white py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Calculate Your Solar Savings</h2>
          <input
            type="number"
            placeholder="Monthly Bill ₹"
            className="w-full border p-3 rounded"
            onChange={(e) => {
              const bill = Number(e.target.value || 0);
              document.getElementById("save").innerText = `₹${Math.round(bill * 0.9)}`;
            }}
          />
          <p className="mt-4 text-xl font-bold text-sky-500" id="save">₹0</p>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded shadow">1. Consultation</div>
          <div className="bg-white p-6 rounded shadow">2. Site Survey</div>
          <div className="bg-white p-6 rounded shadow">3. Installation</div>
          <div className="bg-white p-6 rounded shadow">4. Start Saving</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <a href="/3kw" className="bg-white p-6 rounded shadow">3 kW – ₹1,99,000</a>
        <a href="/5kw" className="bg-white p-6 rounded shadow">5 kW – ₹3,30,000</a>
      </section>

    </main>
  );
}
