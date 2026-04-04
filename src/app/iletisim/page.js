// app/iletisim/page.js
'use client'
import { useState } from 'react';

export default function Iletisim() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız alındı. En kısa sürede dönüş yapacağız.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white">İletişim</h1>
        <p className="mt-6 text-xl text-gray-500 dark:text-slate-400 max-w-2xl mx-auto">
          Sorularınız, önerileriniz veya iş birliği teklifleriniz için bize ulaşın.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Formu */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Bize Yazın</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Adınız Soyadınız</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">E-posta Adresiniz</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Mesajınız</label>
                <textarea
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition"
              >
                Gönder
              </button>
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-xl">📍</div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Adres</h3>
                  <p className="text-gray-500 dark:text-slate-400">Levent Mahallesi, Büyükdere Cad. No: 34330, Şişli/İstanbul</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-slate-800">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-xl">📧</div>
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">E-posta</h3>
                  <p className="text-gray-500 dark:text-slate-400">destek@diyetpaneli.com</p>
                  <p className="text-gray-500 dark:text-slate-400">info@diyetpaneli.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}