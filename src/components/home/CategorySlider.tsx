export function CategorySlider() {
  const categories = [
    { icon: "lunch_dining", label: "Burgers" },
    { icon: "local_pizza", label: "Pizza" },
    { icon: "set_meal", label: "Sushi" },
    { icon: "icecream", label: "Desserts" },
    { icon: "eco", label: "Vegan" },
    { icon: "coffee", label: "Beverages" },
  ];

  return (
    <section className="w-full py-section-gap max-w-[1200px] mx-auto px-gutter overflow-hidden">
      <div className="flex gap-stack-md overflow-x-auto pb-4 no-scrollbar">
        {categories.map((cat, i) => (
          <div key={i} className="group shrink-0 glass-card px-8 py-4 rounded-full flex items-center gap-3 cursor-pointer transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.3)]">
            <span className="material-symbols-outlined text-primary-container">{cat.icon}</span>
            <span className="font-bold">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
