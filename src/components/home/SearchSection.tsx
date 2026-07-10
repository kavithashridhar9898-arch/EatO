export function SearchSection() {
  return (
    <section className="relative z-30 -mt-24 px-gutter w-full">
      <div className="w-full max-w-[1000px] mx-auto glass-card rounded-3xl p-stack-md flex flex-col md:flex-row items-center gap-stack-md shadow-2xl">
        <div className="flex-1 w-full flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10 group focus-within:border-primary-container transition-all">
          <span className="material-symbols-outlined text-primary-container">location_on</span>
          <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Select your delivery location..." type="text"/>
        </div>
        <div className="flex-1 w-full flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10 group focus-within:border-primary-container transition-all">
          <span className="material-symbols-outlined text-primary-container">search</span>
          <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search for dishes or restaurants..." type="text"/>
        </div>
        <button className="w-full md:w-auto bg-primary-container text-on-primary-container px-8 py-4 rounded-2xl font-bold neumorphic-button hover:scale-105 transition-transform">
          Find Food
        </button>
      </div>
    </section>
  );
}
