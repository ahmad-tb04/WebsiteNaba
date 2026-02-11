import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Package, Boxes, Lightbulb } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 gradient-bg-radial opacity-60" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Glass Hero Card */}
            <motion.div
              className="glass-card-premium p-12 md:p-16 lg:p-20 mb-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-4">
                <span className="text-white">AI-Powered</span>
                <br />
                <span className="text-white">Inventory</span>
                <br />
                <span className="text-white">Intelligence for</span>
                <br />
                <span className="gradient-text gradient-shift">Smarter, Faster</span>
                <br />
                <span className="text-white">Decisions</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Naba helps companies optimize stock, reduce losses, and forecast demand
              with high accuracy using intelligent AI-driven predictions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Feature Section */}
      <section id="features" className="relative py-32 px-4 bg-gradient-to-b from-transparent to-navy-light/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title mb-4">
              Our <span className="gradient-text">Core Feature</span>
            </h2>
          </motion.div>

          {/* Core Feature Glass Card */}
          <motion.div
            className="glass-card-light p-10 md:p-14 relative overflow-hidden max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative z-10">
              {/* 3 Icons Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {[
                  { icon: Brain, label: 'AI-Powered Demand Forecasting' },
                  { icon: TrendingUp, label: 'Dynamic Lead-Time Prediction' },
                  { icon: Package, label: 'Shipping Time Prediction' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center hover-lift cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-accent-primary" />
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white">{feature.label}</h4>
                  </motion.div>
                ))}
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

              {/* Description */}
              <p className="text-gray-400 text-center max-w-4xl mx-auto mb-8 leading-relaxed">
                Naba continuously learns from company data, monitors patterns, and automatically retrains the
                model to maintain high accuracy across all predictions.
              </p>

              {/* Accuracy Badge */}
              <div className="flex justify-center">
                <motion.div
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-gray-900 font-bold px-8 py-3 rounded-full text-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Accuracy: 94%
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="relative py-32 px-4">

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
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: Boxes,
                title: 'Unified Data Integration & Smart Inventory Optimization',
                description: 'Connect all your data streams into one system and let Naba reduce dead-stock, prevent stockouts, and recommend optimized purchase decisions.'
              },
              {
                icon: Lightbulb,
                title: 'Scenario Simulation & What-If Analysis (XAI)',
                description: 'Explore business scenarios, test outcomes, and make informed decisions through explainable AI simulations.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-10 hover-lift relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent-primary/30 to-accent-primary/10 rounded-2xl flex items-center justify-center mb-6 text-accent-primary group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10" />
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
                Ready to Transform Your{' '}
                <span className="gradient-text">Inventory Management</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join leading companies using Naba to optimize their supply chain operations.
              </p>
              <motion.button
                className="btn-primary text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
