export default function Club() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_40%,rgba(215,170,74,0.14),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · The Club
          </p>

          <h1 className="mt-6 max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.05em] sm:text-8xl md:text-[9rem]">
            Built for
            <br />
            <span className="text-[#d7aa4a]">Cairo.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
            FC Cairo City is being built as a modern football institution
            rooted in Cairo, designed for a new generation and created with a
            long-term ambition to compete at the highest levels of the game.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#identity"
              className="bg-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white"
            >
              Our Identity
            </a>

            <a
              href="#values"
              className="border border-white/15 px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-white transition hover:border-[#d7aa4a] hover:text-[#d7aa4a]"
            >
              Club Values
            </a>
          </div>
        </div>
      </section>

      {/* IDENTITY */}
      <section
        id="identity"
        className="border-b border-white/10 bg-[#081724]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                The Club
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.9] md:text-6xl">
                A new club.
                <br />
                <span className="text-white/30">A new era.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-white/50">
              <p>
                FC Cairo City begins digitally in 2026 with a vision that
                extends far beyond a website, a badge or a single football
                team.
              </p>

              <p>
                The ambition is to establish a complete football institution:
                competitive, intelligent, disciplined and unmistakably
                connected to Cairo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDING STATEMENT */}
      <section className="border-b border-white/10 bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                Founded 2026
              </p>

              <p className="mt-6 text-6xl font-black tracking-[-0.06em] text-white/10 md:text-8xl">
                2026
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black uppercase leading-[0.95] md:text-6xl">
                Start with
                <br />
                <span className="text-[#d7aa4a]">belief.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/50 md:text-base">
                Every established football institution once had a beginning.
                FC Cairo City&apos;s beginning is 2026 — a moment to define
                the identity, culture and standards that will shape everything
                that follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                What We Stand For
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
                Identity
                <br />
                before noise.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40">
              Everything around FC Cairo City should reinforce the same
              standard: ambition without shortcuts, discipline without
              compromise and a culture built to last.
            </p>
          </div>

          <div className="mt-16 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            <article className="bg-[#081724] p-8 md:p-10">
              <span className="text-5xl font-black text-[#d7aa4a]/30">
                01
              </span>

              <h3 className="mt-10 text-2xl font-black uppercase">
                Ambition
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Think beyond the immediate result. Build toward the level the
                club ultimately wants to reach.
              </p>
            </article>

            <article className="bg-[#081724] p-8 md:p-10">
              <span className="text-5xl font-black text-[#d7aa4a]/30">
                02
              </span>

              <h3 className="mt-10 text-2xl font-black uppercase">
                Discipline
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Standards matter. Preparation, consistency and accountability
                form the foundation of the club.
              </p>
            </article>

            <article className="bg-[#081724] p-8 md:p-10">
              <span className="text-5xl font-black text-[#d7aa4a]/30">
                03
              </span>

              <h3 className="mt-10 text-2xl font-black uppercase">
                Intelligence
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Modern football demands intelligent decisions on the pitch,
                around the club and throughout its development.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CAIRO */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Our Home
          </p>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              Cairo is not
              <br />
              just our location.
              <br />
              <span className="text-[#d7aa4a]">It is our identity.</span>
            </h2>

            <p className="max-w-xl self-end text-sm leading-8 text-white/45">
              FC Cairo City is designed around the energy, ambition and
              character of one of the world&apos;s great football cities. The
              club carries that responsibility from its earliest days.
            </p>
          </div>
        </div>
      </section>

      {/* CLUB CHARACTER */}
      <section className="border-t border-white/10 bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                Club Character
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] md:text-5xl">
                How we
                <br />
                <span className="text-white/30">move forward.</span>
              </h2>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                01 · Respect
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Respect the game, the city, the opponent, the supporter and
                everyone who contributes to the club.
              </p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                02 · Progress
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Never confuse the starting point with the destination. The
                standard must improve with every chapter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                The Next Chapter
              </p>

              <h2 className="mt-5 max-w-3xl text-5xl font-black uppercase leading-[0.9] md:text-7xl">
                The club is only
                <br />
                getting started.
              </h2>
            </div>

            <a
              href="/journey"
              className="inline-flex w-fit border border-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c]"
            >
              Explore The Journey
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}