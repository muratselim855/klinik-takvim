// app/giris/page.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Giris() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend mockup: şimdilik direkt anasayfaya yönlendiriyoruz
    alert('Giriş başarılı (demo)');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 py-32">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">🔐</div>
          <h1 className="text-3xl font-black text-gray-800 dark:text-white">Giriş Yap</h1>
          <p className="text-gray-500 dark:text-slate-400 mt-2">Hesabınıza devam edin</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">E-posta</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="ornek@diyetpaneli.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Şifre</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition"
          >
            Giriş Yap
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-slate-400">
          Hesabınız yok mu?{' '}
          <Link href="/kayit" className="text-emerald-600 dark:text-emerald-400 font-semibold">
            Kayıt Ol
          </Link>
        </div>
      </div>
    </div>
  );
}