import Link from "next/link";
import { Sun } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl mb-4 animate-float inline-block">🌞</div>
        <h1 className="font-accent text-8xl tracking-widest gradient-text mb-4">404</h1>
        <h2 className="font-display text-2xl text-yellow-100 mb-3">Page Not Found</h2>
        <p className="text-yellow-100/50 mb-8 max-w-sm mx-auto">
          Looks like this page got swept away by the tide. Let&apos;s get you back to shore.
        </p>
        <Link href="/" className="btn-sun px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 relative z-10">
          <Sun size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}