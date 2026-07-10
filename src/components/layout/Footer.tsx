import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full pt-section-gap pb-stack-lg border-t border-white/5 bg-surface-container-lowest/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
        <div>
          <span className="text-headline-md font-headline-md font-bold text-primary mb-stack-md inline-block">EATO</span>
          <p className="text-on-surface-variant max-w-sm mb-stack-lg">
            Reimagining food delivery as a curated culinary experience. Taste the extraordinary, delivered to your doorstep.
          </p>
          <div className="flex gap-stack-md">
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary-container hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary-container hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-sm">podcasts</span></a>
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary-container hover:text-white transition-all" href="#"><span className="material-symbols-outlined text-sm">mail</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-stack-md">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Navigation</span>
            <Link className="text-on-surface-variant hover:text-on-tertiary-fixed-variant transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-on-surface-variant hover:text-on-tertiary-fixed-variant transition-colors" href="#">Terms of Service</Link>
            <Link className="text-on-surface-variant hover:text-on-tertiary-fixed-variant transition-colors" href="#">Sustainability</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold text-sm uppercase tracking-widest text-primary mb-2">Company</span>
            <Link className="text-on-surface-variant hover:text-on-tertiary-fixed-variant transition-colors" href="#">Global Partners</Link>
            <Link className="text-on-surface-variant hover:text-on-tertiary-fixed-variant transition-colors" href="#">Press Kit</Link>
            <Link className="text-on-surface-variant hover:text-on-tertiary-fixed-variant transition-colors" href="#">Careers</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-gutter mt-section-gap pt-stack-lg border-t border-white/5 text-center text-on-surface-variant text-sm">
        © 2024 EATO Culinary Curated. All rights reserved.
      </div>
    </footer>
  );
}
