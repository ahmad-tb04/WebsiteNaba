import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Triangle Elements */}
      <div className="triangle triangle-up-lg animate-float-1" style={{ top: '10%', right: '5%' }} />
      <div className="triangle triangle-down-lg animate-float-2" style={{ top: '40%', left: '8%' }} />
      <div className="triangle triangle-up animate-float-3" style={{ top: '70%', right: '15%' }} />
      <div className="triangle triangle-down animate-float-4" style={{ bottom: '20%', left: '20%' }} />
      <div className="triangle triangle-up-lg animate-float-5" style={{ bottom: '10%', right: '25%' }} />
      <div className="triangle triangle-up animate-float-6" style={{ top: '25%', right: '35%' }} />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 gradient-bg-radial opacity-60" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 triangle-pattern" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow Text */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-accent-primary/30 rounded-full px-6 py-2 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent-primary">AI-Powered Intelligence</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 leading-[1.1]">
              <span className="block text-white">Transform Your</span>
              <span className="block gradient-text gradient-shift">Inventory Management</span>
            </h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Smarter decisions, precision forecasting, zero guesswork
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Naba uses cutting-edge AI to optimize stock levels, reduce losses, and forecast demand 
              with <span className="text-accent-primary font-bold">94% accuracy</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Free
              </motion.button>
              <motion.button 
                className="btn-glass"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Floating Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { label: 'Accuracy', value: '94%', icon: '🎯' },
              { label: 'Cost Reduction', value: '35%', icon: '💰' },
              { label: 'Time Saved', value: '20h/week', icon: '⚡' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card-premium p-6 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Feature Section */}
      <section id="features" className="relative py-32 px-4 bg-gradient-to-b from-transparent to-navy-light/30">
        {/* Triangle accents */}
        <div className="triangle triangle-down-lg animate-float-3" style={{ top: '5%', right: '10%', opacity: 0.06 }} />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-4">
              Our <span className="gradient-text">Core Feature</span>
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Powered Demand Forecasting
            </h3>
            <p className="section-subtitle mx-auto text-gray-400">
              Predict the future with unmatched precision
            </p>
          </motion.div>
          
          {/* Feature Cards - Asymmetric Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              className="glass-card-premium p-10 hover-lift relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Triangle Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-primary/20 to-transparent" 
                   style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-deep rounded-2xl flex items-center justify-center mb-6 glow-accent">
                  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Dynamic Lead-Time Prediction</h4>
                <p className="text-gray-400 leading-relaxed">
                  Predict lead times with surgical precision to optimize ordering schedules and eliminate stockouts before they happen.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card-premium p-10 hover-lift relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Triangle Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tl from-accent-primary/20 to-transparent" 
                   style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 glow-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Shipping Time Prediction</h4>
                <p className="text-gray-400 leading-relaxed">
                  Accurately forecast shipping times to improve planning, boost customer satisfaction, and streamline operations.
                </p>
              </div>
            </motion.div>
          </div>
          
          {/* Accuracy Showcase */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass-card-light p-12 md:p-16 text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 triangle-pattern opacity-50" />
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Naba continuously learns from your company data, monitors emerging patterns, and automatically 
                  retrains the model to maintain peak accuracy across all predictions.
                </p>
                
                <motion.div 
                  className="inline-flex items-center gap-6 bg-gradient-to-r from-accent-primary/20 via-accent-primary/10 to-transparent border-2 border-accent-primary/40 rounded-3xl px-10 py-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-black gradient-text mb-2">94%</div>
                    <div className="text-gray-300 text-lg font-semibold">Prediction Accuracy</div>
                  </div>
                  <div className="h-16 w-px bg-gradient-to-b from-transparent via-accent-primary/50 to-transparent" />
                  <div className="text-left">
                    <div className="text-accent-primary font-bold text-sm mb-1">INDUSTRY LEADING</div>
                    <div className="text-gray-400 text-sm">Verified on real data</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="relative py-32 px-4">
        <div className="triangle triangle-up-lg animate-float-1" style={{ top: '10%', left: '5%', opacity: 0.05 }} />
        
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Additional <span className="gradient-text">Key Features</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Everything you need for intelligent inventory management
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
                title: 'Unified Data Integration & Smart Inventory Optimization',
                description: 'Connect all your data streams into one unified system. Naba reduces dead-stock, prevents costly stockouts, and recommends optimized purchase decisions based on real-time analysis.'
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Scenario Simulation & What-If Analysis (XAI)',
                description: 'Explore potential business scenarios and test outcomes before making critical decisions. Our explainable AI simulations provide transparent insights you can trust.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="glass-card p-10 hover-lift relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-primary/30 to-accent-primary/10 rounded-2xl flex items-center justify-center mb-6 text-accent-primary group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-card-premium p-12 md:p-16 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-blue-500/10" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join innovative companies using AI to optimize their inventory management
              </p>
              <motion.button 
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
