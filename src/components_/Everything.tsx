import { motion } from "framer-motion";

const Everything = () => {
  return (
    <section className="relative min-h-screen w-full bg-black pt-10 pb-0 px-0 md:px-20 overflow-hidden flex flex-col items-center">
      
      {/* Background Glow Balls */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-yellow-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-72 h-72 bg-yellow-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TOP SECTION: Everything You Need */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-6">
              Everything You Need in One App
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Manage your wallet, trade assets, track transactions, and 
              withdraw funds — all from one simple dashboard.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Continuous Spinning Geometric Icon */}
            <motion.img
              src="/wheel.svg" 
              alt="Geometric Wheel"
              className="w-48 h-48 md:w-64 md:h-64 object-contain opacity-80"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Crypto Trading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 flex justify-center"
          >
            <img 
              src="/crypto.svg"
              alt="Crypto Trading App" 
              className="w-full max-w-md h-auto drop-shadow-[0_0_30px_rgba(251,191,36,0.1)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-6 text-right">
              Crypto Trading
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 text-right">
              Buy and sell popular cryptocurrencies with instant settlement.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Everything;