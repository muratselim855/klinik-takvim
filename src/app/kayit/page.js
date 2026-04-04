// app/kayit/page.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Kayit() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Şifreler eşleşmiyor');
      return;
    }
    alert('Kayıt başarılı! (demo)');
    router.push('/giris');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-32">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">📝</div>
          <h1 className="text-3xl font-black text-gray-800 dark:text-white">Kayıt Ol</h1>
          <p className="text-gray-500 dark:text-slate-400 mt-2">Ücretsiz denemeye başlayın</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Ad Soyad</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">E-posta</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Şifre</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Şifre Tekrar</label>
            <input
              type="password"
              required
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            Ücretsiz Başla
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-slate-400">
          Zaten hesabınız var mı?{' '}
          <Link href="/giris" className="text-emerald-600 dark:text-emerald-400 font-semibold">
            Giriş Yap
          </Link>
        </div>
      </div>
    </div>
  );
}