import { motion } from 'framer-motion';

const GameCTA = () => {
  return (
    <div className="p-4 md:p-10">
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[40px] min-h-[350px] md:h-[450px] w-full max-w-6xl mx-auto flex items-center"
      >
        {/* Background Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5FAE8] via-[#F6F7E1] to-[#FFEAB6]" />

        {/* Decorative SVG/Looper Background Layer */}
        <div 
          className="absolute inset-0 opacity-40 bg-no-repeat bg-left-center"
          style={{ backgroundImage: "url('/Looper-3.svg')", backgroundSize: '100%' }}
        />

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 h-full items-center">
          
          {/* Left Content */}
          <div className="text-left py-12">
            <h2 className="text-5xl md:text-7xl font-semibold text-black tracking-tight">
              Game Points
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-md leading-relaxed">
              Buy and recharge game credits and passes instantly.
            </p>
          </div>

          {/* Right Image Container - Stuck to bottom and right */}
          <div className="absolute bottom-0 right-0 h-full w-1/2 flex justify-end items-end pointer-events-none">
            <motion.div 
              className="relative w-full h-full flex items-end justify-end"
              animate={{ 
                rotate: [0, -0.5, 0.5, -0.5, 0],
                x: [0, 1, -1, 1, 0],
                y: [0, -1, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <img 
                src="/game.png" 
                alt="Xbox Controller" 
                className="object-contain object-right-bottom h-[90%] md:h-full w-auto"
                style={{ marginBottom: '-2px', marginRight: '-2px' }} 
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default GameCTA;