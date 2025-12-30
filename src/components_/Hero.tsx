import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Updated LampContainer with transparent background and gold light
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-screen flex-col items-center pt-30 sm:pt-[700px] md:pt-[330px] justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-yellow-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-white dark:bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-white dark:bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-yellow-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-white dark:bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-white dark:bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white dark:bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-yellow-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-yellow-400 blur-2xl"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-black "></div>
      </div>

      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

const Hero = () => {
  const [isWaitlistHovered, setIsWaitlistHovered] = useState(false);

  const handleDownload = () => {
    alert("App Link Is Not Yet Available, Join The Waitlist");
  };

  const handleWaitlist = () => {
    window.location.href = '/waitlist';
  };

  return (
    <section className="relative p-0 md:p-20 min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-0 md:px-0 pt-0 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* LEFT: TEXT + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl -mt-10 sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 dark:text-white"
            >
              Trade Crypto & Gift Cards Seamlessly with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600">
                Jhinx Pay
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              Fast, secure, and reliable trading platform designed for instant payments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* App Store Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="group px-6 py-3 rounded-xl flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>

              {/* Google Play Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="group px-6 py-3 rounded-xl flex items-center gap-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 font-semibold shadow-lg hover:shadow-2xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>

              {/* Waitlist Button with Animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsWaitlistHovered(true)}
                onMouseLeave={() => setIsWaitlistHovered(false)}
                onClick={handleWaitlist}
                className="relative px-8 py-4 rounded-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white font-bold shadow-[0_12px_40px_rgba(251,191,36,0.5)] hover:shadow-[0_16px_50px_rgba(251,191,36,0.7)] transition-all duration-300 overflow-hidden min-w-[200px]"
              >
                <motion.div
                  animate={{
                    x: isWaitlistHovered ? 0 : -30,
                    opacity: isWaitlistHovered ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.div>
                
                <motion.span
                  animate={{
                    x: isWaitlistHovered ? 50 : 0,
                    opacity: isWaitlistHovered ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Join the Waitlist
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: MOCKUP WITH LAMP */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center items-end order-1 lg:order-2 h-screen"
          >
            <div className="absolute bottom-0 w-full h-full flex items-end justify-center">
              <LampContainer className="bg-transparent">
                <motion.img
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  src="/mock-dark.svg"
                  alt="Jhinx Pay App Mockup"
                  loading="eager"
                  className="relative z-20 w-[98%] mt-30 md:mt-20 sm:w-[320px] md:w-[360px] lg:w-[400px] drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.25))'
                  }}
                />
              </LampContainer>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent pointer-events-none z-20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero;