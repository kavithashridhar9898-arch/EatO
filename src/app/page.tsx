"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/home/Hero";
import { SplashScreen } from "@/components/ui/SplashScreen";
import { SearchSection } from "@/components/home/SearchSection";
import { CategorySlider } from "@/components/home/CategorySlider";
import { RestaurantGrid } from "@/components/home/RestaurantGrid";
import { RecommendedMeals } from "@/components/home/RecommendedMeals";
import { AppOrderBar } from "@/components/layout/AppOrderBar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Scroll Reveal Animation with GSAP
    const elements = document.querySelectorAll(".scroll-reveal");
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        {
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Magnetic Buttons Effect
    const magneticWraps = document.querySelectorAll('.magnetic-wrap');
    const handleMouseMove = (e: MouseEvent) => {
      const wrap = e.currentTarget as HTMLElement;
      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const child = wrap.children[0] as HTMLElement;
      if (child) {
        child.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      }
    };
    const handleMouseLeave = (e: MouseEvent) => {
      const wrap = e.currentTarget as HTMLElement;
      const child = wrap.children[0] as HTMLElement;
      if (child) {
        child.style.transform = `translate(0px, 0px)`;
      }
    };

    magneticWraps.forEach(wrap => {
      wrap.addEventListener('mousemove', handleMouseMove as EventListener);
      wrap.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      magneticWraps.forEach(wrap => {
        wrap.removeEventListener('mousemove', handleMouseMove as EventListener);
        wrap.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="relative w-full flex flex-col items-center overflow-x-hidden">
      <SplashScreen />
      <Hero />
      <SearchSection />
      <CategorySlider />
      <RestaurantGrid />
      <RecommendedMeals />
      <AppOrderBar />
    </main>
  );
}
