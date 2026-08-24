"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignUpPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/auth/sign-up-success");
  }

  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      <section className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Founders Era
          </p>

          <h1 className="mt-5 text-center text-4xl font-black uppercase md:text-5xl">
            Enter the
            <br />
            <span className="text-[#d7aa4a]">Founders Era.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-7 text-white/45">
            Create your FCC supporter account and become part of the club from
            the beginning.
          </p>

          <div className="mt-10 border border-white/10 bg-[#081724] p-7">
            <form onSubmit={handleSignUp} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="mt-2 w-full border border-white/10 bg-[#06111c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7aa4a]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Create a password"
                  required
                  minLength={6}
                  className="mt-2 w-full border border-white/10 bg-[#06111c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7aa4a]"
                />
              </div>

              {error && (
                <p className="border border-red-500/20 bg-red-500/10 p-3 text-xs text-red-300">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d7aa4a] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create FCC Account"}
              </button>
            </form>

            <div className="mt-7 border-t border-white/10 pt-6 text-center">
              <p className="text-xs text-white/35">
                Already part of the club?
              </p>

              <Link
                href="/auth/login"
                className="mt-2 inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:text-white"
              >
                Sign In
              </Link>
            </div>
          </div>

          <div className="mt-7 text-center">
            <Link
              href="/"
              className="text-[9px] font-black uppercase tracking-[0.25em] text-white/30 transition hover:text-[#d7aa4a]"
            >
              Return To FC Cairo City
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}