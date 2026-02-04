export default function Contact() {
  return (
    <main className="bg-slate-50">

      <section className="bg-sky-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Get in touch with Ramko Associates for rooftop solar solutions
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <p className="mb-2">📍 Ramko Associates, MIDC Road, Datala, Chandrapur, Maharashtra, India</p>
          <p className="mb-2">📞 WhatsApp Support Available</p>
          <p className="mb-6">🕘 Mon – Sat: 11 AM – 6 PM</p>

          <a
            href="https://wa.me/917620209899"
            target="_blank"
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Service Area</h3>
          <p className="text-slate-600">
            We provide rooftop solar installation services across
            Maharashtra for residential and small commercial buildings.
          </p>
        </div>
      </section>

    </main>
  );
}
