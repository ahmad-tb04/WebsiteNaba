import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const problems = [
  {
    title: "Overstock",
    description: "Excess inventory ties up capital and storage space, leading to increased holding costs and potential waste.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    impact: "Up to 25% of capital locked in excess inventory"
  },
  {
    title: "Dead Stock",
    description: "Products that stop selling become obsolete, resulting in write-offs and wasted resources.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    impact: "Average businesses lose 3-5% annually to dead stock"
  },
  {
    title: "Poor Forecasting",
    description: "Inaccurate demand predictions lead to either stockouts or overstock, damaging customer satisfaction and profitability.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    impact: "40% of businesses struggle with demand forecasting"
  },
  {
    title: "Stockouts",
    description: "Running out of products means lost sales, disappointed customers, and damaged reputation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    impact: "Stockouts can result in 4% revenue loss"
  }
];

const solutions = [
  {
    title: "AI-Powered Demand Forecasting",
    description: "94% accuracy predictions that adapt to your business patterns"
  },
  {
    title: "Smart Inventory Optimization",
    description: "Automated recommendations to maintain optimal stock levels"
  },
  {
    title: "Unified Data Integration",
    description: "Connect all your data streams for complete visibility"
  },
  {
    title: "Scenario Simulation",
    description: "Test decisions before implementing with what-if analysis"
  }
];

const ProblemCard = ({ problem, index }) => {
  return (
    <motion.div 
      className="glass-card-premium p-8 hover-lift relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Triangle Accent */}
      <div className="absolute bottom-0 right-0 triangle triangle-up opacity-[0.15] group-hover:opacity-25 transition-opacity" style={{ borderColor: 'transparent transparent #ef4444 transparent' }} />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform backdrop-blur-sm border border-red-500/30">
          {problem.icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{problem.title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{problem.description}</p>
        <p className="text-sm text-red-400 font-semibold inline-block px-4 py-2 bg-red-500/10 rounded-lg border border-red-500/20">
          {problem.impact}
        </p>
      </div>
    </motion.div>
  );
};

const Problems = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Triangles */}
      <div className="triangle triangle-down-lg animate-float-1" style={{ top: '10%', right: '8%' }} />
      <div className="triangle triangle-up animate-float-2" style={{ top: '50%', left: '5%' }} />
      <div className="triangle triangle-down animate-float-3" style={{ bottom: '20%', right: '15%' }} />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-red-500/30 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale:0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-red-400">The Challenge</span>
          </motion.div>
          
          <h1 className="section-title mb-6">
            The Problems We
            <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Solve</span>
          </h1>
          <p className="section-subtitle mx-auto text-gray-400">
            Traditional inventory management methods leave businesses vulnerable to these common challenges
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>

        {/* How Naba Helps */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            How <span className="gradient-text">Naba</span> Helps
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            Our AI-powered platform addresses these challenges head-on with intelligent solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-8 hover-lift flex items-start gap-5 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 bg-accent-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-accent-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{solution.title}</h4>
                <p className="text-gray-400 leading-relaxed">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <motion.button 
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Features
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Problems;
