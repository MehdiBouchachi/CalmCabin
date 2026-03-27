import { Link, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  const moveBack = () => navigate(-1);

  return (
    <main className="min-h-screen bg-warm-25 text-night-700 transition-colors duration-300 dark:bg-night-950 dark:text-night-200">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <section className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white/80 px-4 py-2 text-sm font-medium text-night-600 shadow-sm backdrop-blur-sm dark:border-night-800 dark:bg-night-900/70 dark:text-night-300">
              <span className="h-2 w-2 rounded-full bg-forest-500 dark:bg-forest-400" />
              Page not found
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-forest-700 dark:text-forest-300">
              Error 404
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-night-900 sm:text-5xl lg:text-6xl dark:text-white">
              The page you are looking for does not exist.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-night-500 sm:text-lg dark:text-night-300">
              The link may be broken, the page may have been moved, or the URL
              may be incorrect. You can return to the homepage or go back to the
              previous page.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-2xl bg-forest-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2 focus:ring-offset-warm-25 dark:bg-forest-500 dark:hover:bg-forest-400 dark:focus:ring-offset-night-950"
              >
                Back to Home
              </Link>

              <button
                type="button"
                onClick={moveBack}
                className="inline-flex items-center justify-center rounded-2xl border border-warm-200 bg-white px-5 py-3 text-sm font-semibold text-night-700 shadow-sm transition hover:bg-warm-50 focus:outline-none focus:ring-2 focus:ring-night-300 focus:ring-offset-2 focus:ring-offset-warm-25 dark:border-night-800 dark:bg-night-900 dark:text-night-100 dark:hover:bg-night-800 dark:focus:ring-night-700 dark:focus:ring-offset-night-950"
              >
                Go Back
              </button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-warm-200 bg-white p-4 shadow-sm dark:border-night-800 dark:bg-night-900">
                <p className="text-sm font-medium text-night-900 dark:text-white">
                  Check the URL
                </p>
                <p className="mt-2 text-sm leading-6 text-night-500 dark:text-night-300">
                  Make sure the address is typed correctly.
                </p>
              </div>

              <div className="rounded-2xl border border-warm-200 bg-white p-4 shadow-sm dark:border-night-800 dark:bg-night-900">
                <p className="text-sm font-medium text-night-900 dark:text-white">
                  Return home
                </p>
                <p className="mt-2 text-sm leading-6 text-night-500 dark:text-night-300">
                  Start again from the main page.
                </p>
              </div>

              <div className="rounded-2xl border border-warm-200 bg-white p-4 shadow-sm dark:border-night-800 dark:bg-night-900">
                <p className="text-sm font-medium text-night-900 dark:text-white">
                  Navigate back
                </p>
                <p className="mt-2 text-sm leading-6 text-night-500 dark:text-night-300">
                  Return to the last working page.
                </p>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-warm-200 bg-gradient-to-br from-white via-warm-50 to-forest-50 p-8 shadow-[0_20px_60px_-20px_rgba(29,36,45,0.18)] dark:border-night-800 dark:from-night-900 dark:via-night-900 dark:to-night-800">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,155,106,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(196,180,158,0.2),transparent_35%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(143,183,143,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(61,71,89,0.35),transparent_35%)]" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-night-500 dark:text-night-300">
                      Resource status
                    </p>
                    <p className="mt-1 text-3xl font-semibold tracking-tight text-night-900 dark:text-white">
                      Not Found
                    </p>
                  </div>

                  <div className="rounded-2xl border border-forest-200 bg-forest-100 px-3 py-2 text-sm font-semibold text-forest-800 dark:border-forest-900/50 dark:bg-forest-900/40 dark:text-forest-200">
                    404
                  </div>
                </div>

                <div className="mt-10 grid gap-4">
                  <div className="rounded-2xl border border-warm-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-night-800 dark:bg-night-950/50">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-night-400 dark:text-night-500">
                          Requested page
                        </p>
                        <p className="mt-2 text-sm text-night-700 dark:text-night-200">
                          This route is unavailable or no longer exists.
                        </p>
                      </div>
                      <div className="h-3 w-3 rounded-full bg-forest-500 shadow-[0_0_0_6px_rgba(106,155,106,0.16)] dark:bg-forest-400 dark:shadow-[0_0_0_6px_rgba(143,183,143,0.12)]" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-warm-200/80 bg-white/80 p-5 backdrop-blur-sm dark:border-night-800 dark:bg-night-950/50">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-night-400 dark:text-night-500">
                      Suggested action
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-warm-100 dark:bg-night-800" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-night-900 dark:text-white">
                          Return to a valid route
                        </p>
                        <p className="mt-1 text-sm text-night-500 dark:text-night-300">
                          Use the homepage or browser history to continue.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-warm-300 bg-warm-25/80 p-5 dark:border-night-700 dark:bg-night-900/30">
                    <p className="font-mono text-sm text-night-500 dark:text-night-300">
                      /404
                    </p>
                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-warm-100 dark:bg-night-800">
                      <div className="h-full w-2/3 rounded-full bg-forest-500 dark:bg-forest-400" />
                    </div>
                    <p className="mt-3 text-sm text-night-500 dark:text-night-300">
                      Route check completed — no matching page found.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm text-night-500 dark:text-night-300">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-forest-500 dark:bg-forest-400" />
                  Clean, minimal fallback screen aligned with your warm / forest
                  / night palette
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
