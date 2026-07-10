"use client";

import Link from "next/link";

export function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full max-w-[1440px] z-50 border-b border-white/10 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-black/20">
      <div className="w-full max-w-[1200px] mx-auto px-gutter h-20 flex items-center justify-between">
        <div className="flex items-center gap-stack-lg">
          <span className="text-headline-md font-headline-md font-bold tracking-tighter text-primary">EATO</span>
          <div className="hidden md:flex gap-stack-md">
            <Link className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md" href="#">Discover</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-body-md text-body-md" href="#">Trending</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-body-md text-body-md" href="#">Restaurants</Link>
            <Link className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-body-md text-body-md" href="#">Concierge</Link>
          </div>
        </div>
        <div className="flex items-center gap-stack-md">
          <button onClick={() => alert('Authentication coming soon!')} className="hidden lg:block text-on-surface font-semibold hover:text-primary transition-colors">Sign In</button>
          <button onClick={() => alert('Authentication coming soon!')} className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold neumorphic-button hover:scale-105 transition-transform">
            Join EATO+
          </button>
        </div>
      </div>
    </nav>
  );
}
