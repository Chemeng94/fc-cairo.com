const stages = [
  {
    number: "01",
    phase: "FOUNDERS ERA",
    title: "Build the identity.",
    description:
      "Establish FC Cairo City's identity, digital presence and founding community before the physical football operation begins.",
  },
  {
    number: "02",
    phase: "FOUNDATION",
    title: "Build the structure.",
    description:
      "Develop the organisational, commercial and operational foundations required to turn the project into a functioning football institution.",
  },
  {
    number: "03",
    phase: "FOOTBALL",
    title: "Build the teams.",
    description:
      "Develop football operations, player pathways, academy structures and competitive teams around a clear football philosophy.",
  },
  {
    number: "04",
    phase: "THE CLUB",
    title: "Build the home.",
    description:
      "Create the facilities, supporter culture and physical infrastructure required for a complete modern football club.",
  },
  {
    number: "05",
    phase: "THE FUTURE",
    title: "Compete at the highest level.",
    description:
      "Take FC Cairo City from its Cairo foundations toward serious Egyptian, African and eventually international competition.",
  },
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(215,170,74,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · The Journey
          </p>

          <h1 className="mt-6 max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-8xl md:text-[9rem]">
            From
            <br />
            <span className="text-[#d7aa4a]">beginning</span>
            <br />
            to club.
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
            FC Cairo City is not being built overnight. The journey is a
            sequence of deliberate stages, each creating the foundation for
            the next.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                One Stage At A Time
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                The destination
                <br />
                is clear.
                <br />
                <span className="text-white/30">The work starts now.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-white/50">
              Every stage of FC Cairo City's development should strengthen the
              club rather than simply make it look bigger. Identity comes
              first. Structure follows. Football grows from the foundation.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Five Stages
          </p>

          <div className="mt-12 space-y-5">
            {stages.map((stage) => (
              <article
                key={stage.number}
                className="grid gap-8 border border-white/10 bg-[#081724] p-8 transition hover:border-[#d7aa4a]/50 md:grid-cols-[100px_220px_1fr] md:items-start md:p-10"
              >
                <span className="text-5xl font-black tracking-[-0.05em] text-[#d7aa4a]/30">
                  {stage.number}
                </span>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#d7aa4a]">
                    {stage.phase}
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase">
                    {stage.title}
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/40">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS ERA */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Where We Are Now
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-tight md:text-7xl">
            Welcome to the
            <br />
            <span className="text-[#d7aa4a]">Founders Era.</span>
          </h2>

          <p className="mt-10 max-w-3xl text-sm leading-8 text-white/50 md:text-base">
            This is Stage One. The club is establishing its identity,
            community and digital foundation. The people who join now become
            part of the earliest chapter of FC Cairo City.
          </p>

          <a
            href="/join"
            className="mt-9 inline-flex bg-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white"
          >
            Enter The Founders Era
          </a>
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="border-t border-white/10 bg-[#06111c]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            The Principle
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-7xl">
            Build it
            <br />
            <span className="text-white/30">properly.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/45">
            FC Cairo City's journey will be measured not only by where the
            club eventually arrives, but by the quality of every foundation
            built along the way.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            The Next Step
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-7xl">
            The journey
            <br />
            <span className="text-[#d7aa4a]">continues.</span>
          </h2>

          <a
            href="/first-team"
            className="mt-9 inline-flex border border-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c]"
          >
            Explore Football
          </a>
        </div>
      </section>
    </main>
  );
}