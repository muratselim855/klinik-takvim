// components/Navbar.js
'use client'
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-50 dark:border-slate-800 sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <Link href="/" className="text-xl font-black tracking-tighter text-emerald-900 dark:text-emerald-400">
          DiyetPaneli
        </Link>
      </div>
      
      <div className="hidden md:flex gap-6 text-sm font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
        <Link href="/hakkimizda" className="hover:text-emerald-600 dark:hover:text-emerald-400">Hakkımızda</Link>
        <Link href="/servisler" className="hover:text-emerald-600 dark:hover:text-emerald-400">Servisler</Link>
        <Link href="/iletisim" className="hover:text-emerald-600 dark:hover:text-emerald-400">İletişim</Link>
        <a href="#ozellikler" className="hover:text-emerald-600 dark:hover:text-emerald-400">Özellikler</a>
        <a href="#fiyat" className="hover:text-emerald-600 dark:hover:text-emerald-400">Ücretlendirme</a>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/giris">
          <button className="px-4 py-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">Giriş</button>
        </Link>
        <Link href="/kayit">
          <button className="px-5 py-2 text-sm font-bold bg-emerald-600 text-white rounded-xl">Başla</button>
        </Link>
      </div>
    </nav>
  );
}