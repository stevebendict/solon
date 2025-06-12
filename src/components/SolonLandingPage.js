
import React from "react";

export default function SolonLandingPage() {
  return (
    <main className="font-sans text-gray-800">
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Flexible plans for smarter returns</h2>
        <p className="text-center mb-8 text-gray-600">Choose the plan that fits you the best.</p>
        <div className="text-center mb-8">
          <button className="bg-black text-white px-4 py-1 rounded-full mr-2">Yearly</button>
          <button className="border border-black text-black px-4 py-1 rounded-full">Monthly</button>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border rounded-lg p-6 text-left shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-2xl font-bold">IDR 199rb<span className="text-sm font-medium">/bulan</span></p>
            <p className="text-sm text-gray-600 mb-4">Termasuk 100 dokumen per bulan</p>
            <button className="bg-black text-white w-full py-2 mb-2 rounded-full">Book a demo</button>
            <button className="border w-full py-2 rounded-full">Install App</button>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Portal Klien</li>
              <li>✅ Tanda Tangan Digital</li>
              <li>✅ 1 Pengguna</li>
              <li>✅ Integrasi Dasar</li>
              <li>✅ Support via Email</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
