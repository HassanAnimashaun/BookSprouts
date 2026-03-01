export default function LoginPage() {
  return (
    <main className="bg-white rounded-2xl shadow-soft border border-green-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input className="mt-1 w-full rounded-lg border px-3 py-2" type="email" required />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Password</span>
          <input className="mt-1 w-full rounded-lg border px-3 py-2" type="password" required />
        </label>
        <button type="submit" className="w-full rounded-lg bg-green-600 text-white py-2 font-semibold">
          Sign in
        </button>
      </form>
    </main>
  );
}
