// src/pages/commons/Testimonials2.tsx

import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";

const testimonials2 = [
  {
    name: "Joshua Davis",
    role: "Product Manager",
    image: "https://i.pinimg.com/736x/98/ba/9c/98ba9c006e63652f808cc9b8659b4c8e.jpg",
    comment: "JhinxPay fits perfectly into my daily flow. Trading crypto and redeeming value feels straightforward, not stressful.",
  },
  {
    name: "Omotola Ganiyat",
    role: "Marketing Strategist",
    image: "https://i.pinimg.com/1200x/cf/eb/c1/cfebc1a8b78416994041231972a4bd70.jpg",
    comment: "I like how fast everything is. From crypto swaps to gift card redemptions, it just works without friction.",
  },
  {
    name: "Ben Calvin",
    role: "UX Designer",
    image: "https://i.pinimg.com/1200x/d1/be/20/d1be20df297f0679fa33fbf8e9dc627d.jpg",
    comment: "The interface feels intentional. Nothing is buried, and every action feels predictable.",
  },
  {
    name: "Sylvia McDonald",
    role: "Data Analyst",
    image: "https://i.pinimg.com/736x/ba/50/04/ba500432870f19c83957ad430071ebb1.jpg",
    comment: "I appreciate how transparent the app feels. Rates, balances, and redemptions are always clear.",
  },
  {
    name: "Dorren Smith",
    role: "Operations Lead",
    image: "https://i.pinimg.com/736x/52/e5/95/52e5955a3eac8a900ae67aaa20888881.jpg",
    comment: "Managing value across crypto and gift cards used to be messy. JhinxPay keeps it organized.",
  },
  {
    name: "Favour Johnson",
    role: "Customer Success Manager",
    image: "https://i.pinimg.com/1200x/7e/7b/18/7e7b1886f8c529a176e2e28da7839a22.jpg",
    comment: "I trust JhinxPay for everyday use. It feels stable, simple, and reliable.",
  },
  {
    name: "Chidimma Okeke",
    role: "Virtual Assistant",
    image: "https://i.pinimg.com/1200x/24/a2/74/24a27485d6a7a0a262c49f3f373e74aa.jpg",
    comment: "Being able to redeem gift cards directly without jumping between apps saves me a lot of time.",
  },
  {
    name: "Ryan Bob",
    role: "Content Creator",
    image: "https://i.pinimg.com/1200x/f5/ef/62/f5ef621200ed660005540d9590b07791.jpg",
    comment: "It’s practical. I convert crypto into things I actually use without overthinking it.",
  },
  {
    name: "Damian Dickson",
    role: "Founder",
    image: "https://i.pinimg.com/1200x/b8/53/c8/b853c86498c130b0d7a72804bb3171b8.jpg",
    comment: "JhinxPay feels built for real users, not just traders. That balance is hard to get right.",
  },
  {
    name: "Austine Douglas",
    role: "Software Engineer",
    image: "https://i.pinimg.com/736x/9f/9b/13/9f9b13db6e1a7add576ad0ea85dbecc3.jpg",
    comment: "I value tools that stay out of the way. JhinxPay is fast, clean, and predictable.",
  },
];

const Testimonials2 = () => {
  const containerTop = useRef<HTMLDivElement>(null);
  const blackIndices = useMemo(() => {
    const indices = new Set<number>();
    while (indices.size < 2) {
      indices.add(Math.floor(Math.random() * testimonials2.length * 4));
    }
    return indices;
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let x = 0;

    const animate = () => {
      x += 1; // Adjust speed here

      if (containerTop.current) {
        containerTop.current.style.transform = `translateX(${-x % (testimonials2.length * 320)}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const renderCards = (startIndex: number = 0) =>
    [...testimonials2, ...testimonials2].map((t, i) => {
      const idx = i + startIndex;
      const isBlack = blackIndices.has(idx);
      return (
        <div
          key={idx}
          className={clsx(
            "w-80 min-w-[20rem] rounded-xl p-6 shadow-md transition-colors",
            isBlack
              ? "bg-black text-white border border-gray-900"
              : "bg-white dark:bg-white text-gray-800"
          )}
        >
          <p className="text-sm md:text-base mb-4">{t.comment}</p>
          <div className="flex items-center gap-3">
            <img
              src={t.image}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h4 className="font-medium text-sm">{t.name}</h4>
              <p className="text-xs opacity-70">{t.role}</p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="">
      {/* Sliders */}
      <div className="relative z-10 flex flex-col gap-5 md:gap-10">
        <div className="overflow-hidden p-2">
          <div ref={containerTop} className="flex gap-6 w-max will-change-transform">
            {renderCards(0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials2;