import React, { useEffect } from "react";


export default function SolonLandingPage() {
  useEffect(() => {
  const twitterEmbedExists = document.querySelector("script[src='https://platform.twitter.com/widgets.js']");
  if (!twitterEmbedExists) {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("async", "true");
    script.setAttribute("charset", "utf-8");
    document.body.appendChild(script);
  } else {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }
}, []);


  return (
    <main className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          SOLON ERP: Legal Practice, Smarter.
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-6">
          ERP khusus untuk Notaris & PPAT. Sederhanakan dokumen, klien, dan proses hukum Anda.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300">
            Download Booklet
          </button>
          <a href="https://wa.me/yourwhatsapplink" className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600">
            Hubungi via WhatsApp
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur & Keunggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="font-semibold text-xl mb-2">Manajemen Klien</h3>
            <p>Kelola data klien dengan rapi dan efisien untuk semua kasus hukum Anda.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Otomatisasi Dokumen</h3>
            <p>Template dan pengisian otomatis untuk akta, perjanjian, dan lebih banyak lagi.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Tanda Tangan Digital</h3>
            <p>Integrasi dengan penyedia e-sign untuk proses cepat dan sah.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-2">Mengapa Notaris & PPAT Memilih SOLON?</h2>
        <p className="text-center text-sm text-gray-500 mb-8">Dipercaya oleh praktisi hukum modern di seluruh Indonesia</p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden relative">
              <img src={`/images/testimoni-placeholder${index}.jpg`} alt={`Client ${index}`} className="w-full h-60 object-cover" />
              <div className="p-4">
                <p className="text-sm italic mb-2">
                  “Testimoni dari klien placeholder. Nanti diganti dengan teks dari gambar ekspor Anda.”
                </p>
                <p className="text-sm font-semibold">Nama Klien, Posisi - Kota</p>
              </div>
              <div className="absolute top-4 left-4 bg-white px-2 py-1 text-xs font-semibold rounded">Logo Perusahaan</div>
            </div>
          ))}
        </div>
      </section>

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
          {/* Other pricing tiers omitted for brevity */}
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-20 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Unduh Booklet Kami</h2>
        <p className="text-center mb-6 max-w-xl mx-auto">Isi formulir di bawah ini untuk menerima booklet berisi fitur lengkap, manfaat, dan studi kasus dari penggunaan SOLON ERP.</p>
        <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Nama Lengkap" className="border p-3 rounded" />
            <input type="email" placeholder="Email" className="border p-3 rounded" />
            <input type="text" placeholder="Profesi (Notaris / PPAT / dll)" className="border p-3 rounded" />
            <input type="text" placeholder="Kota / Wilayah" className="border p-3 rounded" />
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-full mt-4">Kirim & Unduh Booklet</button>
          </div>
        </form>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan yang Sering Diajukan</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="font-semibold text-xl">Apakah SOLON ERP aman digunakan?</h3>
            <p>Ya. Data Anda dilindungi dengan enkripsi dan penyimpanan cloud yang aman.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Apakah harus instal software?</h3>
            <p>Tidak. SOLON ERP berbasis web dan bisa diakses dari browser.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Bisakah digunakan di HP?</h3>
            <p>Ya, antarmuka SOLON ERP responsif dan mendukung perangkat mobile.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Bagaimana cara berlangganan?</h3>
            <p>Anda bisa mulai dari formulir di atas atau menghubungi kami lewat WhatsApp.</p>
          </div>
        </div>
      </section>

          {/* Twitter Feed Section */}
        <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">Dari X / Twitter Kami</h2>
        <div className="max-w-3xl mx-auto text-center">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="5"
          href="https://twitter.com/elonmusk"
          key={new Date().getTime()}
           >
          Tweets by @elonmusk
          </a>
      </div>

      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Produk</h4>
            <ul>
              <li>Fitur</li>
              <li>Keamanan</li>
              <li>Integrasi</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Perusahaan</h4>
            <ul>
              <li>Tentang Kami</li>
              <li>Kontak</li>
              <li>Karier</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Sumber Daya</h4>
            <ul>
              <li>Pricing</li>
              <li>Dokumentasi</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Ikuti Kami</h4>
            <ul>
              <li><a href="https://x.com/stevebenedict" className="underline">X / Twitter</a></li>
              <li><a href="#" className="underline">LinkedIn</a></li>
              <li><a href="#" className="underline">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-12">
          &copy; {new Date().getFullYear()} SOLON ERP. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
