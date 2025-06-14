import React, { useState } from "react";


export default function SolonLandingPage() {

 const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppLink = () => {
    const base = "https://wa.me/6285736212190";
    const text = `Halo, saya ${form.name} (${form.email}). Saya ingin mencoba demo SOLON.\n${form.message}`;
    return `${base}?text=${encodeURIComponent(text)}`;
  };
  
  return (
    <main className="font-sans text-gray-800">

     {/* Sticky Header Logo */}
<header className="sticky top-0 z-50 bg-black text-center py-4">
  <img src="/images/logo.png" alt="Solon Logo" className="mx-auto h-8 sm:h-10" />
</header>



      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/hero-background.png"
    alt="Hero Background"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />

  {/* Overlay kiri ke kanan */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

  {/* Text Content */}
  <div className="relative z-20 flex items-center h-full max-w-6xl mx-auto px-4 sm:px-6">
  <div className="text-white w-full sm:max-w-xl space-y-6 text-center sm:text-left">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Sistem ERP Inklusif untuk Notaris & PPAT Modern
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8">
        SOLON menyederhanakan pengelolaan dokumen hukum Anda, dengan teknologi terintegrasi dan automasi pintar.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="#download"
          className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition"
        >
          Download Booklet
        </a>
        <a
          href="#demo"
          className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          Lihat Demo
        </a>
      </div>
    </div>
  </div>
</section>


         {/* Features Section */}
      <section
       id="feature"
        className="py-20 px-4 bg-white scroll-mt-20 sm:scroll-mt-16">
        <h2 className="text-3xl font-bold text-left max-w-6xl mx-auto mb-12">Features & Performance</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-200">
          {/* Tile 1 */}
          <div className="bg-white p-6 flex flex-col justify-between mb-4 border-t border-l border-gray-200
">
            <div>
              <h3 className="font-semibold text-base mb-1">API-first integration</h3>
              <p className="text-sm text-gray-600">Mendukung integrasi sistem melalui arsitektur API-first yang memungkinkan pertukaran data secara langsung antara SOLON ERP dengan sistem eksternal, seperti e-Filing, sistem bank, maupun platform dokumen resmi.</p>
            </div>
          </div>

          {/* Tile 2 */}
          <div className="bg-white p-6 border-t border-l border-gray-200
">
            <h3 className="font-semibold text-base mb-1">Contextual Role Assignment</h3>
            <p className="text-sm text-gray-600">Sistem penugasan berbasis peran yang dipicu oleh kondisi tertentu, disertai dengan notifikasi instan ke kanal seperti WhatsApp atau email internal.</p>
          </div>

          {/* Tile 3 (image button-style) */}
          <div className="bg-white p-6 flex items-center justify-center border-t border-l border-gray-200
">
            <img src="/images/element/fitur3.png" alt="Multilang UI" className="w-full max-w-xs h-auto object-contain mx-auto" />
          </div>

          {/* Tile 4 (image left) */}
          <div className="bg-white p-6 flex items-center justify-center border-t border-l border-gray-200
">
            <img src="/images/element/fitur4.png" alt="Flow chart" className="w-full max-w-xs h-auto object-contain mx-auto" />
          </div>

          {/* Tile 5 (big tile) */}
          <div className="bg-white p-8 md:col-span-2 border-t border-l border-gray-200">

            <h3 className="text-2xl font-bold mb-2">Best-in-Class Legal ERP</h3>
            <p className="text-gray-700 mb-4">SOLON ERP dirancang khusus untuk mencerminkan alur kerja aktual kantor notaris dan PPAT, dengan struktur end-to-end mulai dari input data hingga pencetakan invoice. Dukungan penuh terhadap audit trail dan notifikasi lintas platform menjadikan proses hukum lebih transparan, cepat, dan akurat.</p>
            <div className="text-sm text-gray-500 space-x-2">
              <span>ERP</span>
              <span>&gt;</span>
              <span>POS</span>
              <span>&gt;</span>
              <span>HRIS</span>
              <span>&gt;</span>
              <span>CROM</span>
            </div>
          </div>

          {/* Tile 6 */}
          <div className="bg-white p-6 border-t border-l border-gray-200
">
            <h3 className="font-semibold text-base mb-1">Live Document Sync</h3>
            <p className="text-sm text-gray-600">Setiap pembaruan status dokumen dan transaksi langsung tersinkronisasi secara real-time di seluruh pengguna sistem.</p>
          </div>

          {/* Tile 7 (gauge image) */}
          <div className="bg-white p-6 flex items-center justify-center border-t border-l border-gray-200
">
            <img src="/images/element/fitur7.png" alt="Gauge graph" className="w-full max-w-xs h-auto object-contain mx-auto" />
          </div>

          {/* Tile 8 */}
          <div className="bg-white p-6 border-t border-l border-gray-200
">
            <h3 className="font-semibold text-base mb-1">Smart Billing & Refund System</h3>
            <p className="text-sm text-gray-600">SOLON secara otomatis menghasilkan invoice berdasarkan transaksi valid, dan menghitung kelebihan pembayaran jika ditemukan selisih antara estimasi dan realisasi biaya.</p>
          </div>

          {/* Tile 9 */}
          <div className="bg-white p-6 border-t border-l border-gray-200
">
            <h3 className="font-semibold text-base mb-1">Cloud-Native Performance Core</h3>
            <p className="text-sm text-gray-600">SOLON dibangun menggunakan arsitektur cloud-native yang memungkinkan pemrosesan cepat dan stabil, bahkan saat volume transaksi tinggi.</p>
            <p className="text-sm font-medium text-black mt-2">Dedicated or shared resources →</p>
          </div>

          {/* Tile 10 */}
          <div className="bg-white p-6 border-t border-l border-gray-200
">
            <h3 className="font-semibold text-base mb-1">Encrypted Legal Archive</h3>
            <p className="text-sm text-gray-600">Sistem penyimpanan dokumen hukum berbasis enkripsi dan dilengkapi dengan mekanisme backup otomatis.</p>
          </div>

          {/* Tile 11 */}
          <div className="bg-white p-6 border-t border-l border-gray-200
">
            <h3 className="font-semibold text-base mb-1">Real-Time Collaborative Framework</h3>
            <p className="text-sm text-gray-600">Arsitektur kolaboratif yang memungkinkan seluruh pengguna sistem bekerja secara simultan tanpa konflik status atau data.</p>
          </div>
        </div>
      </section>


         {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white ">
        <h2 className="text-3xl font-bold text-center mb-10">Dipercaya oleh Praktisi PPAT & Notaris</h2>
        <div className="max-w-6xl mx-auto flex overflow-x-auto snap-x snap-mandatory space-x-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:space-x-0">


          {[
            {
              image: "/images/testimonials/client1.jpg",
              logo: "/images/testimonials/logo1.png",
              quote: "SOLON ERP membantu kami mengelola dokumen notaris secara efisien. Praktis dan sangat intuitif.",
              name: "Andi Santoso",
              title: "PPAT Jakarta Selatan"
            },
            {
              image: "/images/testimonials/client2.jpg",
              logo: "/images/testimonials/logo2.png",
              quote: "Dengan SOLON, pengurusan dokumen jadi transparan dan cepat. Klien saya sangat puas.",
              name: "Sari Wulandari",
              title: "Notaris Bandung"
            },
            {
              image: "/images/testimonials/client3.jpg",
              logo: "/images/testimonials/logo3.png",
              quote: "Antarmuka yang sederhana tapi powerful. Fitur e-signature-nya top.",
              name: "Taufik Hidayat",
              title: "PPAT Surabaya"
            },
            {
              image: "/images/testimonials/client4.jpg",
              logo: "/images/testimonials/logo4.png",
              quote: "SOLON menyederhanakan pekerjaan kami. Sangat membantu dalam audit internal dan eksternal.",
              name: "Nina Kusuma",
              title: "Notaris & PPAT Tangerang"
            }
          ].map((testimonial, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden shadow-md min-w-[280px] snap-start md:min-w-0">
              <img src={testimonial.image} alt={`Client ${i + 1}`} className="w-full h-64 sm:h-80 object-cover" />
              <img src={testimonial.logo} alt="Company Logo" className="absolute top-4 left-4 h-6" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 text-sm">
                <p className="italic mb-2">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-xs text-gray-300">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


     
     {/* Pricing Section */}
      <section
       id="pricing"
        className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Paket Berlangganan</h2>
          <div className="flex flex-row overflow-x-auto space-x-6 snap-x snap-mandatory px-4 md:grid md:grid-cols-3 md:gap-6 md:space-x-0">


            {/* Starter Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col snap-start min-w-[280px] md:min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Starter</h3>
              <p className="text-gray-500 mb-4">Cocok untuk notaris atau PPAT individual yang baru memulai digitalisasi.</p>
              <div className="text-2xl sm:text-3xl font-bold mb-2">IDR 3.999rb</div>
              <p className="text-sm text-gray-400 mb-6">per bulan</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>✔️ 1 pengguna</li>
                <li>✔️ Portal klien & tanda tangan digital</li>
                <li>✔️ Template dokumen dasar</li>
                <li>✔️ Export PDF & arsip digital</li>
              </ul>
              <button className="mt-auto bg-black text-white py-3 px-6 rounded-lg text-sm sm:text-base hover:bg-gray-800">Mulai Sekarang</button>

            </div>

            {/* Pro/Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col snap-start min-w-[280px] md:min-w-0 border-2 border-black">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-500 mb-4">Solusi lengkap untuk kantor PPAT/Notaris berkapasitas tinggi & tim besar.</p>
              <div className="text-2xl sm:text-3xl font-bold mb-2">IDR 8.999rb</div>
              <p className="text-sm text-gray-400 mb-6">per bulan</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>✔️ Hingga 10 pengguna</li>
                <li>✔️ Automasi akta & pelaporan</li>
                <li>✔️ Backup harian & dashboard tim</li>
                <li>✔️ Integrasi WhatsApp & Email</li>
              </ul>
              <button className="mt-auto bg-black text-white py-3 px-6 rounded-lg text-sm sm:text-base hover:bg-gray-800">Mulai Sekarang</button>

             </div>

            {/* Custom Plan */}
            <div className="bg-white p-8 rounded-xl shadow-md flex flex-col snap-start min-w-[280px] md:min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Custom</h3>
              <p className="text-gray-500 mb-4">Untuk instansi hukum atau B2B dengan kebutuhan kustomisasi khusus.</p>
              <div className="text-2xl sm:text-3xl font-bold mb-2">Hubungi Kami</div>
              <p className="text-sm text-gray-400 mb-6">Paket fleksibel sesuai kebutuhan</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>✔️ White-label portal</li>
                <li>✔️ Integrasi sistem internal</li>
                <li>✔️ SLA dan dukungan prioritas</li>
                <li>✔️ Fitur eksklusif sesuai proyek</li>
              </ul>
              <button className="mt-auto bg-black text-white py-3 px-6 rounded-lg text-sm sm:text-base hover:bg-gray-800">Hubungi Tim Kami</button>
            </div>

          </div>
        </div>
      </section>

            {/* Lead Capture Section */}
      <section 
       id="demo"
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/section-demo-bg.jpg')" }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-10 items-center space-y-8 md:space-y-0">


          {/* CTA Area */}
          <div className="text-white order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4">Coba Solon Sekarang</h2>
            <p className="text-lg text-white/90 mb-6">
              SOLON ERP dirancang khusus untuk Notaris & PPAT. Dapatkan demo interaktif tanpa biaya sekarang.
            </p>
          </div>

          {/* Form Card */}
         <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl w-full md:max-w-md order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Coba Demo Sekarang</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Alamat Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritakan kebutuhan Anda (opsional)"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black"
                rows={4}
              />
              <div className="text-center">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900"
                >
                  Kirim via WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>


    {/* CTA to WhatsApp Section (FAQ Replacement) */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <a
            href="https://wa.me/6285736212190"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex flex-col md:flex-row items-center justify-between gap-6 bg-black rounded-xl px-10 py-12 text-white hover:bg-gray-800 transition"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Punya pertanyaan lain seputar Solon? Tim support kami siap membantu.
              </h3>
            </div>
            <div className="text-4xl">➜</div>
          </a>
        </div>
      </section>


  

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-center md:text-left">
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

     {/* Mobile App-Style Dock Navigation */}
<nav className="fixed bottom-5 left-1/2 -translate-x-1/2 transform bg-black/50 backdrop-blur-xl rounded-full px-6 py-3 flex justify-center items-center gap-6 w-[90vw] max-w-sm z-50 shadow-lg">
  <a href="#feature" className="flex flex-col items-center text-white text-xs hover:opacity-80">
    <img src="images/icons/feature.png" alt="Fitur" className="w-12 h-12" />
  </a>
  <a href="#pricing" className="flex flex-col items-center text-white text-xs hover:opacity-80">
    <img src="images/icons/pricing.png" alt="Pricing" className="w-12 h-12" />
  </a>
  <a href="#demo" className="flex flex-col items-center text-white text-xs hover:opacity-80">
    <img src="images/icons/demo.png" alt="Demo" className="w-12 h-12" />
  </a>
  <a href="https://wa.me/6285736212190" className="flex flex-col items-center text-white text-xs hover:opacity-80">
    <img src="images/icons/contact.png" alt="Kontak" className="w-12 h-12" />
  </a>
</nav>



    </main>
  );
}
