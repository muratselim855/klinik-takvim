import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* --- NAVIGASYON --- */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter italic">KlinikTakvim</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-gray-500">
          <a href="#ozellikler" className="hover:text-blue-600 transition-colors">Özellikler</a>
          <a href="#nasil" className="hover:text-blue-600 transition-colors">Nasıl Çalışır?</a>
          <a href="#fiyat" className="hover:text-blue-600 transition-colors">Fiyatlandırma</a>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">Giriş</button>
          <button className="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md">Ücretsiz Dene</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-32 px-6 text-center bg-gradient-to-b from-blue-50/50 to-white">
        <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-[1.1]">
          Kliniğinizi <span className="text-blue-600">Otomatik</span> <br /> Pilotla Yönetin
        </h1>
        <p className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Randevu iptalleri canınızı sıkmasın. Boş kalan saatleri yapay zeka destekli asistanımızla anında doldurun.
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-4">
          <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-lg hover:bg-black transition-all shadow-xl">
            Hemen Başla — Ücretsiz
          </button>
          <button className="px-10 py-5 bg-white border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-blue-200 transition-all flex items-center justify-center gap-2">
            Nasıl Çalışır? <span className="text-blue-600">→</span>
          </button>
        </div>
      </section>

      {/* --- ÖZELLİKLER (FEATURES) --- */}
      <section id="ozellikler" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-100 group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">📅</div>
            <h3 className="text-xl font-bold mb-3">Akıllı Takvim</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Tüm randevularınızı tek bir yerden, karmaşa olmadan yönetin.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-50 hover:bg-teal-50 transition-colors border border-transparent hover:border-teal-100 group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">⚡</div>
            <h3 className="text-xl font-bold mb-3">Otomatik Dolgu</h3>
            <h4 className="text-teal-600 text-xs font-bold uppercase mb-2">Killer Feature</h4>
            <p className="text-gray-500 leading-relaxed text-sm">İptal edilen randevular için bekleme listesindekilere otomatik mesaj gider.</p>
          </div>
          <div className="p-8 rounded-3xl bg-gray-50 hover:bg-purple-50 transition-colors border border-transparent hover:border-purple-100 group">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">📊</div>
            <h3 className="text-xl font-bold mb-3">Gelir Analizi</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Aylık kazancınızı ve doluluk oranlarınızı grafiklerle takip edin.</p>
          </div>
        </div>
      </section>

      {/* --- FİYATLANDIRMA (PRICING) --- */}
      <section id="fiyat" className="py-24 bg-gray-900 text-white">
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-6">Basit ve Şeffaf Fiyatlandırma</h2>
          <p className="text-gray-400 mb-12">Karmaşık paketler yok. Tek bir profesyonel plan.</p>
          
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest">En Popüler</div>
            <div className="text-5xl font-black mb-4">499 TL<span className="text-lg text-gray-500"> /ay</span></div>
            <ul className="space-y-4 mb-10 text-gray-300 text-sm">
              <li className="flex items-center gap-2"><span className="text-teal-400">✔</span> Sınırsız Randevu</li>
              <li className="flex items-center gap-2"><span className="text-teal-400">✔</span> Otomatik WhatsApp Mesajları</li>
              <li className="flex items-center gap-2"><span className="text-teal-400">✔</span> 500 Danışan Kaydı</li>
            </ul>
            <button className="w-full py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-blue-50 transition-colors">
              Hemen Başla
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-gray-400 text-xs border-t border-gray-100">
        © 2026 KlinikTakvim. Tüm hakları saklıdır. Yazılımı öğrenirken geliştirilmiştir.
      </footer>

    </div>
  );
}