import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- NAVIGASYON (Mobil Uyumlu) --- */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-50 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <span className="text-xl font-black tracking-tighter text-emerald-900">DiyetPaneli</span>
        </div>
        
        {/* Masaüstü Menü */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
          <a href="#ozellikler" className="hover:text-emerald-600 transition-colors">Özellikler</a>
          <a href="#fiyat" className="hover:text-emerald-600 transition-colors">Ücretlendirme</a>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">Giriş</button>
          <button className="px-5 py-2 text-sm font-bold bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 shadow-md transition-all">Başla</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-40 px-6 text-center bg-gradient-to-b from-emerald-50/40 to-white">
        <div className="inline-block px-4 py-1.5 mb-6 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest">
          Diyetisyenler İçin Özel 🥗
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-gray-900">
          Danışan Takibinde <br />
          <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">Yeni Nesil</span> Dönem
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Kağıt kalemle randevu takibi bitti. Danışanlarınızın randevularını yönetin, iptal olan boşlukları saniyeler içinde doldurun.
        </p>
      </section>

      {/* --- DASHBOARD MOCKUP (Diyetisyen Odaklı) --- */}
      <section className="px-6 -mt-32 max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-3 md:p-6 overflow-hidden">
          <div className="flex items-center justify-between mb-6 px-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-red-300 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
            </div>
            <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Pazartesi Programı</div>
          </div>
          
          <div className="grid md:grid-cols-12 gap-4">
            {/* Sidebar Temsili */}
            <div className="hidden md:block md:col-span-3 space-y-3 border-r border-gray-50 pr-4">
              <div className="h-10 bg-emerald-50 rounded-xl flex items-center px-3 text-[10px] font-bold text-emerald-600">Özet Paneli</div>
              <div className="h-10 bg-gray-50 rounded-xl flex items-center px-3 text-[10px] font-bold text-gray-400">Danışanlarım</div>
              <div className="h-10 bg-gray-50 rounded-xl flex items-center px-3 text-[10px] font-bold text-gray-400">Ölçümler</div>
            </div>
            
            {/* Takvim Görünümü */}
            <div className="md:col-span-9 grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full border border-emerald-100 flex items-center justify-center font-bold text-emerald-700">M.A</div>
                  <div>
                    <p className="text-xs font-bold text-gray-700">Mehmet Aksoy</p>
                    <p className="text-[10px] text-gray-400 italic">Kilo Verme Programı • 14:00</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full">Onaylı</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-50/50 border border-amber-100 rounded-2xl animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full border border-amber-100 flex items-center justify-center font-bold text-amber-600">İ.Y</div>
                  <div>
                    <p className="text-xs font-bold text-gray-700">İptal Edildi (Boşluk!)</p>
                    <p className="text-[10px] text-gray-400">Yedek listeye mesaj gönderiliyor...</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-amber-500 text-white text-[10px] font-bold rounded-full">Dolduruluyor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ÖZELLİKLER --- */}
      <section id="ozellikler" className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-black mb-16 text-gray-800">Diyetisyenler Neden Bizimle?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform">📉</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">Kayıp Seansları Kurtarın</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Son dakika iptallerini otomatik olarak yedek listenizle doldurun, gelirinizi koruyun.</p>
          </div>
          <div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform">📱</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">WhatsApp Hatırlatıcı</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Danışanlarınıza randevu öncesi otomatik mesaj göndererek randevu sadakatini artırın.</p>
          </div>
          <div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-50 transition-all">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform">🍎</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800">Dijital Danışan Kaydı</h3>
            <p className="text-gray-500 leading-relaxed text-sm">Boy, kilo ve yağ oranı ölçümlerini tarihsel grafiklerle takip edin.</p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-gray-400 text-[10px] uppercase tracking-[0.2em]">
        &copy; 2026 DiyetPaneli — Yazılım Öğrenme Yolculuğu
      </footer>

    </div>
  );
}