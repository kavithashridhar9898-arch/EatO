export function AppOrderBar() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[800px] glass-card h-20 rounded-full z-[60] flex items-center justify-between px-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20">
      <div className="flex items-center gap-stack-md">
        <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container">shopping_bag</span>
        </div>
        <div className="hidden sm:block">
          <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Your Selection</p>
          <p className="font-bold">2 items • $34.50</p>
        </div>
      </div>
      <div className="flex items-center gap-stack-md">
        <button className="hidden md:block text-on-surface-variant hover:text-on-surface transition-colors">Apply Coupon</button>
        <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold neumorphic-button hover:scale-105 transition-transform">Checkout Now</button>
      </div>
    </div>
  );
}
