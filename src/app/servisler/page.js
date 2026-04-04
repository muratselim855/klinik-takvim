// app/servisler/page.js
'use client'
import Link from 'next/link';

export default function Servisler() {
  const services = [
    { icon: '📅', title: 'Akıllı Randevu Yönetimi', desc: 'Takviminizi online yönetin, danışanlarınız kendi randevularını oluştursun.' },
    { icon: '🔄', title: 'İptal Doldurma Sistemi', desc: 'Son dakika iptallerini bekleme listenizdeki danışanlarla otomatik doldurun.' },
    { icon: '💬', title: 'WhatsApp Entegrasyonu', desc: 'Randevu hatırlatıcıları ve bilgilendirmeleri otomatik WhatsApp ile gönderin.' },
    { icon: '📊', title: 'Danışan Takip Paneli', desc: 'Kilo, ölçüm, diyet listesi ve notlarını dijital ortamda saklayın.' },
    { icon: '📈', title: 'Gelişmiş Raporlama', desc: 'Aylık gelir, doluluk oranı, danışan memnuniyeti gibi metrikleri görün.' },
    { icon: '🔒', title: 'KVKK Uyumlu Veri Güvenliği', desc: 'Tüm verileriniz banka düzeyinde şifrelenir ve yedeklenir.' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-emerald-50/40 dark:from-emerald-950/20 to-background">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">Servislerimiz</h1>
        <p className="mt-6 text-xl text-gray-500 dark:text-slate-400 max-w-3xl mx-auto">
          DiyetPaneli'nin sunduğu tüm özelliklerle iş akışınızı dijitalleştirin, verimliliğinizi artırın.
        </p>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800 hover:shadow-xl transition-all">
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-gray-500 dark:text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-emerald-600 text-white text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-4">Tüm servisler tek pakette</h2>
          <p className="text-emerald-100 mb-8">Aylık 499 TL’ye sınırsız kullanım, ek ücret yok.</p>
          <Link href="/kayit">
            <button className="px-8 py-4 bg-white text-emerald-700 rounded-2xl font-bold hover:bg-gray-100 transition">Hemen Başlayın</button>
          </Link>
        </div>
      </section>
    </div>
  );
}