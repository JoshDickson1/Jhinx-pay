import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PanelLeft, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isWaitlistHovered, setIsWaitlistHovered] = useState(false);
  
    const handleWaitlist = () => {
      window.location.href = '/waitlist';
    };

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-6">
        <div className="container mx-auto flex items-center justify-between px-6 lg:px-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={"./Logo.svg"}
              alt="Jhinx Pay"
              className="h-8 block dark:hidden"
            />
            <img
              src={"./Logo-dark.svg"}
              alt="Jhinx Pay"
              className="h-8 dark:block hidden"
            />
          </Link>

          {/* Nav + Actions (RIGHT SIDE) */}
          <div className="hidden md:flex items-center gap-4">

            {/* Capsule Nav */}
            <div className="
              flex items-center gap-8
              px-8 py-3 rounded-full
              backdrop-blur-xl
              bg-white/10 dark:bg-white/5
              border border-white/20
              shadow-[0_10px_30px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.3)]
            ">
              <Link to="/features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
                Features
              </Link>
              <Link to="/how-it-works" className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
                How it works
              </Link>
              <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition">
                Contact
              </Link>
            </div>

            {/* Waitlist Button with Animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsWaitlistHovered(true)}
                onMouseLeave={() => setIsWaitlistHovered(false)}
                onClick={handleWaitlist}
                className="relative px-7 py-3 rounded-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white font-bold shadow-[0_12px_40px_rgba(251,191,36,0.5)] hover:shadow-[0_16px_50px_rgba(251,191,36,0.7)] transition-all duration-300 overflow-hidden min-w-[200px]"
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
          </div>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <PanelLeft className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl">
          <div className="absolute top-6 right-6">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Link to="/features" onClick={() => setOpen(false)} className="text-lg font-medium">
              Features
            </Link>
            <Link to="/how-it-works" onClick={() => setOpen(false)} className="text-lg font-medium">
              How it works
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-lg font-medium">
              Contact
            </Link>

            {/* Waitlist Button with Animation */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsWaitlistHovered(true)}
                onMouseLeave={() => setIsWaitlistHovered(false)}
                onClick={handleWaitlist}
                className="relative px-7 py-3 rounded-full flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white font-bold shadow-[0_12px_40px_rgba(251,191,36,0.5)] hover:shadow-[0_16px_50px_rgba(251,191,36,0.7)] transition-all duration-300 overflow-hidden min-w-[200px]"
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
          </div>
        </div>
      )}
    </>
  );
}
