import Link from "next/link";

export default function UpdatePasswordPage() {
  return (
    <main className="min-h-screen bg-[#06111c] text-white">
      <section className="flex min-h-screen items-center justify-center px-6 py-20">
        <div className="w-full max-w-md">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-[#d7aa4a]">
            FC Cairo City · Supporter Account
          </p>

          <h1 className="mt-5 text-center text-4xl font-black uppercase md:text-5xl">
            Create a new
            <br />
            <span className="text-[#d7aa4a]">password.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-sm text-center text-sm leading-7 text-white/45">
            Choose a new password for your FC Cairo City supporter account.
          </p>

          <div className="mt-10 border border-white/10 bg-[#081724] p-7">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="password"
                  className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50"
                >
                  New Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter new password"
                  required
                  className="mt-2 w-full border border-white/10 bg-[#06111c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7aa4a]"
                />
              </div>

              <div>
                <label
                  htmlFor="confirm-password"
                  className="text-[9px] font-black uppercase tracking-[0.25em] text-white/50"
                >
                  Confirm Password
                </label>

                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  required
                  className="mt-2 w-full border border-white/10 bg-[#06111c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d7aa4a]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d7aa4a] px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-[#06111c] transition hover:bg-white"
              >
                Update Password
              </button>
            </form>

            <div className="mt-7 border-t border-white/10 pt-6 text-center">
              <Link
                href="/auth/login"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#d7aa4a] transition hover:text-white"
              >
                Back To Sign In
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