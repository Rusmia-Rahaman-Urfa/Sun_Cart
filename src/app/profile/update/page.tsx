"use client";

import { useEffect, useState } from "react";
import { useSession, updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Image as ImageIcon, Save } from "lucide-react";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login?redirect=/profile/update");
    }
    if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
      setPreview(session.user.image || "");
    }
  }, [session, isPending, router]);

  const handleImageChange = (url: string) => {
    setImage(url);
    setPreview(url);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    setLoading(true);
    try {
      const result = await updateUser({ name, image: image || undefined });
      if (result.error) {
        toast.error(result.error.message || "Update failed");
      } else {
        toast.success("Profile updated successfully! ✨");
        router.push("/profile");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-accent text-5xl sm:text-7xl tracking-widest text-yellow-100 mb-2">
            UPDATE <span className="gradient-text">PROFILE</span>
          </h1>
          <p className="text-yellow-100/50">Refresh your SunCart identity</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-yellow-100/60 hover:text-yellow-400 transition-colors mb-6 text-sm"
        >
          <ArrowLeft size={16} /> Back to Profile
        </Link>

        <div className="glass border border-yellow-500/15 rounded-2xl p-8 animate__animated animate__fadeIn">
          {/* Avatar Preview */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {preview ? (
                <Image
                  src={preview}
                  alt="Profile preview"
                  width={100}
                  height={100}
                  className="rounded-full object-cover ring-4 ring-yellow-400/30"
                  onError={() => setPreview("")}
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl font-bold text-black ring-4 ring-yellow-400/30">
                  {name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-yellow-400 rounded-full flex items-center justify-center">
                <ImageIcon size={12} className="text-black" />
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-yellow-300/70 uppercase tracking-widest mb-2">
                Full Name
              </label>
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

            {/* Image URL */}
            <div>
              <label className="block text-xs font-semibold text-yellow-300/70 uppercase tracking-widest mb-2">
                Profile Photo URL
              </label>
              <div className="relative">
                <ImageIcon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-yellow-400/40" />
                <input
                  type="url"
                  value={image}
                  onChange={(e) => handleImageChange(e.target.value)}
                  placeholder="https://example.com/your-photo.jpg"
                  className="w-full bg-yellow-400/5 border border-yellow-500/15 rounded-xl pl-10 pr-4 py-3 text-sm text-yellow-100 placeholder-yellow-100/25 focus:border-yellow-400/50 transition-colors"
                />
              </div>
              <p className="text-yellow-100/30 text-xs mt-1">Paste a direct image URL (e.g. from Postimg or Imgur)</p>
            </div>

            {/* Current info */}
            <div className="bg-yellow-400/5 border border-yellow-500/10 rounded-xl p-4">
              <p className="text-yellow-100/40 text-xs uppercase tracking-widest mb-2">Current Email</p>
              <p className="text-yellow-100/70 text-sm">{session.user.email}</p>
              <p className="text-yellow-100/30 text-xs mt-1">Email cannot be changed</p>
            </div>

            <div className="flex gap-3 pt-2">
              <Link
                href="/profile"
                className="flex-1 py-3 rounded-xl border border-yellow-500/15 text-yellow-100/60 hover:text-yellow-100 hover:border-yellow-400/30 transition-all text-sm font-medium text-center"
              >
                Cancel
              </Link>
              <button
                onClick={handleUpdate}
                disabled={loading || !name.trim()}
                className="flex-2 flex-1 btn-sun py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 relative z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-black/50 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Save size={15} />
                    Update Information
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}