export default function Home() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(215,170,74,0.10),transparent_30%)]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
              Cairo · Egypt · 2026
            </p>

            <h1 className="text-7xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-8xl lg:text-[10rem]">
              FC
              <br />
              <span className="text-[#d7aa4a]">Cairo</span>
              <br />
              City
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d7aa4a]" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                Founded 2026 · Pride of Cairo
              </p>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/60">
              A football club being built for the modern era — born digitally
              in 2026, with the ambition of becoming a fully established
              physical club competing at the highest levels of Egyptian,
              African and international football.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#club"
                className="bg-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white"
              >
                Discover FC Cairo City
              </a>

              <a
                href="#journey"
                className="border border-white/15 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-[#d7aa4a] hover:text-[#d7aa4a]"
              >
                Our Journey
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/30">
            Scroll to explore
          </span>

          <span className="h-10 w-px bg-gradient-to-b from-[#d7aa4a] to-transparent" />
        </div>
      </section>

      {/* CLUB INTRO */}
      <section
        id="club"
        className="border-t border-white/10 bg-[#081724] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d7aa4a]">
            The Club
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              A new club.
              <br />
              <span className="text-white/30">A new era.</span>
            </h2>

            <p className="max-w-xl text-base leading-8 text-white/60">
              FC Cairo City is designed around ambition, identity and
              community. The club&apos;s journey starts in Cairo and aims
              toward the highest levels of the game.
            </p>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section className="border-t border-white/10 bg-[#06111c] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d7aa4a]">
              The Foundation
            </p>

            <h2 className="mt-6 text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              Built with
              <br />
              <span className="text-white/30">purpose.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60">
              FC Cairo City is more than a football badge. It is a long-term
              project built around a clear identity, a connected community and
              the ambition to compete at the highest level.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            <div className="bg-[#081724] p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                01
              </p>

              <h3 className="mt-5 text-2xl font-black uppercase">
                Identity
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                A distinct Cairo identity shaped by football, culture and
                pride.
              </p>
            </div>

            <div className="bg-[#081724] p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                02
              </p>

              <h3 className="mt-5 text-2xl font-black uppercase">
                Community
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Supporters are part of the story from the very beginning.
              </p>
            </div>

            <div className="bg-[#081724] p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                03
              </p>

              <h3 className="mt-5 text-2xl font-black uppercase">
                Ambition
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                A clear objective: build, compete, grow and represent Cairo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="border-t border-white/10 bg-[#06111c] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d7aa4a]">
            The Journey
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-2">
            <h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">
              From Cairo.
              <br />
              <span className="text-white/30">To the world.</span>
            </h2>

            <div className="max-w-xl">
              <p className="text-base leading-8 text-white/60">
                FC Cairo City begins with an idea: build a modern football
                club from the ground up, with Cairo at its heart and a clear
                path toward competitive football.
              </p>

              <a
                href="/journey"
                className="mt-8 inline-flex border border-[#d7aa4a] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c]"
              >
                Explore The Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}