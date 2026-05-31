"use client";

import { useEffect } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { User, Mail, Calendar, Edit3, LogOut, Shield, ShoppingBag, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login?redirect=/profile");
    }
  }, [session, isPending, router]);

  const handleLogout = async () => {
    await signOut();
    toast.success("See you next summer! 👋");
    router.push("/");
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;
  const joinDate = new Date(user.createdAt || Date.now()).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-accent text-5xl sm:text-7xl tracking-widest text-yellow-100 mb-2">
            MY <span className="gradient-text">PROFILE</span>
          </h1>
          <p className="text-yellow-100/50">Manage your SunCart account</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="glass border border-yellow-500/15 rounded-2xl p-6 text-center animate__animated animate__fadeInLeft">
              {/* Avatar */}
              <div className="relative inline-block mb-4">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    width={100}
                    height={100}
                    className="rounded-full object-cover ring-4 ring-yellow-400/30 mx-auto"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl font-bold text-black mx-auto ring-4 ring-yellow-400/30">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-[#0f0a00]" />
              </div>

              <h2 className="font-display text-xl font-bold text-yellow-100 mb-1">{user.name}</h2>
              <p className="text-yellow-100/50 text-sm mb-4">{user.email}</p>

              {/* Verified badge */}
              {user.emailVerified && (
                <div className="inline-flex items-center gap-1.5 bg-green-900/30 border border-green-500/20 rounded-full px-3 py-1 text-xs text-green-400 mb-4">
                  <Shield size={11} />
                  Verified Account
                </div>
              )}

              {/* Actions */}
              <div className="space-y-2.5 mt-4">
                <Link
                  href="/profile/update"
                  className="w-full btn-sun py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 relative z-10"
                >
                  <Edit3 size={14} />
                  Update Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border border-red-500/20 text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <LogOut size={14} />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-5">
            {/* Account Info */}
            <div className="glass border border-yellow-500/15 rounded-2xl p-6 animate__animated animate__fadeInRight">
              <h3 className="font-display font-bold text-yellow-300 mb-5 flex items-center gap-2">
                <User size={16} className="text-yellow-400" />
                Account Information
              </h3>
              <div className="space-y-4">
                {[
                  { icon: User, label: "Full Name", value: user.name || "Not set" },
                  { icon: Mail, label: "Email Address", value: user.email },
                  { icon: Calendar, label: "Member Since", value: joinDate },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-3 bg-yellow-400/5 rounded-xl">
                    <Icon size={16} className="text-yellow-400/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-yellow-100/40 uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-yellow-100 font-medium text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass border border-yellow-500/15 rounded-2xl p-6 animate__animated animate__fadeInRight" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-display font-bold text-yellow-300 mb-5 flex items-center gap-2">
                <ShoppingBag size={16} className="text-yellow-400" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Browse Products", desc: "Explore summer essentials", href: "/products" },
                  { label: "Update Profile", desc: "Edit name & photo", href: "/profile/update" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between p-4 bg-yellow-400/5 border border-yellow-500/10 rounded-xl hover:border-yellow-400/25 hover:bg-yellow-400/8 transition-all group"
                  >
                    <div>
                      <p className="font-semibold text-yellow-100 text-sm">{item.label}</p>
                      <p className="text-yellow-100/50 text-xs mt-0.5">{item.desc}</p>
                    </div>
                    <ArrowRight size={16} className="text-yellow-400/50 group-hover:text-yellow-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}