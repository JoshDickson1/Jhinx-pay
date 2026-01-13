import { useEffect, useMemo, useRef } from "react";
import Testimonials2 from "./Testimonials2"
import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    name: "Adaeze Nwankwo",
    role: "Product Manager",
    image: "https://i.pinimg.com/736x/89/ab/65/89ab65ed0e5f98bcfc9bedfa8431c57c.jpg",
    comment: "JhinxPay made switching between crypto, gift cards, and game credits feel effortless. Everything I need is finally in one place.",
  },
  {
    name: "Nathan Cole",
    role: "UI Designer",
    image: "https://i.pinimg.com/736x/f7/5e/8b/f75e8b958f51f01f69a8536dada2b5b2.jpg",
    comment: "The flow is clean, fast, and intuitive. Trading and redeeming don’t feel intimidating anymore.",
  },
  {
    name: "Jessica Obasi",
    role: "Digital Marketer",
    image: "https://i.pinimg.com/1200x/e9/66/0d/e9660dc0368b5c507bb9bd9a8b3c9279.jpg",
    comment: "I use crypto daily, and JhinxPay just simplifies everything. No friction, no unnecessary steps.",
  },
  {
    name: "Tariq El-Masri",
    role: "Freelancer",
    image: "https://i.pinimg.com/736x/b2/63/27/b26327fad9b84e05774606d1c9be4ee9.jpg",
    comment: "Redeeming gift cards directly from my crypto balance is a game changer. It actually fits how I spend.",
  },
  {
    name: "Lola Grant",
    role: "Customer Support Specialist",
    image: "https://i.pinimg.com/1200x/ab/62/ff/ab62fff6e9caba1b0ce1e113f4c15a50.jpg",
    comment: "I’ve tried multiple exchange apps. JhinxPay feels calmer, clearer, and way easier to trust.",
  },
  {
    name: "Kingsley Adebayo",
    role: "Growth Strategist",
    image: "https://i.pinimg.com/1200x/ab/8f/5e/ab8f5e8d6451f2e2dbc5851ce9fcf0b1.jpg",
    comment: "Game points, crypto, and gift cards in one app just makes sense. JhinxPay connects them smoothly.",
  },
  {
    name: "Emma Zhang",
    role: "Security Analyst",
    image: "https://i.pinimg.com/1200x/4c/11/56/4c115690c3e3f3662238b1eedd22cea8.jpg",
    comment: "Security matters to me, and JhinxPay doesn’t feel careless. It’s simple without feeling unsafe.",
  },
  {
    name: "Noah Ibeh",
    role: "Software Engineer",
    image: "https://i.pinimg.com/736x/39/98/d1/3998d1186c5106dd97c2a23d9f262c85.jpg",
    comment: "I like tools that don’t waste my time. JhinxPay loads fast, works fast, and stays out of my way.",
  },
  {
    name: "Maya Roberts",
    role: "Content Creator",
    image: "https://i.pinimg.com/736x/9c/f7/41/9cf741391b29db3f67ee8c5c47a7e929.jpg",
    comment: "Turning crypto into gift cards for everyday use is ridiculously convenient. I use it more than I expected.",
  },
  {
    name: "Leo Martins",
    role: "Business Analyst",
    image: "https://i.pinimg.com/1200x/cb/81/b9/cb81b96f37a8644a5cb75325947d960d.jpg",
    comment: "JhinxPay feels practical. It’s not just about trading—it’s about actually using your value.",
  },
];


const Testimonials = () => {
  const containerTop = useRef<HTMLDivElement>(null);
  const blackIndices = useMemo(() => {
    const indices = new Set<number>();
    while (indices.size < 2) {
      indices.add(Math.floor(Math.random() * testimonials.length * 4));
    }
    return indices;
  }, []);

  useEffect(() => {
    let animationFrame: number;
    let x = 0;

    const animate = () => {
      x += 1; // Adjust speed here

      if (containerTop.current) {
        containerTop.current.style.transform = `translateX(${-x % (testimonials.length * 320)}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const renderCards = (startIndex: number = 0) =>
    [...testimonials, ...testimonials].map((t, i) => {
      const idx = i + startIndex;
      const isBlack = blackIndices.has(idx);
      return (
        <div
          key={idx}
          className={clsx(
            "w-80 min-w-[20rem] rounded-xl p-6 shadow-md transition-colors",
            isBlack
              ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white border border-gray-900"
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
    <div className="relative overflow-hidden w-full py-20 bg-white dark:bg-black text-black dark:text-white">
      {/* Background blur */}
      <div className="absolute -top-12 md-top-[250px] -right-32 md:-right-[450px] -translate-x-1/2 w-40 md:w-[600px] h-40 md:h-[600px] bg-yellow-500/50 rounded-full blur-2xl opacity-20 z-0"></div>
      <div className="absolute -bottom-12 md-bottom-[250px] -left-12 md:-left-[450px] -translate-x-1/2 w-52 md:w-[600px] h-52 md:h-[600px] bg-yellow-500/50 rounded-full blur-2xl opacity-20 z-0"></div>

      {/* Head Title */}
      <h2 className="relative z-10 text-center max-w-5xl mx-auto font-bold text-4xl mb-5">
        Trusted by over 10,000+ customers 
      </h2>

      {/* % stars ratting iconts */}
      <div className="w-full flex justify-center items-center gap-1 mb-8">
        <Star className="text-yellow-500" />
        <Star className="text-yellow-500" />
        <Star className="text-yellow-500" />
        <Star className="text-yellow-500" />
        <StarHalf className="text-yellow-500" />
      </div>
      
      {/* Title */}
      <h2 className="relative z-10 text-center max-w-2xl mx-auto mb-12">
        Score based on thousands of reviews on theGoogle Playstore and Apple App Store
      </h2>

      {/* Sliders */}
      <div className="relative z-10 flex flex-col gap-5 md:gap-10">
        <div className="overflow-hidden p-2">
          <div ref={containerTop} className="flex gap-6 w-max will-change-transform">
            {renderCards(0)}
          </div>
        </div>
      </div>
      

      <Testimonials2 />
    </div>
  );
};

export default Testimonials;