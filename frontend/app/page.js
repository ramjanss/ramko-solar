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
{/* SAVINGS CALCULATOR */}
<section className="bg-white py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      Calculate Your Solar Savings
    </h2>
    <p className="mb-10 text-slate-600">
      See how much you can save every month by switching to rooftop solar
    </p>

    <div className="bg-slate-50 p-8 rounded-xl shadow max-w-xl mx-auto">
      <label className="block text-left font-medium mb-2">
        Your Monthly Electricity Bill (₹)
      </label>

      <input
        id="bill"
        type="number"
        placeholder="Example: 3000"
        className="w-full border rounded-lg p-3 mb-4"
        onChange={(e) => {
          const bill = Number(e.target.value);
          const savings = Math.round(bill * 0.9);
          const yearly = savings * 12;

          document.getElementById("monthlySaving").innerText =
            bill ? `₹${savings}` : "—";
          document.getElementById("yearlySaving").innerText =
            bill ? `₹${yearly}` : "—";
        }}
      />

      <div className="grid grid-cols-2 gap-4 text-left mt-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-slate-500">Estimated Monthly Savings</p>
          <p
            id="monthlySaving"
            className="text-xl font-bold text-sky-500"
          >
            —
          </p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-slate-500">Estimated Yearly Savings</p>
          <p
            id="yearlySaving"
            className="text-xl font-bold text-sky-500"
          >
            —
          </p>
        </div>
      </div>
    </div>
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
{/* INSTALLATION PROCESS */}
<section className="bg-slate-100 py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      Our Solar Installation Process
    </h2>

    <div className="grid md:grid-cols-4 gap-6 text-center">
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-sky-500 text-2xl font-bold mb-2">1</div>
        <h3 className="font-semibold mb-2">Free Consultation</h3>
        <p className="text-sm text-slate-600">
          Share your details and electricity bill
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-sky-500 text-2xl font-bold mb-2">2</div>
        <h3 className="font-semibold mb-2">Site Survey</h3>
        <p className="text-sm text-slate-600">
          Our experts assess your rooftop
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-sky-500 text-2xl font-bold mb-2">3</div>
        <h3 className="font-semibold mb-2">Installation</h3>
        <p className="text-sm text-slate-600">
          Professional installation & approvals
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-sky-500 text-2xl font-bold mb-2">4</div>
        <h3 className="font-semibold mb-2">Start Saving</h3>
        <p className="text-sm text-slate-600">
          Enjoy clean energy & lower bills
        </p>
      </div>
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
