import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ContactSub = () => {
    const [isWaitlistHovered, setIsWaitlistHovered] = useState(false);
    
      const handleDownload = () => {
        alert("App Link Is Not Yet Available, Join The Waitlist");
      };
    
      const handleWaitlist = () => {
        window.location.href = '/waitlist';
      };


    return (
        <div>
            <div className="">
                {/* ContactSub Component Content */}
                <div className="">
                    <div className="">
                        {/* Texts */}
                    </div>
                    <div className="">
                        {/* Buttons */}
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
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
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
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
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
                    </div>
                </div>
                <div className="">
                    {/* Image */}
                    <img src="./public/contact.svg" alt="" className="" />
                </div>
            </div>
        </div>
    )
}

export default ContactSub
