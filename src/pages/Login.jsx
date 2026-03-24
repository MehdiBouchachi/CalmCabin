import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Trees,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useApp } from "../context/AppContext";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signInWithGoogle, user, isAuthLoading } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthLoading && user) {
      navigate("/", { replace: true });
    }
  }, [user, isAuthLoading, navigate]);

  async function handleGoogleSignIn() {
    try {
      setErrorMessage("");
      setIsSubmitting(true);
      await signInWithGoogle();
    } catch (error) {
      setErrorMessage(error.message || "Failed to sign in with Google.");
      setIsSubmitting(false);
    }
  }

  if (isAuthLoading) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center px-5 py-16 sm:py-24">
        <div className="w-full max-w-[26rem] rounded-2xl border border-warm-200/80 bg-white p-8 text-center shadow-xl shadow-night-900/[0.04] dark:border-night-700/60 dark:bg-night-800/50 dark:shadow-night-950/30 sm:p-10">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-lg shadow-forest-600/20 dark:bg-forest-500">
            <Trees size={22} strokeWidth={2.2} />
          </div>
          <p className="text-[0.875rem] text-night-400 dark:text-night-400">
            Checking your session...
          </p>
        </div>
      </div>
    );
  }

  if (user) {
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
            Welcome back,
            <span className="ml-1 font-semibold text-night-600 dark:text-night-200">
              {user.email}
            </span>
          </p>

          <Link
            to="/cabins"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-6 py-3 text-[0.875rem] font-semibold text-white transition-all hover:bg-forest-700 dark:bg-forest-500 dark:hover:bg-forest-600"
          >
            Browse Cabins
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[75vh] items-center justify-center px-5 py-16 sm:py-24">
      <div className="w-full max-w-[28rem]">
        <div className="rounded-[1.75rem] border border-warm-200/80 bg-white p-8 shadow-xl shadow-night-900/[0.04] sm:p-10 dark:border-night-700/60 dark:bg-night-800/50 dark:shadow-night-950/30">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-600 text-white shadow-lg shadow-forest-600/20 dark:bg-forest-500">
              <Trees size={22} strokeWidth={2.2} />
            </div>

            <h1 className="text-[1.65rem] font-bold tracking-tight text-night-800 dark:text-white">
              Welcome to CalmCabin
            </h1>

            <p className="mt-2 text-[0.9rem] leading-7 text-night-400 dark:text-night-400">
              Sign in with Google to save your stays, manage reservations, and
              continue your booking journey across devices.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/40 dark:bg-red-950/20">
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0 text-red-600 dark:text-red-400"
              />
              <p className="text-[0.8125rem] font-medium text-red-700 dark:text-red-300">
                {errorMessage}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-3 rounded-2xl border border-warm-200 bg-white px-5 py-3.5 text-[0.95rem] font-semibold text-night-800 shadow-sm transition-all duration-200 hover:border-warm-300 hover:bg-warm-25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 dark:border-night-700 dark:bg-night-900/70 dark:text-white dark:hover:border-night-600 dark:hover:bg-night-900"
          >
            <GoogleMark />
            {isSubmitting ? "Redirecting to Google..." : "Continue with Google"}
          </button>

          <div className="my-7 h-px bg-warm-200 dark:bg-night-700" />

          <div className="grid gap-3">
            <FeatureRow
              icon={<ShieldCheck size={16} />}
              text="Secure authentication powered by Supabase Auth"
            />
            <FeatureRow
              icon={<Sparkles size={16} />}
              text="Faster sign-in with a cleaner booking experience"
            />
          </div>
        </div>

        <p className="mt-8 text-center text-[0.6875rem] leading-relaxed text-night-300 dark:text-night-600">
          Google sign-in requires the Google provider to be enabled in Supabase
          and your app URL to be added to the redirect allow list.
        </p>
      </div>
    </div>
  );
}

function FeatureRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-warm-50/70 px-4 py-3 dark:bg-night-900/50">
      <div className="text-forest-600 dark:text-forest-400">{icon}</div>
      <p className="text-[0.8rem] text-night-500 dark:text-night-300">{text}</p>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.655 32.657 29.195 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.85 1.154 7.961 3.039l5.657-5.657C34.053 6.053 29.28 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.85 1.154 7.961 3.039l5.657-5.657C34.053 6.053 29.28 4 24 4c-7.682 0-14.347 4.337-17.694 10.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.178 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.153 35.091 26.715 36 24 36c-5.174 0-9.626-3.329-11.291-7.946l-6.522 5.025C9.5 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.094 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.651-.389-3.917z"
      />
    </svg>
  );
}

export default Login;
