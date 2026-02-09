import React, { useState } from 'react';

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

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="glass-card overflow-hidden mb-4">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-medium text-white pr-4">{question}</span>
        <svg 
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-5 text-gray-400 border-t border-white/10 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="section-title">
            Frequently Asked
            <span className="block text-accent">Questions</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Everything you need to know about Naba and how it can help your business.
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-16 glass-card-light p-8 text-center">
          <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            Can't find the answer you're looking for? Please reach out to our team.
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
