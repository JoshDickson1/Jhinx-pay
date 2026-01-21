import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Gift Card Exchange",
    description: "Start your journey by getting our mobile app on Playstore or Appstore.",
    gradient: "from-[#E0F2FE] to-[#F8FAFC]",
    img: "/h2.svg",
  },
  {
    title: "Fast Trading",
    description: "Setting up your wallet takes less than 2 minutes with basic details.",
    gradient: "from-[#F0FDF4] to-[#F8FAFC]",
    img: "/h1.svg",
  },
  {
    title: "Secure Wallet",
    description: "Built with advanced security standards to keep your funds and data safe.",
    gradient: "from-[#FFFBEB] to-[#FEF3C7]", // Creamy gradient to match Secure Wallet img
    img: "/h3.svg",
  },
  {
    title: "24/7 Support",
    description: "Funds are deposited into your account immediately after confirmation.",
    gradient: "from-[#FFF7ED] to-[#FFFFFF]",
    img: "/h4.svg",
  },
];

const AutoSlideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    const nextStep = page + newDirection;
    if (nextStep < 0) setPage([slides.length - 1, newDirection]);
    else if (nextStep >= slides.length) setPage([0, newDirection]);
    else setPage([nextStep, newDirection]);
  }, [page]);

  // AUTO-PLAY LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Swaps every 5 seconds

    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    })
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <div className="relative h-[400px] md:h-[450px] w-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.3 }
            }}
            // Added items-center for mobile, md:items-start for laptop if needed
            className={`absolute inset-0 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br shadow-xl border border-white/50 ${slides[page].gradient}`}
          >
            {/* Visual Element (Image on Left in Desktop, Top in Mobile) */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start items-center order-1 mb-8 md:mb-0">
              <motion.img
                key={slides[page].img}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={slides[page].img}
                className="w-48 h-48 md:w-80 md:h-80 object-contain drop-shadow-2xl"
                alt="Feature visual"
              />
            </div>

            {/* Content (Text on Right in Desktop, Centered in Mobile) */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-end order-2">
              <h3 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-center md:text-right wordwrap-nowrap">
                {slides[page].title}
              </h3>
              <p className="text-gray-600 mt-6 text-xl max-w-sm leading-relaxed text-center md:text-right">
                {slides[page].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Layer */}
      <div className="flex justify-between items-center mt-10 px-4">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`h-2 transition-all duration-300 rounded-full ${page === i ? 'w-10 bg-black' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>

        {/* <div className="flex gap-4">
          <button 
            onClick={() => paginate(-1)}
            className="p-4 rounded-full bg-white border border-gray-100 shadow-md hover:scale-110 transition-transform active:scale-95"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="p-4 rounded-full bg-white border border-gray-100 shadow-md hover:scale-110 transition-transform active:scale-95"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AutoSlideshow;