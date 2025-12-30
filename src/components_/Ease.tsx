import { motion } from "framer-motion";

const Ease = () => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-500">
      
      {/* Background Glow Balls */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/20 dark:bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/15 dark:bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-12 px-6">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="flex flex-row text-4xl md:text-6xl font-bold items-center gap-3 text-zinc-900 dark:text-white">
            <span>Trade With</span>
            <span className="relative flex flex-col items-center">
              Ease
              {/* Vector Liner directly under text */}
              <motion.img 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                src="/ease-icon.svg" 
                alt="Ease Icon" 
                className="absolute -bottom-2 left-0 h-2 object-contain" 
              />
            </span>
          </h1>
        </motion.div>

        {/* Illustration Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-screen max-w-5xl"
        >
          <img 
            src="/ease.svg" 
            alt="Ease Illustration" 
            className="block dark:hidden w-full h-auto drop-shadow-xl" 
          />
          <img 
            src="/ease-dark.svg" 
            alt="Ease Illustration" 
            className="hidden dark:block w-full h-auto drop-shadow-[0_20px_50px_rgba(251,191,36,0.15)]" 
          />
        </motion.div>
      </div>

      {/* Blurred Cloud at the bottom */}
      <div className="absolute bottom-[-50px] inset-x-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent blur-xl z-20 pointer-events-none" />
    </section>
  );
};

export default Ease;