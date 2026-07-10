"use client";

import { WebGLBackground } from "./WebGLBackground";
import { ThreeFoodScene } from "./ThreeFoodScene";
import { useLenis } from 'lenis/react';

export function Hero() {
  const lenis = useLenis();
  return (
    <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <WebGLBackground />
      <ThreeFoodScene />
      <div className="w-full relative z-20 max-w-[1200px] mx-auto px-gutter text-center">
        <h1 className="font-display-xl text-display-xl mb-stack-md leading-tight scroll-reveal visible">
          Order Your <span className="text-primary-container">Favourite Food</span><br/>In Minutes
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-stack-lg scroll-reveal visible" style={{ transitionDelay: '100ms' }}>
          Discover delicious meals from nearby restaurants with lightning-fast delivery and artisan attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-stack-md scroll-reveal visible" style={{ transitionDelay: '200ms' }}>
          <div className="magnetic-wrap">
            <button 
              onClick={() => lenis?.scrollTo('#restaurants')}
              className="bg-primary-container text-on-primary-container px-10 py-4 rounded-full text-body-lg font-bold neumorphic-button hover:scale-105 transition-transform"
            >
              Explore Menu
            </button>
          </div>
          <button 
            onClick={() => alert('Authentication integration coming soon!')}
            className="glass-card text-on-surface px-10 py-4 rounded-full text-body-lg font-bold border border-white/20 hover:bg-white/10 transition-all"
          >
            Join EATO+
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
      </div>
    </header>
  );
}
