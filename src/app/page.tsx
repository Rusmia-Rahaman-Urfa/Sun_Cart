
import products from "../lib/products.json";
import ProductCard from "../components/ProductCard";
import { Sun, Droplets, ShieldCheck } from "lucide-react";

export default function Home() {
  const popularProducts = products.slice(0, 3); // Requirement 3: Show any 3 products

  return (
    <main>

      {/* Popular Products Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-black uppercase mb-10 text-center">
          Popular <span className="text-orange-500">Products</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Extra Section 1: Summer Care Tips (Requirement 3) */}
      <section className="bg-orange-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black uppercase mb-8">Summer Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <Sun className="mx-auto text-orange-500 mb-2" />
              <h4 className="font-bold">Apply SPF 50</h4>
              <p className="text-sm text-slate-500">Protect your skin from UV rays.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <Droplets className="mx-auto text-blue-500 mb-2" />
              <h4 className="font-bold">Stay Hydrated</h4>
              <p className="text-sm text-slate-500">Drink 3L of water daily.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <ShieldCheck className="mx-auto text-green-500 mb-2" />
              <h4 className="font-bold">Wear Shades</h4>
              <p className="text-sm text-slate-500">Keep your eyes safe and stylish.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Top Brands (Requirement 3) */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-black uppercase mb-10">Top Brands</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <span className="text-2xl font-bold italic">SUN-BLOCKER</span>
          <span className="text-2xl font-bold italic">OCEAN-VIBE</span>
          <span className="text-2xl font-bold italic">RAY-BANISH</span>
          <span className="text-2xl font-bold italic">GLOW-SKIN</span>
        </div>
      </section>
    </main>
  );
}