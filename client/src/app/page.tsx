'use client';

import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream via-soft-mint/20 to-sky-blue/10 relative overflow-hidden">
      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">
          🌱
        </div>
        <div
          className="absolute top-40 right-20 text-5xl animate-float opacity-20"
          style={{ animationDelay: '1s' }}
        >
          📚
        </div>
        <div
          className="absolute bottom-20 left-10 text-4xl animate-float opacity-20"
          style={{ animationDelay: '2s' }}
        >
          💧
        </div>
        <div
          className="absolute bottom-20 right-10 text-6xl animate-float opacity-20"
          style={{ animationDelay: '0.5s' }}
        >
          🌻
        </div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="font-display text-5xl font-bold text-leaf-green mb-2 flex items-center justify-center gap-3">
              BookSprouts <span className="text-6xl animate-float">🌱</span>
            </h1>
            <p className="font-body text-xl text-dark-slate/70">
              Where Reading Grows!
            </p>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lifted border-4 border-warm-cream">
            <form action="" className="block ">
              {/* Email */}
              <div className="mb-4">
                <label className="font-body text-sm font-semibold text-dark-slate mb-2 block">
                  👤 Username
                </label>
                <input
                  className="w-full bg-white border-3 border-gray-200 rounded-2xl px-5 py-4 font-body text-lg focus:outline-none focus:border-leaf-green focus:shadow-glow-green transition-all"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              {/* Password */}
              <div className="mb-4 relative">
                <label className="font-body text-sm font-semibold text-dark-slate mb-2 block">
                  🔒 Password
                </label>
                <input
                  className="w-full bg-white border-3 border-gray-200 rounded-2xl px-5 py-4 font-body text-lg focus:outline-none focus:border-leaf-green focus:shadow-glow-green transition-all pr-14"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-12 text-gray-500 hover:text-leaf-green transition-colors"
                  onClick={handleToggle}
                >
                  {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
                </button>
              </div>

              {/* Demo Account */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-500/90 rounded-[32px] py-4 mb-4 text-white font-bold text-xl shadow-lg shadow-green-500/30 active:scale-98 transition-transform">
                <span className="font-display text-base font-bold text-white flex items-center justify-center gap-2">
                  🎮 Try Demo Account
                </span>
              </button>

              {/* Signin */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-500/90 rounded-[32px] py-4 text-white font-bold text-xl shadow-lg shadow-green-500/30 active:scale-98 transition-transform"
              >
                <span className="font-display">🌿 Let&apos;s Grow!</span>
              </button>
            </form>
          </div>

          {/* Signup */}
          <div className="text-center mt-6">
            <p className="font-body text-dark-slate">
              New here?{' '}
              <button className="font-semibold text-leaf-green cursor-pointer">
                Create an account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
