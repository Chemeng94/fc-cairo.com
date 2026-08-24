const benefits = [
  {
    number: "01",
    title: "Founders Identity",
    description:
      "Become part of the earliest generation of people who helped give FC Cairo City its identity.",
  },
  {
    number: "02",
    title: "Inside The Journey",
    description:
      "Follow the club as it moves from digital foundations toward its physical football future.",
  },
  {
    number: "03",
    title: "Supporter Community",
    description:
      "Connect with people who believe in the project and want to help shape the culture around it.",
  },
];

export default function Join() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(215,170,74,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Founders Era
          </p>

          <h1 className="mt-6 max-w-5xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.05em] sm:text-8xl md:text-[8rem]">
            Enter the
            <br />
            <span className="text-[#d7aa4a]">Founders Era.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
            FC Cairo City begins before the stadium, before the first league
            match and before the first generation of players takes the field.
            This is the beginning.
          </p>

          <a
            href="#founders"
            className="mt-9 inline-flex bg-[#d7aa4a] px-7 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white"
          >
            Become a Founder
          </a>
        </div>
      </section>

      {/* FOUNDERS MESSAGE */}
      <section
        id="founders"
        className="border-b border-white/10 bg-[#081724]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                Why Join Now
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                The earliest
                <br />
                supporters
                <br />
                <span className="text-white/30">matter most.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-white/50">
              Joining FC Cairo City at this stage means becoming part of the
              story while it is still being written. The Founders Era is about
              building identity, community and belief before the physical club
              arrives.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Your Place In The Club
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="border border-white/10 bg-[#081724] p-8 transition hover:border-[#d7aa4a]/50"
              >
                <span className="text-4xl font-black text-[#d7aa4a]/30">
                  {benefit.number}
                </span>

                <h3 className="mt-8 text-2xl font-black uppercase">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            Founders Registration
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase md:text-6xl">
            Get inside
            <br />
            the beginning.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45">
            The registration system will connect supporters to the FCC
            community and future Founders Era experiences.
          </p>

          <a
            href="/auth/sign-up"
            className="mt-9 inline-flex border border-[#d7aa4a] px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c]"
          >
            Register For FCC
          </a>
        </div>
      </section>

    </main>
  );
}