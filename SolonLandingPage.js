
import React from "react";

export default function SolonLandingPage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero Section */}
      {/* ...Hero Section... */}

      {/* Features Section */}
      {/* ...Features Section... */}

      {/* Testimonials Section */}
      {/* ...Testimonials Section... */}

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-4">Flexible plans for smarter returns</h2>
        <p className="text-center mb-8 text-gray-600">Choose the plan that fits you the best.</p>
        <div className="text-center mb-8">
          <button className="bg-black text-white px-4 py-1 rounded-full mr-2">Yearly</button>
          <button className="border border-black text-black px-4 py-1 rounded-full">Monthly</button>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Starter */}
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

          {/* Growth */}
          <div className="border rounded-lg p-6 text-left shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-2xl font-bold">IDR 499rb<span className="text-sm font-medium">/bulan</span></p>
            <p className="text-sm text-gray-600 mb-4">Termasuk 500 dokumen per bulan</p>
            <button className="bg-black text-white w-full py-2 mb-2 rounded-full">Book a demo</button>
            <button className="border w-full py-2 rounded-full">Install App</button>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Portal Branding</li>
              <li>✅ Multi-User (3 pengguna)</li>
              <li>✅ Analitik Dokumen</li>
              <li>✅ Integrasi API Dasar</li>
              <li>✅ Onboarding & Email Support</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="border rounded-lg p-6 text-left shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-2xl font-bold">IDR 999rb<span className="text-sm font-medium">/bulan</span></p>
            <p className="text-sm text-gray-600 mb-4">Dokumen tanpa batas</p>
            <button className="bg-black text-white w-full py-2 mb-2 rounded-full">Get Started Now</button>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Semua Fitur Growth</li>
              <li>✅ Integrasi Custom</li>
              <li>✅ Laporan Kustom</li>
              <li>✅ SLA & Prioritas Support</li>
              <li>✅ Customer Success Manager</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="border rounded-lg p-6 text-left shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-2xl font-bold">Custom</p>
            <p className="text-sm text-gray-600 mb-4">Untuk kebutuhan skala besar</p>
            <button className="bg-black text-white w-full py-2 mb-2 rounded-full">Talk to Sales</button>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Portal White Label</li>
              <li>✅ Integrasi Khusus & Keamanan</li>
              <li>✅ Laporan Ekstra & Monitoring</li>
              <li>✅ Review Kinerja Bulanan</li>
              <li>✅ Tim Dukungan Khusus</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      {/* ...Lead Capture Section... */}

      {/* FAQ Section */}
      {/* ...FAQ Section... */}

      {/* Twitter Feed Section */}
      {/* ...Twitter Feed Section... */}

      {/* Footer */}
      {/* ...Footer... */}

    </main>
  );
}
