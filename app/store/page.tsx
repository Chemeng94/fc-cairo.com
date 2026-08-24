const products = [
  {
    category: "FOUNDERS COLLECTION",
    name: "FCC 2026 Founders Jersey",
    description:
      "The first official chapter of FC Cairo City. A symbol of the beginning.",
  },
  {
    category: "APPAREL",
    name: "FCC City Training Top",
    description:
      "A clean, modern training piece inspired by the colours of Cairo.",
  },
  {
    category: "SUPPORTERS",
    name: "FCC Founders Scarf",
    description:
      "Carry the colours of the club from the first day forward.",
  },
  {
    category: "ACCESSORIES",
    name: "FCC Signature Cap",
    description:
      "Everyday Cairo style with the identity of FC Cairo City.",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(215,170,74,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Official Store
          </p>

          <h1 className="mt-6 max-w-6xl text-6xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-8xl md:text-[9rem]">
            Wear
            <br />
            <span className="text-[#d7aa4a]">the</span>
            <br />
            beginning.
          </h1>

          <p className="mt-10 max-w-2xl text-sm leading-8 text-white/55 md:text-base">
            The FCC Store begins with the people who believe in the club
            before the stadium exists. The 2026 Founders Collection is the
            first physical expression of the FC Cairo City identity.
          </p>

          <div className="mt-8 inline-flex border border-[#d7aa4a]/30 px-5 py-3">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#d7aa4a]">
              2026 · Founding Year
            </span>
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section className="border-b border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
                More Than Merchandise
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
                You are not
                <br />
                buying the past.
                <br />
                <span className="text-[#d7aa4a]">
                  You are wearing the future.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-white/50">
              Every early supporter becomes part of the story. Today's
              Founders Collection can become tomorrow's reminder of where FC
              Cairo City began.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#06111c]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            The Collection
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            FCC 2026
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="group border border-white/10 bg-[#081724] p-7 transition hover:border-[#d7aa4a]/50 md:p-9"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-[#0b1c2b]">
                  <div className="text-center">
                    <div className="text-5xl font-black tracking-[-0.05em] text-[#d7aa4a]/20">
                      FCC
                    </div>

                    <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                      Product Visual
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d7aa4a]">
                    {product.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {product.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Coming Soon
                    </span>

                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#d7aa4a]">
                      Founders 2026
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-white/10 bg-[#081724]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            The Bigger Picture
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-tight md:text-7xl">
            From the first
            <br />
            <span className="text-white/30">supporter</span>
            <br />
            to the first
            <br />
            <span className="text-[#d7aa4a]">stadium.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-sm leading-8 text-white/50">
            The FCC Store is part of the club's long-term journey. It starts
            digitally, becomes physical, builds supporter culture and helps
            create the commercial foundation for the club we ultimately want
            to establish.
          </p>
        </div>
      </section>
    </main>
  );
}