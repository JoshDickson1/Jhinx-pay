import { motion, cubicBezier } from "framer-motion";

const features = [
  {
    title: "Fast Crypto Trading",
    description: "Buy and sell popular cryptocurrencies at competitive rates with instant processing.",
    icon: "/h1.svg",
  },
  {
    title: "Gift Card Exchange",
    description: "Trade multiple gift card types easily and get paid quickly.",
    icon: "/h2.svg",
  },
  {
    title: "Secure & Reliable",
    description: "Built with advanced security standards to keep your funds and data safe.",
    icon: "/h3.svg",
  },
  {
    title: "24/7 Customer Support",
    description: "Our support team is always available to assist you anytime.",
    icon: "/h4.svg",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This makes them come one-by-one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.22, 1, 0.36, 1), // Smooth cubic-bezier
    },
  },
};

const FeaturesComponent = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center group"
          >
            {/* Icon Container */}
            <div className="relative mb-6">             
              <div className="relative w-24 h-24 flex items-center justify-center rounded-3xl transition-all duration-300 group-hover:scale-110">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-[250px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturesComponent;