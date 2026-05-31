"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "../lib/auth-client";
import { Menu, X, Sun, LogOut, User, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("See you next summer! 👋");
      router.push("/");
      setDropdownOpen(false);
    } catch (error) {
      toast.error("Logout failed. Try again.");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Sun size={32} className="text-yellow-400 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-bold text-2xl tracking-widest text-yellow-400 sun-glow">SUNCART</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-yellow-100/80 hover:text-yellow-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-yellow-400/20 animate-pulse" />
            ) : session?.user ? (
              <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 glass-warm rounded-full px-3 py-1.5">
                  {session.user.image ? (
                    <Image src={session.user.image} alt="User" width={32} height={32} className="rounded-full" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
                      {session.user.name?.charAt(0)}
                    </div>
                  )}
                  <ChevronDown size={14} className={dropdownOpen ? "rotate-180" : ""} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass rounded-xl overflow-hidden border border-yellow-500/20">
                    <Link href="/profile" className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-yellow-400/10">
                      <User size={14} /> Profile
                    </Link>
                    <button onClick={handleLogout} className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10">
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="btn-sun px-6 py-2 rounded-full text-sm">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}