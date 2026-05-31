"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Grid, List } from "lucide-react";
import ProductCard from "../../components/ProductCard";
import products from "../../lib/products.json";

const categories = ["All", "Accessories", "Clothing", "Skincare", "Beach Accessories"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const filtered = products
    .filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      const matchesCat = category === "All" || p.category === category;
      return matchesSearch && matchesCat;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <div className="relative py-12 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-accent text-5xl sm:text-7xl tracking-widest text-yellow-100 mb-3">
            ALL <span className="gradient-text">PRODUCTS</span>
          </h1>
          <p className="text-yellow-100/60 text-lg">
            {filtered.length} summer essential{filtered.length !== 1 ? "s" : ""} waiting for you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters Row */}
        <div className="glass border border-yellow-500/10 rounded-2xl p-4 mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-yellow-400/50" />
            <input
              type="text"
              placeholder="Search products, brands…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-yellow-400/5 border border-yellow-500/15 rounded-xl pl-9 pr-4 py-2.5 text-sm text-yellow-100 placeholder-yellow-100/30 focus:border-yellow-400/50 transition-colors"
            />
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  category === cat
                    ? "bg-yellow-400 text-black"
                    : "glass border border-yellow-500/15 text-yellow-100/70 hover:border-yellow-400/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-yellow-400/60" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-yellow-400/5 border border-yellow-500/15 rounded-xl px-3 py-2.5 text-sm text-yellow-100 focus:border-yellow-400/50 transition-colors min-w-[140px]"
            >
              <option value="default">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="animate__animated animate__fadeIn"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌞</div>
            <h3 className="font-display text-2xl text-yellow-100 mb-2">No products found</h3>
            <p className="text-yellow-100/50">Try adjusting your search or filters</p>
            <button
              onClick={() => { setSearch(""); setCategory("All"); }}
              className="mt-4 btn-sun px-6 py-2 rounded-full text-sm font-bold relative z-10"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}