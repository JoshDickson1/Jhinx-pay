import { motion } from 'framer-motion';

const cardData = [
  // ROW 1: Two Tall/Long Cards
  {
    title: "Download the Jhinx Pay app",
    gradient: "from-[#E0F2FE] to-[#F8FAFC]",
    size: "lg:col-span-2 lg:row-span-2", // Takes half width, double height
    img: "/phone1.svg",
    looperPos: "bg-right-bottom",
  },
  {
    title: "Create and verify your account",
    gradient: "from-[#F0FDF4] to-[#F8FAFC]",
    size: "lg:col-span-2 lg:row-span-2", // Takes half width, double height
    img: "/phone2.svg",
    looperPos: "bg-left-top",
  },
  
  // ROW 2: One Short but Wide Card
  {
    title: "Select trade, gift card, or game toins game top-up",
    gradient: "from-[#F5F3FF] to-[#FAF5FF]",
    size: "lg:col-span-4 lg:row-span-2", // Spans the entire width
    img: "/phone3.svg", 
    looperPos: "bg-center",
    flexDir: "flex-row justify-between items-center" // Custom flex for wide look
  },

  // ROW 3: Two Tall Cards (Like the top)
  {
    title: "Complete your transaction",
    gradient: "from-[#F1F5F9] to-[#FFFFFF]",
    size: "lg:col-span-2 lg:row-span-2",
    img: "/phone4.svg",
    looperPos: "bg-bottom",
  },
  {
    title: "Receive payment instantly",
    gradient: "from-[#FFF7ED] to-[#FFFFFF]",
    size: "lg:col-span-2 lg:row-span-2",
    img: "/phone5.svg",
    looperPos: "bg-right",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20 bg-background">
      <h2 className="text-center text-3xl font-bold mb-16 text-gray-900 dark:text-white">How it works</h2>
      
      {/* 4-column grid for desktop, 1-column for mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[450px] lg:auto-rows-[250px]">
  {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className={`
              relative overflow-hidden rounded-[40px] p-8 md:p-12 flex flex-col 
              bg-gradient-to-br ${card.gradient} ${card.size}
              border border-gray-100 shadow-sm
            `}
          >
            {/* Unique Background Looper per card */}
            <div 
              className={`absolute inset-0 opacity-30 pointer-events-none bg-no-repeat ${card.looperPos}`}
              style={{ 
                backgroundImage: "url('/Looper-3.svg')", 
                backgroundSize: '100% auto' 
              }}
            />

            {/* Text Content */}
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight max-w-[280px]">
                {card.title}
              </h3>
            </div>

            {/* Lead Image */}
            {card.img && (
              <motion.div 
                className={`relative z-10 mt-auto flex md:pt-0 pt-20 justify-center ${card.title.includes('top-up') ? 'lg:justify-end' : ''}`}
                initial={{ y: 40 }}
                whileInView={{ y: 20 }}
                transition={{ duration: 1 }}
              >
                <img 
                  src={card.img} 
                  alt="Mockup" 
                  className="w-full absolute -bottom-10 h-auto max-h-[350px] object-contain object-bottom drop-shadow-2xl"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;