export const dynamic = "force-dynamic";
export default function FiveKW() {
  return (
    <main className="bg-slate-50">

      <section className="bg-sky-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">5 kW Rooftop Solar System</h1>
          <p className="text-lg">
            Ideal for large homes • High power generation & savings
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">System Details</h2>
          <ul className="space-y-2">
            <li>✔ Average generation: ~20 units/day</li>
            <li>✔ Suitable for 3–4 BHK homes</li>
            <li>✔ Supports AC, washing machine, EV</li>
            <li>✔ Net-meter enabled system</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Price</h3>
          <p className="text-3xl font-bold text-sky-500 mb-4">₹3,30,000</p>
          <p className="text-sm mb-6">Including material & installation</p>
          <a
            href="https://wa.me/917620209899"
            target="_blank"
            className="block text-center bg-sky-500 text-white py-3 rounded-lg font-semibold"
          >
            Get Free Solar Quote
          </a>
        </div>
      </section>

    </main>
  );
}
