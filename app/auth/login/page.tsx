"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/protected");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      <section className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Founders Era
          </p>

          <h1 className="mt-5 text-center text-4xl font-black uppercase md:text-5xl">
            Welcome
            <br />
            <span className="text-[#d7aa4a]">back.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-7 text-white/45">
            Sign in to your FC Cairo City supporter account.
          </p>

          <div className="mt-10 border border-white/10 bg-[#081724] p-7">
            <form onSubmit={handleLogin} className="space-y-5">
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50"
                  >
                    Password
                  </label>

                  <Link
                    href="/auth/forgot-password"
                    className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#d7aa4a] transition hover:text-white"
                  >
                    Forgot Password
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Your password"
                  required
                  className="mt-2 w-full border border-white/10 bg-[#06111c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7aa4a]"
                />
              </div>

              {error && (
                <div className="border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs leading-5 text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#d7aa4a] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Signing In..." : "Sign In To FCC"}
              </button>
            </form>

            <div className="mt-7 border-t border-white/10 pt-6 text-center">
              <p className="text-xs text-white/35">
                Not part of the club yet?
              </p>

              <Link
                href="/auth/sign-up"
                className="mt-2 inline-block text-[10px] font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:text-white"
              >
                Enter The Founders Era
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