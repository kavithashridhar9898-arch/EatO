"use client";

export function RecommendedMeals() {
  return (
    <section className="w-full bg-surface-container-low/50 py-section-gap overflow-hidden relative">
      <div className="w-full max-w-[1200px] mx-auto px-gutter relative z-10">
        <div className="text-center mb-stack-lg scroll-reveal">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">AI CURATED FOR YOU</span>
          <h2 className="font-headline-lg text-headline-lg">Deliciously Chosen</h2>
          <p className="text-on-surface-variant">Our smart engine knows exactly what your palate desires today.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-stack-lg">
          <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-stack-lg relative group overflow-hidden scroll-reveal">
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md mb-2">Truffle Honey Pizza</h3>
              <p className="text-on-surface-variant mb-stack-lg max-w-xs">Artisanal dough topped with black truffle, wild honey, and burrata.</p>
              <button onClick={() => alert('Item added to your cart!')} className="bg-white text-surface px-8 py-3 rounded-full font-bold neumorphic-button hover:scale-105 transition-transform">Add to Cart</button>
            </div>
            <div className="absolute top-10 -right-10 w-72 h-72 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 drop-shadow-[0_20px_50px_rgba(255,107,0,0.4)]">
              <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCktuLfLvPT1NeNyxNtN6r6NQQmt6EWMoWSqC5DEeuPeLLf2ZkloLHenyqYYhAKfdKz9z0bYz1NEwoP_VjUv4VdX9KRZAkqoYRAwSHeYz480S6cdVoHvtIxQ_c1gTGCTUyv05vINpgALxP0r53vhHrcybTeM_RBOQNbm4T_KioAQSQfNfpZKhM9nEyxwovMMaACyj7iefvAHCWx0wlpkItjiEZB5NYzk0i-gw3qPq2SdvIOjkzvbMh" alt="Pizza" />
            </div>
          </div>
          <div className="glass-card rounded-[2.5rem] p-stack-lg flex flex-col justify-between scroll-reveal" style={{ transitionDelay: '150ms' }}>
            <div>
              <h3 className="font-headline-md text-headline-md mb-2">Golden Latte</h3>
              <p className="text-on-surface-variant text-sm">Turmeric infused milk with spices.</p>
            </div>
            <div className="my-stack-md flex justify-center">
              <div className="w-32 h-32 drop-shadow-[0_15px_30px_rgba(250,189,0,0.3)] hover:scale-110 transition-transform duration-500">
                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-EE56xH6XcENYkR8WVnzErRwa4wBxR6HyPok-2-ULmsHj-9Q2QRJFsloRcaTLVg5uBesWQ2LIkH0uy-rwULaD1w2dHuRflW7ThzeuYmx9LMHA3GrVbNkcaWs5ogLMJu6V487Yt02WTxTAZVKqE0_2iU9EJuW-s0NnVckf0v0tR7tFMdr2fPxIaDigXPjJHlbUuGm0WGQ9-W1NPnW7A6vWuPQFDLGSm5gUcJfK5EssRrzgKK0pz9FT" alt="Latte" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">$8.00</span>
              <button onClick={() => alert('Item added to your cart!')} className="material-symbols-outlined bg-primary-container text-on-primary-container p-2 rounded-full neumorphic-button hover:scale-110 transition-transform">add</button>
            </div>
          </div>
          <div className="glass-card rounded-[2.5rem] p-stack-lg flex flex-col justify-between scroll-reveal" style={{ transitionDelay: '250ms' }}>
            <div>
              <h3 className="font-headline-md text-headline-md mb-2">Açaí Bowl</h3>
              <p className="text-on-surface-variant text-sm">Topped with bee pollen and figs.</p>
            </div>
            <div className="my-stack-md flex justify-center">
              <div className="w-32 h-32 drop-shadow-[0_15px_30px_rgba(146,0,36,0.3)] hover:scale-110 transition-transform duration-500">
                <img className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbsdZKkUA_7uYMBVFmUzdpnC4HDRI0P_616OBI1Ex2Nzb5wJwyVOPune0z3Gsseka0RLy6GejQnN5nBC162t4dQgrEADj-vkj7d-ELQsyf65ykCC7H3pdw-JoesxQmD_n7fErDNZ0aDFtKK9biuiPk-A6EB2Y5AeYuQhZA-bpZuRpY_ZRl3l5QpJA8LfYez2oq_uuf8z1eIkzhg0dgZW5bzT9LfTvLBVSEQRgr1AViM5DwykyxGlh_" alt="Acai" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold">$16.00</span>
              <button onClick={() => alert('Item added to your cart!')} className="material-symbols-outlined bg-primary-container text-on-primary-container p-2 rounded-full neumorphic-button hover:scale-110 transition-transform">add</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
