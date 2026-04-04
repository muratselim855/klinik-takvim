'use client'
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-emerald-100 selection:text-emerald-900 transition-colors duration-300">

      {/* --- HERO SECTION --- */}
      <section className="pt-16 pb-40 px-6 text-center bg-gradient-to-b from-emerald-50/40 dark:from-emerald-950/20 to-background">
        <div className="inline-block px-4 py-1.5 mb-6 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest">
          Diyetisyenler İçin Özel 🥗
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-gray-900 dark:text-white">
          Danışan Takibinde <br />
          <span className="text-emerald-600 dark:text-emerald-400 underline decoration-emerald-200 dark:decoration-emerald-800 underline-offset-8">Yeni Nesil</span> Dönem
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Kağıt kalemle randevu takibi bitti. Danışanlarınızın randevularını yönetin, iptal olan boşlukları saniyeler içinde doldurun.
        </p>
        <div className="mt-10">
          <Link href="/kayit">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100 dark:shadow-none">
              Hemen Ücretsiz Dene
            </button>
          </Link>
        </div>
      </section>

      {/* --- DASHBOARD MOCKUP --- */}
      <section className="px-6 -mt-32 max-w-5xl mx-auto relative z-10">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] dark:shadow-none border border-gray-100 dark:border-slate-800 p-3 md:p-6 overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
          <div className="flex items-center justify-between mb-6 px-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 bg-red-300 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-300 rounded-full"></div>
              <div className="w-3 h-3 bg-emerald-300 rounded-full"></div>
            </div>
            <div className="text-[10px] font-bold text-gray-300 dark:text-slate-600 uppercase tracking-widest">Pazartesi Programı</div>
          </div>
          
          <div className="grid md:grid-cols-12 gap-4">
            <div className="hidden md:block md:col-span-3 space-y-3 border-r border-gray-50 dark:border-slate-800 pr-4">
              <div className="h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center px-3 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-sans tracking-wide">Özet Paneli</div>
              <div className="h-10 bg-gray-50 dark:bg-slate-800/50 rounded-xl flex items-center px-3 text-[10px] font-bold text-gray-400 dark:text-slate-600 font-sans tracking-wide">Danışanlarım</div>
              <div className="h-10 bg-gray-50 dark:bg-slate-800/50 rounded-xl flex items-center px-3 text-[10px] font-bold text-gray-400 dark:text-slate-600 font-sans tracking-wide">Ölçümler</div>
            </div>
            
            <div className="md:col-span-9 grid grid-cols-1 gap-2">
              <div className="flex items-center justify-between p-4 bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full border border-emerald-100 dark:border-emerald-900/50 flex items-center justify-center font-bold text-emerald-700 dark:text-emerald-400 uppercase">MA</div>
                  <div>
                    <p className="text-xs font-bold text-gray-700 dark:text-slate-200">Mehmet Aksoy</p>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 italic">Kilo Verme Programı • 14:00</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">Onaylı</div>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-50/50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full border border-amber-100 dark:border-amber-900/50 flex items-center justify-center font-bold text-amber-600 dark:text-amber-400 uppercase">İY</div>
                  <div>
                    <p className="text-xs font-bold text-gray-700 dark:text-slate-200">İptal Edildi (Boşluk!)</p>
                    <p className="text-[10px] text-gray-400 dark:text-slate-500 uppercase tracking-tighter">Yedek listeye mesaj gönderiliyor...</p>
                  </div>
                </div>
                <div className="px-3 py-1 bg-amber-500 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">Dolduruluyor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ÖZELLİKLER --- */}
      <section id="ozellikler" className="py-32 px-8 max-w-7xl mx-auto scroll-mt-20">
        <h2 className="text-center text-3xl md:text-4xl font-black mb-16 text-gray-800 dark:text-white">Diyetisyenler Neden Bizimle?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform">📉</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-slate-100 tracking-tight">Kayıp Seansları Kurtarın</h3>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed text-sm">Son dakika iptallerini otomatik olarak yedek listenizle doldurun, gelirinizi koruyun.</p>
          </div>
          <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform">📱</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-slate-100 tracking-tight">WhatsApp Hatırlatıcı</h3>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed text-sm">Danışanlarınıza randevu öncesi otomatik mesaj göndererek randevu sadakatini artırın.</p>
          </div>
          <div className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-900 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:rotate-12 transition-transform">🍎</div>
            <h3 className="text-lg font-bold mb-3 text-gray-800 dark:text-slate-100 tracking-tight">Dijital Danışan Kaydı</h3>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed text-sm">Boy, kilo ve yağ oranı ölçümlerini tarihsel grafiklerle takip edin.</p>
          </div>
        </div>
      </section>

      {/* --- FİYATLANDIRMA --- */}
      <section id="fiyat" className="py-32 bg-gray-50 dark:bg-slate-900/50 text-foreground scroll-mt-20 transition-colors">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">Basit ve Şeffaf Ücretlendirme</h2>
          <p className="text-gray-500 dark:text-slate-400 mb-16 text-lg">Karmaşık paketler yok. Tüm özellikler tek fiyatta.</p>
          
          <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 p-12 rounded-[3rem] relative shadow-2xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg text-white">En Popüler</div>
            <div className="text-6xl font-black mb-4 tracking-tighter text-gray-900 dark:text-white">499 TL<span className="text-lg text-gray-500 font-medium tracking-normal">/ay</span></div>
            <ul className="space-y-5 mb-12 text-gray-500 dark:text-gray-300 text-sm font-medium">
              <li className="flex items-center justify-center gap-3 underline decoration-emerald-500/30 underline-offset-4">Sınırsız Danışan Kaydı</li>
              <li className="flex items-center justify-center gap-3 underline decoration-emerald-500/30 underline-offset-4">Otomatik WhatsApp Mesajları</li>
              <li className="flex items-center justify-center gap-3 underline decoration-emerald-500/30 underline-offset-4">Akıllı İptal Doldurma Sistemi</li>
            </ul>
            <Link href="/kayit">
              <button className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-500 hover:scale-[1.02] transition-all shadow-xl shadow-emerald-900/20">
                Hemen Kayıt Ol
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- SIKÇA SORULAN SORULAR --- */}
      <section id="sss" className="py-32 px-6 bg-background max-w-3xl mx-auto scroll-mt-20">
        <h2 className="text-3xl font-black text-center mb-16 text-gray-800 dark:text-white tracking-tight">Merak Edilenler</h2>
        <div className="space-y-6">
          <div className="p-8 rounded-[2rem] bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors duration-300">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Verilerim güvende mi?
            </h4>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed font-medium">Evet, tüm verileriniz banka düzeyinde 256-bit şifreleme ile korunur. KVKK uyumlu altyapımızla verileriniz her zaman güvendedir.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 transition-colors duration-300">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                İptal sistemini nasıl kullanırım?
            </h4>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed font-medium">Bir danışan randevusunu iptal ettiğinde, sistem bekleme listenizdeki kişilere otomatik olarak WhatsApp üzerinden bildirim gönderir. Onaylayan ilk kişi boşluğa yerleşir.</p>
          </div>
        </div>
      </section>

      {/* --- İLETİŞİM --- */}
      <section className="py-24 px-6 bg-emerald-600 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-4 text-white tracking-tight">Desteğe mi İhtiyacınız Var?</h2>
          <p className="text-emerald-100 mb-10 max-w-md mx-auto font-medium leading-relaxed">
            DiyetPaneli'ni kliniğinizde kullanmaya başlarken aklınıza takılan soruları bize iletebilirsiniz. 
            Bizzat ilgileniyor ve en kısa sürede dönüş yapıyoruz.
          </p>
          <div className="max-w-md mx-auto flex flex-col md:flex-row gap-3">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="flex-1 px-6 py-4 rounded-2xl focus:outline-none text-sm font-bold shadow-inner text-gray-900 bg-white" 
            />
            <button className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-all shadow-2xl active:scale-95">
              Bize Yazın
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 text-center text-gray-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em] border-t border-gray-100 dark:border-slate-900">
        &copy; 2026 DiyetPaneli — Profesyonel Diyetisyen Yönetim Portalı
      </footer>

    </div>
  );
}