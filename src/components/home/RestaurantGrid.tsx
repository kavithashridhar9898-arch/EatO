"use client";

export function RestaurantGrid() {
  const restaurants = [
    {
      name: "L'Artiste Bistro",
      price: "$$$",
      tags: ["French Cuisine", "25-35 min"],
      badges: ["Fine Dining", "Michelin Rated"],
      rating: 4.9,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW3vuYxjm7_KW2Pqd6UXY0hmfbMh3j-YY3W57dLt0pguGuecN2rxUIes2f_kZgG-vgDtbJ_Gr7h2jouZpyEPkILPmas0mAouk8Lz28WILyf85zXxPZDxB8GIi1lZZyoBLCxcAqN7nV4q8xJXvMrfdGVN-HE3zGUtAAbxpNR5hAJHk1J70quw-mq9zRhTrjfRsCpkMJMkqsPCooHb-JHF25jZ-MIXJDlcZHRmBe551uNFBFVT86oKRt"
    },
    {
      name: "Neon Omakase",
      price: "$$$$",
      tags: ["Japanese", "30-45 min"],
      badges: ["Authentic", "Premium"],
      rating: 4.7,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5uioVjq4eH_DwevA-UULsm_GrNEx5VBqfTAGQp5--seR4ReAZlHmmZHyH4F2KJuIlTJlGCE_ofRkqt8qWzCNwWZNaQNGTJuxeKIRcA82o-QGvNlc8jhHSztil1k41ar3rZ0XQwwavAKei8fdYF6nr1TbR-xWYZqAkGD2CUQOx0rraDK32h7AUaNcNhRuviGKyGDwsrLWogPHUbagUl7Nf-88Ji6h3RItUOuV9HWvyJ0S8Tqv9Lg4C"
    },
    {
      name: "Terra Kitchen",
      price: "$$",
      tags: ["Vegan", "15-25 min"],
      badges: ["Healthy", "Eco-Friendly"],
      rating: 4.8,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK4tXrB8h9_JJDt-O2xQkuY0Na8qtO7iT7YtBRLvV6uWh1KMUJwOlb7GIZebdzkmjrQREh7qcYKcp3kVHVppfJOuTwJ2DBaNgaln4D0B7ORD3WBxmWHaVYvf3WlkAjUvYbtY1iFnLd5fCp4Prf36MCCBBflioFDnQg1Corgu4VyBfM216Fy6PKQA-A5iiaTkhlakSBesD0b2Zj9YVGj1rgCswPlcQu3srN-IDupgVYHaVkgLGnPH91"
    }
  ];

  return (
    <section id="restaurants" className="w-full pb-section-gap max-w-[1200px] mx-auto px-gutter">
      <div className="flex items-end justify-between mb-stack-lg scroll-reveal">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-2">Featured Restaurants</h2>
          <p className="text-on-surface-variant">Top-rated culinary hotspots near you</p>
        </div>
        <a className="text-primary hover:underline font-bold flex items-center gap-1 group" href="#">
          View all <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-lg">
        {restaurants.map((rest, i) => (
          <div key={i} className="glass-card rounded-[2rem] overflow-hidden group hover:scale-[1.02] transition-all duration-500 scroll-reveal" style={{ transitionDelay: `${(i+1)*100}ms` }}>
            <div className="relative h-64 overflow-hidden">
              <div className="absolute top-4 right-4 z-10 glass-card px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold">
                <span className="material-symbols-outlined text-secondary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                {rest.rating}
              </div>
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url('${rest.image}')` }}
              ></div>
            </div>
            <div className="p-stack-lg">
              <div className="flex justify-between items-start mb-stack-sm">
                <h3 className="font-headline-md text-headline-md">{rest.name}</h3>
                <span className="text-primary-container font-bold">{rest.price}</span>
              </div>
              <p className="text-on-surface-variant text-sm mb-stack-md">{rest.tags.join(" • ")}</p>
              <div className="flex items-center gap-2">
                {rest.badges.map(b => (
                  <span key={b} className="glass-card px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">{b}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
