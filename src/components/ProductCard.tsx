"use client";
import Link from "next/link";
import Image from "next/image"; // Use Next.js optimized image
import { Card } from "@heroui/react";

interface ProductCardProps {
  product: {
    id: string | number;
    image: string;
    name: string;
    rating: number;
    brand: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="p-4 border-none bg-slate-50 hover:shadow-xl transition-shadow group">
      <div className="relative h-48 w-full overflow-hidden rounded-xl">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
          <span className="text-sm font-bold text-orange-500">⭐ {product.rating}</span>
        </div>
        <p className="text-slate-500 text-sm mb-2">{product.brand}</p>
        <p className="text-xl font-black text-slate-900">${product.price}</p>
        
        <Link
          href={`/products/${product.id}`}
          className="mt-4 inline-flex w-full justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
}