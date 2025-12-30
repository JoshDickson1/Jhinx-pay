import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import { ModeToggle } from './theme/ModeToggle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch("https://formspree.io/f/xeeqvavo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="w-full bg-white dark:bg-black text-zinc-900 dark:text-white border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-15 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          
          {/* Brand and Contact Info */}
          <motion.div className="md:col-span-4 space-y-6" variants={itemVariants}>
            <div className="flex items-center gap-2">
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={"./Logo.svg"} 
                alt="Jhinx Pay Logo" 
                className="h-8 w-auto block dark:hidden"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                src={"./Logo-dark.svg"} 
                alt="Jhinx Pay Logo" 
                className="h-8 w-auto hidden dark:block"
              />
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-xs">
              Fast, secure crypto and gift card trading with instant payments.
            </p>

            <div className="space-y-3">
              <motion.a whileHover={{ x: 5 }} href="mailto:support@jhinxpay.com" className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors">
                <Mail className="h-4 w-4" /> support@jhinxpay.com
              </motion.a>
              <motion.a whileHover={{ x: 5 }} href="tel:+2348000090000" className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-amber-500 transition-colors">
                <Phone className="h-4 w-4" /> +234 800 009 0000
              </motion.a>
              <motion.a whileHover={{ x: 5 }} href="https://wa.me/2348000090000" className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 hover:text-green-500 transition-colors">
                <MessageCircle className="h-4 w-4 text-green-500" /> +234 800 009 0000
              </motion.a>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: () => <span className="font-bold text-sm">𝕏</span>, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href} 
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-amber-500 hover:text-white transition-all shadow-sm"
                >
                  <social.Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div className="md:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8" variants={itemVariants}>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider">Quick Link</h4>
              <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                {['Features', 'How It Works', 'FAQs'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-amber-500 transition-colors inline-block">
                      <motion.span whileHover={{ x: 2 }}>{item}</motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                {['Blog', 'Rates', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors inline-block">
                      <motion.span whileHover={{ x: 2 }}>{item === 'Rates' ? 'Gift Card Rates' : item}</motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
                {['Terms', 'Privacy'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors inline-block">
                      <motion.span whileHover={{ x: 2 }}>{item}</motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div className="md:col-span-4 space-y-6" variants={itemVariants}>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">Stay Updated!</h3>
              <AnimatePresence mode="wait">
                <motion.p 
                  key={status}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-zinc-500 dark:text-zinc-400"
                >
                  {status === 'success' ? '✨ Thanks for subscribing!' : 'Subscribe to our newsletter for the latest updates.'}
                </motion.p>
              </AnimatePresence>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="relative flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full p-1.5 focus-within:ring-2 focus-within:ring-amber-500 transition-all">
              <Input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                disabled={status === 'loading' || status === 'success'}
                className="border-none bg-white dark:bg-zinc-900 shadow-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-10 px-4"
              />
              <Button 
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="rounded-full bg-zinc-950 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 px-6 h-10 min-w-[100px]"
              >
                {status === 'loading' ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>...</motion.div>
                ) : status === 'success' ? 'Sent' : 'Subscribe'}
              </Button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>© {currentYear} Jhinx Pay. All rights reserved.</p>
          <div className="flex flex-row justify-between items-center gap-6">
            <p>Made by BiTech</p>
            <div className="scale-90">
              <ModeToggle />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}