import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06111c] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-sm font-black tracking-[0.2em] text-white"
            >
              FC CAIRO CITY
            </Link>

            <p className="mt-3 max-w-sm text-[10px] uppercase tracking-[0.22em] text-white/30">
              Pride of Cairo · Founded 2026
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
              A football club being built for the modern era — beginning with
              identity, community and ambition in Cairo.
            </p>
          </div>

          {/* CLUB */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
              Club
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/club"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Club
              </Link>

              <Link
                href="/vision"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Vision
              </Link>

              <Link
                href="/journey"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Journey
              </Link>
            </div>
          </div>

          {/* FOOTBALL */}
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
              Football
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/first-team"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                First Team
              </Link>

              <Link
                href="/media"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Media
              </Link>

              <Link
                href="/store"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Store
              </Link>

              <Link
                href="/join"
                className="text-xs uppercase tracking-[0.12em] text-white/50 transition hover:text-white"
              >
                Join FCC
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
            © 2026 FC Cairo City. All rights reserved.
          </p>

          <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
            Cairo · Egypt
          </p>
        </div>
      </div>
    </footer>
  );
}