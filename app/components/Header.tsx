"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06111c]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* CLUB BRAND */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-[#d7aa4a] bg-[#0b1b2a]">
            <span className="text-sm font-black tracking-tight text-[#d7aa4a]">
              FCC
            </span>
          </div>

          <div className="hidden sm:block">
            <div className="text-sm font-black tracking-[0.18em] text-white">
              FC CAIRO CITY
            </div>

            <div className="text-[9px] uppercase tracking-[0.25em] text-white/40">
              Pride of Cairo
            </div>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/club"
            className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d7aa4a]"
          >
            Club
          </Link>

          <Link
            href="/vision"
            className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d7aa4a]"
          >
            Vision
          </Link>

          <Link
            href="/journey"
            className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d7aa4a]"
          >
            Journey
          </Link>

          <Link
            href="/first-team"
            className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d7aa4a]"
          >
            Football
          </Link>

          <Link
            href="/media"
            className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d7aa4a]"
          >
            Media
          </Link>

          <Link
            href="/store"
            className="text-xs font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-[#d7aa4a]"
          >
            Store
          </Link>
        </div>

        {/* JOIN BUTTON */}
        <Link
          href="/join"
          className="hidden border border-[#d7aa4a] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c] sm:block"
        >
          Join FC Cairo City
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="flex h-10 w-10 items-center justify-center border border-white/15 md:hidden"
          aria-label="Open navigation menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </div>
        </button>
      </nav>
    </header>
  );
}