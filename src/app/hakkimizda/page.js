// app/hakkimizda/page.js
'use client'
import Link from 'next/link';

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-emerald-50/40 dark:from-emerald-950/20 to-background">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">
          Hakkımızda
        </h1>
        <p className="mt-6 text-xl text-gray-500 dark:text-slate-400 max-w-3xl mx-auto">
          Diyetisyenler ve danışanlar arasında köprü kurarak, sağlıklı yaşam yolculuğunu teknolojiyle buluşturuyoruz.
        </p>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6">🎯</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Misyonumuz</h2>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed">
              Diyetisyenlerin iş yükünü azaltmak, randevu iptallerinden kaynaklanan gelir kaybını önlemek ve danışan memnuniyetini artırmak için akıllı, kullanıcı dostu bir platform sunmak.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6">🌟</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Vizyonumuz</h2>
            <p className="text-gray-500 dark:text-slate-400 leading-relaxed">
              Türkiye'nin en çok tercih edilen diyetisyen yönetim platformu olmak ve sağlıklı yaşam ekosistemine teknolojik çözümlerle liderlik etmek.
            </p>
          </div>
        </div>
      </section>

      {/* Ekibimiz (mockup) */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-12 text-gray-800 dark:text-white">Ekibimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Ayşe Demir', role: 'Kurucu & CEO', img: '👩‍💼' },
              { name: 'Mehmet Yılmaz', role: 'Teknik Lider', img: '👨‍💻' },
              { name: 'Zeynep Kaya', role: 'Diyetisyen İlişkileri', img: '🥗' }
            ].map(member => (
              <div key={member.name} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-slate-800">
                <div className="text-6xl mb-4">{member.img}</div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-4 text-gray-800 dark:text-white">Siz de aramıza katılın</h2>
          <p className="text-gray-500 dark:text-slate-400 mb-8">Binlerce diyetisyenin tercihi DiyetPaneli ile siz de danışanlarınıza daha iyi hizmet verin.</p>
          <Link href="/kayit">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition">
              Hemen Üye Ol
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}