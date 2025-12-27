
import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Send, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-yellow-500' },
    { icon: () => <span className="text-2xl font-bold">𝕏</span>, href: '#', label: 'X', color: 'hover:bg-zinc-800 dark:hover:bg-zinc-700' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: 'hover:bg-green-600' }
  ];

  const faqs = [
    { question: "What is Jhinx Pay?", answer: "Jhinx Pay is a secure digital payment platform that enables fast and reliable transactions." },
    { question: "Is Jhinx Pay live yet?", answer: "Jhinx Pay is currently in beta testing phase with select users." },
    { question: "How do I create an account?", answer: "Click the 'Sign Up' button and follow the registration process." },
    { question: "Which services can I use on Jhinx Pay?", answer: "You can send money, pay bills, and make online purchases securely." }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-[300px] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 dark:from-yellow-600/10 to-transparent"></div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/20 dark:bg-yellow-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-red-500/20 dark:bg-red-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="relative container mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-red-500 to-yellow-500 dark:from-yellow-400 dark:via-red-400 dark:to-yellow-300 bg-clip-text text-transparent"
          >
            Get in touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Reach out to us and our team will get back to you as soon as possible.
          </motion.p>
          
          {/* Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center gap-4 mb-16"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-14 h-14 bg-white dark:bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-2xl ${social.color} border  dark:border-white/20 shadow-lg`}
              >
                <social.icon className="w-6 h-6 text-zinc-700 dark:text-white transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-all duration-300"></div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* FAQs Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-zinc-900 dark:text-white">
              <MessageSquare className="w-8 h-8 text-yellow-500" />
              FAQs
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-white/5 backdrop-blur-sm border dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300  shadow-md hover:shadow-lg"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center group"
                  >
                    <span className="font-medium text-zinc-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-zinc-600 dark:text-zinc-400"
                    >
                      ▼
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-yellow-50/50 dark:from-white/10 dark:to-white/5 backdrop-blur-lg border dark:border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-zinc-900 dark:text-white">
              <Mail className="w-7 h-7 text-yellow-500" />
              Leave a message
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
              We would love to hear from you. Please reach us via the form below or give us a call (+234 805 094 6090).
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-12 text-center"
              >
                <motion.div
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4"
                >
                  <Send className="w-8 h-8 text-green-500" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">Message Sent!</h3>
                <p className="text-zinc-600 dark:text-zinc-400">We'll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <User className="w-4 h-4" />
                    Name*
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white dark:bg-white/10 dark:border-white/20 dark:focus:border-yellow-500 transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-500"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <Mail className="w-4 h-4" />
                    Email*
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white dark:bg-white/10 dark:border-white/20 focus:border-yellow-500 dark:focus:border-yellow-500 transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-500"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                    <MessageSquare className="w-4 h-4" />
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="bg-white dark:bg-white/10 dark:border-white/20 focus:border-yellow-500 dark:focus:border-yellow-500 transition-all duration-300 text-zinc-900 dark:text-white placeholder:text-zinc-500 resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white hover:from-yellow-700 hover:to-red-700 text-white font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;