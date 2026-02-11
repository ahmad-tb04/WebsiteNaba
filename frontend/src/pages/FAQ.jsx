import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';

const faqData = [
  {
    question: "What is Naba?",
    answer: "Naba is an AI-powered inventory management and forecasting system designed to help companies understand their stock needs, reduce losses, and make better inventory decisions."
  },
  {
    question: "How can companies benefit from Naba?",
    answer: "By subscribing to Naba, companies receive accurate demand forecasting, inventory optimization insights, and predictive analytics that support smarter decision-making, reduce losses, and save time."
  },
  {
    question: "What features do you offer?",
    answer: "We offer: AI-powered demand forecasting with lead-time and shipping prediction, Smart inventory optimization, Unified data integration, and Scenario simulation and what-if analysis."
  },
  {
    question: "How accurate is your model?",
    answer: "Our AI model achieved 94% accuracy based on real data, continuous monitoring, and automatic retraining."
  },
  {
    question: "Who can use Naba?",
    answer: "Retailers, warehouses, distributors, manufacturers, and any business that manages inventory or supply chains."
  },
  {
    question: "How do subscriptions work?",
    answer: "Companies choose a plan, create an account, connect their data, and activate the features they need."
  },
  {
    question: "Is our data safe?",
    answer: "Yes. All data is handled securely and used only for generating insights and forecasts."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      className="glass-card overflow-hidden mb-4 border-2 border-white/10 hover:border-accent-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <button
        onClick={onClick}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
      >
        <span className="text-lg font-bold text-white pr-4 group-hover:text-accent-light transition-colors">{question}</span>
        <motion.div
          className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-deep rounded-xl flex items-center justify-center flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-navy-900" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6 text-gray-400 border-t border-white/10 pt-6 leading-relaxed bg-white/5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleContactSupport = () => {
    window.location.href = 'mailto:ahmad81.tbakhi@gmail.com';
  };

  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Triangles */}
      <div className="triangle triangle-down-lg animate-float-1" style={{ top: '8%', right: '10%' }} />
      <div className="triangle triangle-down animate-float-2" style={{ top: '45%', left: '8%' }} />
      <div className="triangle triangle-up animate-float-3" style={{ bottom: '15%', right: '12%' }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >


          <h1 className="section-title mb-6">
            Frequently Asked
            <span className="block gradient-text">Questions</span>
          </h1>
          <p className="section-subtitle mx-auto text-gray-400">
            Everything you need to know about Naba and how it can help your business
          </p>
        </motion.div>

        <div className="space-y-3 mb-20">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="glass-card-premium p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-deep rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-navy-900" />
            </div>

            <h3 className="text-3xl font-black mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Can't find the answer you're looking for? Please reach out to our team
            </p>
            <motion.button
              className="btn-primary"
              onClick={handleContactSupport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
