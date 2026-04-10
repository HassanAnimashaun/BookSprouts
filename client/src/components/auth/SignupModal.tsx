'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import ProgressBar from '../ui/ProgressBar';

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function SignupModal({ open, setOpen }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlPasswordToggle = () => {
    setShowPassword((prev) => !prev);
  };
  const handleComfirmToggle = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        {/* Overaly */}
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />

        {/* Modal */}
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed top-1/2 left-1/2 w-[420px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-xl focus:outline-none"
        >
          <div>
            <h1 className="font-display text-xl font-bold text-leaf-green mb-2 flex items-left">
              Join BookSprouts!🌱
            </h1>
            <div className="w-full bg-neutral-guaternary rounded-full h-2">
              <ProgressBar />
            </div>
          </div>

          <Dialog.Title className="text-2xl font-bold text-leaf-green mb-6 text-center"></Dialog.Title>
          <form action="" className="block">
            {/* Username */}
            <div className="mb-4">
              <label className="font-body text-sm font-semibold text-dark-slate mb-2 block">
                👤 Full Name
              </label>
              <input
                className="w-full bg-white border-3 border-gray-200 rounded-2xl px-5 py-4 font-body text-lg focus:outline-none focus:border-leaf-green focus:shadow-glow-green transition-all"
                type="text"
                name="fname"
                placeholder="Jane Smith"
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="font-body text-sm font-semibold text-dark-slate mb-2 block">
                ✉️ Email
              </label>
              <input
                className="w-full bg-white border-3 border-gray-200 rounded-2xl px-5 py-4 font-body text-lg focus:outline-none focus:border-leaf-green focus:shadow-glow-green transition-all"
                type="email"
                name="email"
                placeholder="janesmith@test.com"
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
                placeholder=""
                autoComplete="current-password"
              />

              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-4 top-12 text-gray-500 hover:text-leaf-green transition-colors"
                onClick={handlPasswordToggle}
              >
                {showPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
            {/*Confirm  Password */}
            <div className="mb-4 relative">
              <label className="font-body text-sm font-semibold text-dark-slate mb-2 block">
                🔒 Password
              </label>
              <input
                className="w-full bg-white border-3 border-gray-200 rounded-2xl px-5 py-4 font-body text-lg focus:outline-none focus:border-leaf-green focus:shadow-glow-green transition-all pr-14"
                type={showConfirmPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                autoComplete="current-password"
              />

              <button
                type="button"
                aria-label={
                  showConfirmPassword ? 'Hide password' : 'Show password'
                }
                className="absolute right-4 top-12 text-gray-500 hover:text-leaf-green transition-colors"
                onClick={handleComfirmToggle}
              >
                {showConfirmPassword ? <Eye size={22} /> : <EyeOff size={22} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-500/90 rounded-[32px] py-4 text-white font-bold text-xl shadow-lg shadow-green-500/30 active:scale-98 transition-transform"
            >
              <span className="font-display">Continue 🌱</span>
            </button>
          </form>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-black">
              ✕
            </button>
          </Dialog.Close>

          <div className="mt-5 p-4 bg-warm-cream rounded-2xl">
            <p className="font-body text-xs text-center">
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
