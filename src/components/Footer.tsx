export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-orange-500">SunCart</h3>
          <p className="text-slate-400 mt-2 text-sm">Providing quality summer essentials since 2026.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="text-slate-400 space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/products" className="hover:text-orange-500">All Products</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-400">
          <p>&copy; 2026 SunCart Essentials. Built with Next.js & HeroUI.</p>
        </div>
      </div>
    </footer>
  );
}