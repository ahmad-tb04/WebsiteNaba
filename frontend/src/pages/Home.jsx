import React from 'react';

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            AI-Powered Inventory
            <span className="block text-accent">Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Smarter, Faster Decisions
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
            Naba helps companies optimize stock, reduce losses, and forecast demand 
            with high accuracy using intelligent AI-driven predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#features" className="btn-primary">
              Explore Features
            </a>
            <a href="#cta" className="btn-outline">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Core Feature Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Feature</h2>
            <h3 className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              AI-Powered Demand Forecasting
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Dynamic Lead-Time Prediction</h4>
              <p className="text-gray-400">
                Predict lead times accurately to optimize ordering and reduce stockouts.
              </p>
            </div>
            
            <div className="glass-card p-8 hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-3">Shipping Time Prediction</h4>
              <p className="text-gray-400">
                Accurately forecast shipping times to improve planning and customer satisfaction.
              </p>
            </div>
          </div>
          
          <div className="glass-card-light p-8 md:p-12 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Naba continuously learns from company data, monitors patterns, and automatically 
              retrains the model to maintain high accuracy across all predictions.
            </p>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl px-6 py-4">
              <span className="text-4xl font-bold text-accent">94%</span>
              <span className="text-gray-300 text-lg">Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-4 bg-navy-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Key Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 hover:border-accent/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Unified Data Integration & Smart Inventory Optimization
              </h4>
              <p className="text-gray-400">
                Connect all your data streams into one system and let Naba reduce dead-stock, 
                prevent stockouts, and recommend optimized purchase decisions.
              </p>
            </div>
            
            <div className="glass-card p-8 hover:border-accent/30 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold mb-4">
                Scenario Simulation & What-If Analysis (XAI)
              </h4>
              <p className="text-gray-400">
                Explore business scenarios, test outcomes, and make informed decisions 
                through explainable AI simulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Ready to Transform Your
            <span className="block text-accent">Inventory Management?</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10">
            Join leading companies using Naba to optimize their supply chain operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Request a Demo
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
