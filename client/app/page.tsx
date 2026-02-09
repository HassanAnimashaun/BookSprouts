export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold text-emerald-700">🌱 BookSprouts</h1>
      <p className="text-lg text-gray-600 text-center max-w-md">
        Help kids build a daily reading habit with rewards, streaks, and fun.
      </p>
      <button className="rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700">
        Start Reading
      </button>
    </main>
  );
}
