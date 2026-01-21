import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

const Faqs = () => {

    const faqs = [
        { question: "What is Jhinx Pay?", answer: "Jhinx Pay is a secure digital payment platform that enables fast and reliable transactions." },
        { question: "Is Jhinx Pay live yet?", answer: "Jhinx Pay is currently in beta testing phase with select users." },
        { question: "How do I create an account?", answer: "Click the 'Sign Up' button and follow the registration process." },
        { question: "Which services can I use on Jhinx Pay?", answer: "You can send money, pay bills, and make online purchases securely." }
      ];
    
      const [openFaq, setOpenFaq] = useState<number | null>(null);
    
    //   const containerVariants = {
    //     hidden: { opacity: 0 },
    //     visible: {
    //       opacity: 1,
    //       transition: {
    //         staggerChildren: 0.1
    //       }
    //     }
    //   };
      
  return (
    <div className="md:max-w-[900px] max-w-[97%] mx-auto">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3 text-zinc-900 dark:text-white">
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
                  className="bg-white dark:bg-zinc-900/50 backdrop-blur-sm border dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300  shadow-md hover:shadow-lg"
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
    </div>
  )
}

export default Faqs