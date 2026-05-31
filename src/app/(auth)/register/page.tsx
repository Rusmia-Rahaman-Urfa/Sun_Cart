"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp, signIn } from "@/lib/auth-client";
import { Sun, Eye, EyeOff, Mail, Lock, User, Image as ImageIcon } from "lucide-react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    try {
      const result = await signUp.email({
        name,
        email,
        password,
        image: photoUrl || undefined,
        callbackURL: "/",
      });
      if (result.error) {
        toast.error(result.error.message || "Registration failed");
      } else {
        toast.success("Account created! Please log in ☀️");
        router.push("/login");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      await signIn.social({ provider: "google", callbackURL: "/" });
    } catch {
      toast.error("Google sign-in failed. Please try again.");
      setGoogleLoading(false);
    }
  };

  return (
    <div className="glass border border-yellow-500/15 rounded-3xl p-8 sm:p-10 animate__animated animate__fadeIn">
      {/* Header */}
      <div className="text-center mb-7">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sun size={36} className="text-yellow-400" fill="rgba(251,191,36,0.2)" />
        </div>
        <h1 className="font-display text-3xl font-bold text-yellow-100 mb-2">Create Account</h1>
        <p className="text-yellow-100/50 text-sm">Join the SunCart community today</p>
      </div>

      {/* Google SSO */}
      <button
        onClick={handleGoogle}
        disabled={googleLoading}
        className="w-full glass border border-yellow-500/15 hover:border-yellow-400/30 rounded-xl py-3 px-4 flex items-center justify-center gap-3 text-sm font-medium text-yellow-100/80 hover:text-yellow-100 transition-all duration-200 mb-5 disabled:opacity-50"
      >
        {googleLoading ? (
          <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        )}
        Continue with Google
      </button>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-yellow-500/15" />
        <span className="text-yellow-100/30 text-xs">or register with email</span>
        <div className="flex-1 h-px bg-yellow-500/15" />
      </div>

      {/* Form */}
      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-xs font-semibold text-yellow-300/70 uppercase tracking-widest mb-2">Name</label>
          <div className="relative">
            <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-yellow-400/40" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              required
              className="w-full bg-yellow-400/5 border border-yellow-500/15 rounded-xl pl-10 pr-4 py-3 text-sm text-yellow-100 placeholder-yellow-100/25 focus:border-yellow-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-yellow-300/70 uppercase tracking-widest mb-2">Email</label>
          <div className="relative">
            <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-yellow-400/40" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full bg-yellow-400/5 border border-yellow-500/15 rounded-xl pl-10 pr-4 py-3 text-sm text-yellow-100 placeholder-yellow-100/25 focus:border-yellow-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Photo URL */}
        <div>
          <label className="block text-xs font-semibold text-yellow-300/70 uppercase tracking-widest mb-2">
            Photo URL <span className="text-yellow-100/30 normal-case font-normal">(optional)</span>
          </label>
          <div className="relative">
            <ImageIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-yellow-400/40" />
            <input
              type="url"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full bg-yellow-400/5 border border-yellow-500/15 rounded-xl pl-10 pr-4 py-3 text-sm text-yellow-100 placeholder-yellow-100/25 focus:border-yellow-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-semibold text-yellow-300/70 uppercase tracking-widest mb-2">Password</label>
          <div className="relative">
            <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-yellow-400/40" />
            <input
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min. 6 characters"
              required
              className="w-full bg-yellow-400/5 border border-yellow-500/15 rounded-xl pl-10 pr-10 py-3 text-sm text-yellow-100 placeholder-yellow-100/25 focus:border-yellow-400/50 transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-yellow-400/40 hover:text-yellow-400 transition-colors"
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        <button
          onClick={handleRegister}
          disabled={loading || !name || !email || !password}
          className="w-full btn-sun py-3.5 rounded-xl font-bold text-base relative z-10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-black/50 border-t-transparent rounded-full animate-spin" />
              Creating account…
            </>
          ) : (
            "Register"
          )}
        </button>
      </div>

      <p className="text-center text-yellow-100/50 text-sm mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
          Login
        </Link>
      </p>
    </div>
  );
}