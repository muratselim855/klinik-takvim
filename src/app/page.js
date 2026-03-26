import React from 'react';

export default function Home() {
  return (
    // En dıştaki kutu (Arka plan rengi ve tam ekran boyutu)
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- ÜST MENÜ (HEADER) --- */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        
        {/* Logo ve İsim Kısmı */}
        <div className="flex items-center gap-2">
          {/* SVG formatında basit bir takvim/kalp logosu */}
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span className="text-xl font-bold tracking-tight text-gray-900">KlinikTakvim</span>
        </div>

        {/* Giriş ve Kayıt Butonları (Şimdilik işlevsiz - 3. Aşama) */}
        <div className="flex gap-4">
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Giriş Yap
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Kayıt Ol
          </button>
        </div>
      </header>

      {/* --- ANA İÇERİK (HERO SECTION) --- */}
      <main className="flex flex-col items-center justify-center text-center mt-24 px-4">
        
        {/* Dikkat Çekici Başlık */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 max-w-3xl leading-tight">
          Randevularınızı Yönetmenin <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">En Akıllı Yolu</span>
        </h1>
        
        {/* Alt Açıklama */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Psikologlar ve diyetisyenler için özel tasarlandı. İptal olan randevularınızı otomatik doldurun, zamandan ve gelirden tasarruf edin.
        </p>
        
        {/* Büyük Aksiyon Butonu */}
        <div className="mt-10">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
            Hemen Ücretsiz Başla
          </button>
        </div>
        
        {/* Güven Verici Alt Metin */}
        <p className="mt-4 text-sm text-gray-500">Kredi kartı gerektirmez • 14 gün ücretsiz deneme</p>
        
      </main>
    </div>
  );
}