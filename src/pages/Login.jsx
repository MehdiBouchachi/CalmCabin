import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  LogIn,
  Trees,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { useApp } from "../context/AppContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { login, user } = useApp();
  const navigate = useNavigate();

  function validate() {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      login(email);
      setSubmitted(true);
      setTimeout(() => navigate("/"), 1500);
    }
  }

  // Already signed in
  if (user && !submitted) {
    return (
      <div className="flex min-h-[65vh] items-center justify-center px-5">
        <div className="w-full max-w-sm rounded-2xl border border-warm-200/80 bg-white p-10 text-center shadow-sm dark:border-night-700/60 dark:bg-night-800/40">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-600 dark:bg-forest-900/20 dark:text-forest-400">
            <CheckCircle size={28} />
          </div>
          <h2 className="text-xl font-bold text-night-800 dark:text-white">
            You&apos;re signed in
          </h2>
          <p className="mt-2 text-[0.875rem] text-night-400 dark:text-night-400">
            Welcome back,{" "}
            <span className="font-semibold text-night-600 dark:text-night-200">
              {user.email}
            </span>
          </p>
          <Link
            to="/cabins"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-6 py-3 text-[0.875rem] font-semibold text-white transition-all hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-600"
          >
            Browse Cabins
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-5 py-16 sm:py-24">
      <div className="w-full max-w-[26rem]">
        {/* Card */}
        <div className="rounded-2xl border border-warm-200/80 bg-white p-8 shadow-xl shadow-night-900/[0.04] sm:p-10 dark:border-night-700/60 dark:bg-night-800/50 dark:shadow-night-950/30">
          {/* Logo & heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-lg shadow-forest-600/20 dark:bg-forest-500">
              <Trees size={22} strokeWidth={2.2} />
            </div>
            <h1 className="text-[1.5rem] font-bold tracking-tight text-night-800 dark:text-white">
              Welcome back
            </h1>
            <p className="mt-1.5 text-[0.875rem] text-night-400 dark:text-night-400">
              Sign in to your CalmCabin account
            </p>
          </div>

          {/* Success state */}
          {submitted && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-forest-50 p-4 dark:bg-forest-900/20">
              <CheckCircle
                size={18}
                className="shrink-0 text-forest-600 dark:text-forest-400"
              />
              <p className="text-[0.8125rem] font-medium text-forest-800 dark:text-forest-300">
                Signed in successfully! Redirecting…
              </p>
            </div>
          )}

          {/* Form */}
          {!submitted && (
            <form onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-[0.8125rem] font-semibold text-night-700 dark:text-night-300"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Mail
                      size={16}
                      className="text-night-300 dark:text-night-500"
                    />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email)
                        setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border py-3 pl-11 pr-4 text-[0.875rem] outline-none transition-all duration-200 placeholder:text-night-300 dark:placeholder:text-night-600 ${
                      errors.email
                        ? "border-red-300 bg-red-50/50 text-red-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-red-800/50 dark:bg-red-950/10 dark:text-red-300 dark:focus:ring-red-900/20"
                        : "border-warm-200 bg-warm-50/40 text-night-800 focus:border-forest-400 focus:bg-white focus:ring-2 focus:ring-forest-100 dark:border-night-600 dark:bg-night-700/30 dark:text-night-200 dark:focus:border-forest-600 dark:focus:bg-night-800 dark:focus:ring-forest-900/20"
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] font-medium text-red-600 dark:text-red-400">
                    <AlertCircle size={13} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="mb-2 block text-[0.8125rem] font-semibold text-night-700 dark:text-night-300"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <Lock
                      size={16}
                      className="text-night-300 dark:text-night-500"
                    />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password)
                        setErrors((prev) => ({ ...prev, password: undefined }));
                    }}
                    placeholder="••••••••"
                    className={`w-full rounded-xl border py-3 pl-11 pr-4 text-[0.875rem] outline-none transition-all duration-200 placeholder:text-night-300 dark:placeholder:text-night-600 ${
                      errors.password
                        ? "border-red-300 bg-red-50/50 text-red-900 focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-red-800/50 dark:bg-red-950/10 dark:text-red-300 dark:focus:ring-red-900/20"
                        : "border-warm-200 bg-warm-50/40 text-night-800 focus:border-forest-400 focus:bg-white focus:ring-2 focus:ring-forest-100 dark:border-night-600 dark:bg-night-700/30 dark:text-night-200 dark:focus:border-forest-600 dark:focus:bg-night-800 dark:focus:ring-forest-900/20"
                    }`}
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 flex items-center gap-1.5 text-[0.75rem] font-medium text-red-600 dark:text-red-400">
                    <AlertCircle size={13} />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Forgot */}
              <div className="mb-7 text-right">
                <button
                  type="button"
                  className="text-[0.75rem] font-semibold text-forest-600 transition-colors hover:text-forest-800 dark:text-forest-400 dark:hover:text-forest-300"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-forest-600 py-3.5 text-[0.875rem] font-bold text-white shadow-lg shadow-forest-600/20 transition-all duration-200 hover:bg-forest-700 hover:shadow-xl active:scale-[0.98] dark:bg-forest-500 dark:shadow-forest-500/15 dark:hover:bg-forest-600"
              >
                <LogIn size={17} />
                Sign in
              </button>
            </form>
          )}

          {/* Divider + sign up link */}
          {!submitted && (
            <>
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-warm-200 dark:bg-night-700" />
                <span className="text-[0.6875rem] font-medium text-night-300 dark:text-night-600">
                  or
                </span>
                <div className="h-px flex-1 bg-warm-200 dark:bg-night-700" />
              </div>

              <p className="text-center text-[0.8125rem] text-night-400 dark:text-night-400">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  className="font-bold text-forest-600 transition-colors hover:text-forest-800 dark:text-forest-400 dark:hover:text-forest-300"
                >
                  Create one
                </button>
              </p>
            </>
          )}
        </div>

        {/* Supabase note */}
        <p className="mt-8 text-center text-[0.6875rem] leading-relaxed text-night-300 dark:text-night-600">
          Authentication is currently simulated.
          <br />
          Connect Supabase Auth for production use.
        </p>
      </div>
    </div>
  );
}

export default Login;
