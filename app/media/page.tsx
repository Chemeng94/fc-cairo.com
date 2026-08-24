const mediaSections = [
  {
    number: "01",
    title: "Club News",
    description:
      "Official updates from FC Cairo City as the club develops its identity, community and football future.",
  },
  {
    number: "02",
    title: "Founders Stories",
    description:
      "The people, ideas and moments that shape the earliest chapter of the FC Cairo City story.",
  },
  {
    number: "03",
    title: "Football",
    description:
      "Future coverage of teams, players, development, matches and the football operation.",
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(215,170,74,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Media
          </p>

          <h1 className="mt-6 max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-8xl md:text-[9rem]">
            Tell the
            <br />
            <span className="text-[#d7aa4a]">story.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
            The FC Cairo City media platform will document the club from its
            earliest foundations through its football journey and beyond.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                The FCC Story
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                Every club
                <br />
                has a story.
                <br />
                <span className="text-white/30">Ours starts here.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-white/50">
              Media will become the record of FC Cairo City's development:
              official announcements, football updates, supporter stories,
              visual content and the moments that define the club.
            </p>
          </div>
        </div>
      </section>

      {/* MEDIA CATEGORIES */}
      <section className="bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Coverage
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {mediaSections.map((section) => (
              <article
                key={section.number}
                className="border border-white/10 bg-[#081724] p-8 transition hover:border-[#d7aa4a]/50"
              >
                <span className="text-4xl font-black text-[#d7aa4a]/30">
                  {section.number}
                </span>

                <h3 className="mt-8 text-2xl font-black uppercase">
                  {section.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Featured
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <article className="flex min-h-[420px] items-end border border-white/10 bg-[#0b1c2b] p-8 md:p-10">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                  Coming Soon
                </p>

                <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-tight md:text-6xl">
                  The first chapter
                  <br />
                  of FCC.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                  Original FCC stories, announcements and visual content will
                  begin appearing here as the club's media operation develops.
                </p>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="border border-white/10 bg-[#0b1c2b] p-8">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                  Video
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase">
                  FCC Films
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  Long-form stories and visual projects from the club.
                </p>
              </article>

              <article className="border border-white/10 bg-[#0b1c2b] p-8">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                  Photography
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase">
                  FCC Visuals
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/40">
                  The people, places and moments behind the club.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE MEDIA */}
      <section className="border-t border-white/10 bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                Built To Grow
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                From
                <br />
                announcements
                <br />
                <span className="text-[#d7aa4a]">to matchday.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-white/45 md:text-base">
              <p>
                Today, media tells the story of a club being established.
              </p>

              <p>
                Tomorrow, it will document teams, players, matches, supporters,
                academy development and life around the stadium.
              </p>

              <p>
                The platform grows as FC Cairo City grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Stay Connected
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-7xl">
            Be there
            <br />
            <span className="text-[#d7aa4a]">from the beginning.</span>
          </h2>

          <a
            href="/join"
            className="mt-9 inline-flex bg-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white"
          >
            Join FC Cairo City
          </a>
        </div>
      </section>
    </main>
  );
}