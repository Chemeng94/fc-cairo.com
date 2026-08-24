const pillars = [
  {
    number: "01",
    title: "First Team",
    description:
      "The senior football operation that will ultimately represent FC Cairo City in competitive Egyptian football.",
  },
  {
    number: "02",
    title: "Player Development",
    description:
      "A clear pathway for identifying, developing and preparing players for the demands of modern football.",
  },
  {
    number: "03",
    title: "Football Identity",
    description:
      "A consistent playing philosophy built around ambition, discipline, technical quality and intelligent football.",
  },
];

export default function FirstTeamPage() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(215,170,74,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Football
          </p>

          <h1 className="mt-6 max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-8xl md:text-[9rem]">
            Built for
            <br />
            <span className="text-[#d7aa4a]">football.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
            Football is at the heart of FC Cairo City. The long-term objective
            is to establish a serious, modern football operation from Cairo,
            built around development, competition and a clear identity.
          </p>
        </div>
      </section>

      {/* CURRENT STATUS */}
      <section className="border-b border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                Current Stage
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                The club is
                <br />
                building the
                <br />
                <span className="text-white/30">foundation first.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-white/50">
              FC Cairo City's football operation is part of the wider journey
              from digital foundation toward a fully established physical
              club. The objective is not to rush the process, but to build
              each football layer properly.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTBALL PILLARS */}
      <section className="bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Football Philosophy
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.number}
                className="border border-white/10 bg-[#081724] p-8 transition hover:border-[#d7aa4a]/50"
              >
                <span className="text-4xl font-black text-[#d7aa4a]/30">
                  {pillar.number}
                </span>

                <h3 className="mt-8 text-2xl font-black uppercase">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PATHWAY */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            The Football Pathway
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-tight md:text-7xl">
            From
            <br />
            <span className="text-white/30">development</span>
            <br />
            to competition.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              "Scouting",
              "Academy",
              "Development",
              "First Team",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-white/10 p-7"
              >
                <span className="text-[10px] font-black text-[#d7aa4a]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-black uppercase">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMBITION */}
      <section className="border-t border-white/10 bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                The Ambition
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                Cairo.
                <br />
                Egypt.
                <br />
                <span className="text-[#d7aa4a]">Africa.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-white/45 md:text-base">
              <p>
                The first objective is to establish FC Cairo City as a
                credible football institution rooted in Cairo.
              </p>

              <p>
                From there, the ambition is to compete at increasingly higher
                levels of Egyptian football and eventually earn opportunities
                on the African stage.
              </p>

              <p>
                Every competitive ambition begins with the quality of the
                foundations underneath it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            The Next Stage
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-7xl">
            Build the
            <br />
            <span className="text-[#d7aa4a]">football future.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45">
            Follow the journey as FC Cairo City develops from its founding
            foundations toward a complete football club.
          </p>

          <a
            href="/journey"
            className="mt-9 inline-flex border border-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c]"
          >
            Back To The Journey
          </a>
        </div>
      </section>
    </main>
  );
}