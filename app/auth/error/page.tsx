import Link from "next/link";
import { Suspense } from "react";

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;

  return (
    <p className="text-sm leading-7 text-white/50">
      {params?.error
        ? `Code error: ${params.error}`
        : "An unspecified authentication error occurred."}
    </p>
  );
}

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#06111c] px-6 text-white">
      <section className="flex min-h-screen items-center justify-center py-20">
        <div className="w-full max-w-md border border-white/10 bg-[#081724] p-8 md:p-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Authentication
          </p>

          <h1 className="mt-5 text-3xl font-black uppercase leading-tight md:text-4xl">
            Something
            <br />
            went wrong.
          </h1>

          <div className="mt-7 border-t border-white/10 pt-6">
            <Suspense
              fallback={
                <p className="text-sm text-white/40">
                  Checking authentication status...
                </p>
              }
            >
              <ErrorContent searchParams={searchParams} />
            </Suspense>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/auth/login"
              className="inline-flex justify-center border border-[#d7aa4a] px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:bg-[#d7aa4a] hover:text-[#06111c]"
            >
              Back To Sign In
            </Link>

            <Link
              href="/"
              className="inline-flex justify-center border border-white/10 px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 transition hover:border-white/30 hover:text-white"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}