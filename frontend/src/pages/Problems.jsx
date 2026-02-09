import React from 'react';
import { Link } from 'react-router-dom';

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

const ProblemCard = ({ problem }) => {
  return (
    <div className="glass-card p-6 hover:border-red-500/30 transition-all duration-300 group">
      <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 text-red-400 group-hover:scale-110 transition-transform">
        {problem.icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
      <p className="text-gray-400 mb-4">{problem.description}</p>
      <p className="text-sm text-red-400 font-medium">{problem.impact}</p>
    </div>
  );
};

const Problems = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            The Problems We
            <span className="block text-red-400">Solve</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Traditional inventory management methods leave businesses vulnerable to these 
            common challenges.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} />
          ))}
        </div>

        {/* How Naba Helps */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-accent">Naba</span> Helps
          </h2>
          <p className="section-subtitle mx-auto">
            Our AI-powered platform addresses these challenges head-on with intelligent solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div key={index} className="glass-card p-6 hover:border-accent/30 transition-all duration-300 flex items-start gap-4">
              <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{solution.title}</h4>
                <p className="text-gray-400">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/" className="btn-primary inline-block">
            Explore Our Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Problems;
