"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Shield, Truck, RotateCcw, ArrowLeft, Package, Tag } from "lucide-react";
import productsData from "@/lib/products.json";
import toast from "react-hot-toast";
import { use } from "react";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const product = productsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please login to view product details");
      router.push(`/login?redirect=/products/${id}`);
    }
  }, [session, isPending, router, id]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-yellow-100/60">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌞</div>
          <h2 className="font-display text-2xl text-yellow-100 mb-3">Product not found</h2>
          <Link href="/products" className="btn-sun px-6 py-2 rounded-full font-bold relative z-10">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => (
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-yellow-900 fill-yellow-900"}
      />
    ))
  );

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-yellow-100/60 hover:text-yellow-400 transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="animate__animated animate__fadeInLeft">
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border border-yellow-500/15">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="badge-hot">{product.badge}</span>
                </div>
              )}
              {discount && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                    -{discount}% OFF
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="animate__animated animate__fadeInRight flex flex-col">
            {/* Category & Brand */}
            <div className="flex items-center gap-3 mb-3">
              <span className="flex items-center gap-1 text-xs text-yellow-400/70 uppercase tracking-widest">
                <Tag size={12} /> {product.category}
              </span>
              <span className="text-yellow-400/30">•</span>
              <span className="text-xs text-yellow-100/50">{product.brand}</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-yellow-100 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
              <span className="text-yellow-100/70 font-semibold">{product.rating}</span>
              <span className="text-yellow-100/40 text-sm">(124 reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-bold text-yellow-400">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-yellow-100/40 line-through">${product.originalPrice}</span>
              )}
              {discount && (
                <span className="text-green-400 text-sm font-semibold">You save ${product.originalPrice! - product.price}!</span>
              )}
            </div>

            {/* Divider */}
            <div className="deco-line mb-6" />

            {/* Description */}
            <p className="text-yellow-100/70 leading-relaxed mb-6 text-base">
              {product.description}
            </p>

            {/* Tags */}
            {product.tags && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 glass border border-yellow-500/15 rounded-full text-xs text-yellow-300/70">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              <Package size={14} className={product.stock > 5 ? "text-green-400" : "text-orange-400"} />
              <span className={`text-sm ${product.stock > 5 ? "text-green-400" : "text-orange-400"}`}>
                {product.stock > 5 ? `${product.stock} in stock` : `Only ${product.stock} left!`}
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={() => toast.success(`${product.name} added to cart! 🛒`)}
              className="btn-sun w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 mb-4 relative z-10"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { icon: Shield, label: "Secure Payment" },
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="glass border border-yellow-500/10 rounded-xl py-3 px-2 flex flex-col items-center gap-1.5 text-center">
                  <Icon size={18} className="text-yellow-400/70" />
                  <span className="text-yellow-100/50 text-xs leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}