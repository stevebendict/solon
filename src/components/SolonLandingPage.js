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
        <h2 className="text-3xl font-bold text-left max-w-6xl mx-auto mb-12">Features & Performance</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
          {/* Tile 1 */}
          <div className="bg-white p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-base mb-1">API-first integration</h3>
              <p className="text-sm text-gray-600">Easily integrate advanced retrieval and generation capabilities into any application.</p>
            </div>
          </div>

          {/* Tile 2 */}
          <div className="bg-white p-6">
            <h3 className="font-semibold text-base mb-1">Multilingual data</h3>
            <p className="text-sm text-gray-600">Analyze, retrieve, and display information across over a hundred languages.</p>
          </div>

          {/* Tile 3 (image button-style) */}
          <div className="bg-white p-6 flex items-center justify-center">
            <img src="/images/element/fitur3.png" alt="Multilang UI" className="w-full max-w-xs" />
          </div>

          {/* Tile 4 (image left) */}
          <div className="bg-white p-6 flex items-center justify-center">
            <img src="/images/element/fitur4.png" alt="Flow chart" className="w-full h-auto object-contain" />
          </div>

          {/* Tile 5 (big tile) */}
          <div className="bg-white p-8 col-span-2">
            <h3 className="text-2xl font-bold mb-2">Best-in-class ML</h3>
            <p className="text-gray-700 mb-4">Backed by world-class researchers, Vectara’s ML models provide unmatched performance.</p>
            <div className="text-sm text-gray-500 space-x-2">
              <span>Embedding</span>
              <span>&gt;</span>
              <span>Reranking</span>
              <span>&gt;</span>
              <span>Hallucination detection</span>
              <span>&gt;</span>
              <span>Generative LLMs</span>
            </div>
          </div>

          {/* Tile 6 */}
          <div className="bg-white p-6">
            <h3 className="font-semibold text-base mb-1">Performance</h3>
            <p className="text-sm text-gray-600">Ultra-fast response times with our optimized cloud infrastructure, under 100 milliseconds.</p>
          </div>

          {/* Tile 7 (gauge image) */}
          <div className="bg-white p-6 flex items-center justify-center">
            <img src="/images/element/fitur7.png" alt="Gauge graph" className="w-full h-auto object-contain" />
          </div>

          {/* Tile 8 */}
          <div className="bg-white p-6">
            <h3 className="font-semibold text-base mb-1">Hybrid retrieval</h3>
            <p className="text-sm text-gray-600">Leverage the best of both worlds – configure traditional BM25 with semantic search for optimal relevance.</p>
          </div>

          {/* Tile 9 */}
          <div className="bg-white p-6">
            <h3 className="font-semibold text-base mb-1">Auto-scale features</h3>
            <p className="text-sm text-gray-600">Cloud-native architecture that automatically scales with demand, minimizing costs.</p>
            <p className="text-sm font-medium text-black mt-2">Dedicated or shared resources →</p>
          </div>

          {/* Tile 10 */}
          <div className="bg-white p-6">
            <h3 className="font-semibold text-base mb-1">Stateful chat management</h3>
            <p className="text-sm text-gray-600">Store and analyze user conversations to continually refine responses and understand user intent.</p>
          </div>

          {/* Tile 11 */}
          <div className="bg-white p-6">
            <h3 className="font-semibold text-base mb-1">High availability</h3>
            <p className="text-sm text-gray-600">Customize replication settings and dedicated nodes, for maximum resilience under peak loads.</p>
          </div>
        </div>
      </section>div>
        </div>
      </section>


         {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Dipercaya oleh Praktisi PPAT & Notaris</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <div key={i} className="relative rounded-xl overflow-hidden shadow-md">
              <img src={testimonial.image} alt={`Client ${i + 1}`} className="w-full h-80 object-cover" />
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
