import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Shamma Al-Khawaldeh",
    role: "AI Engineering (3rd Year)",
    description: "Specializes in machine learning models and AI architecture design.",
    initial: "S",
    color: "from-accent-primary to-accent-deep"
  },
  {
    name: "Ola Amro",
    role: "Mechanical Engineering (5th Year)",
    description: "Expert in systems optimization and process engineering.",
    initial: "O",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Aws Abwini",
    role: "Cyber Security (4th Year)",
    description: "Cloud infrastructure and security specialist.",
    initial: "A",
    color: "from-accent-dark to-accent-deep"
  },
  {
    name: "Raneem Khanji",
    role: "AI Engineering (4th Year)",
    description: "Data scientist focused on AI-driven analytics and insights.",
    initial: "R",
    color: "from-accent-primary to-yellow-600"
  },
  {
    name: "Ahmad Tbakhi",
    role: "Computer Science (4th Year)",
    description: "Full-stack developer with a passion for AI integration.",
    initial: "A",
    color: "from-blue-600 to-accent-primary"
  }
];

const TeamCard = ({ member, index }) => {
  return (
    <motion.div 
      className="glass-card-premium p-8 hover-lift relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Triangle Accent */}
      <div className="absolute top-0 right-0 triangle triangle-down opacity-20 group-hover:opacity-30 transition-opacity" />
      
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start gap-6">
        <motion.div 
          className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-3xl font-black text-white">{member.initial}</span>
        </motion.div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">{member.name}</h3>
          <p className="text-accent-primary text-sm font-semibold mb-3">{member.role}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Triangles */}
      <div className="triangle triangle-up-lg animate-float-1" style={{ top: '5%', right: '10%' }} />
      <div className="triangle triangle-down-lg animate-float-2" style={{ top: '40%', left: '5%' }} />
      <div className="triangle triangle-up animate-float-3" style={{ bottom: '15%', right: '20%' }} />
      
      <div className="max-w-7xl mx-auto">
        {/* Who We Are */}
        <motion.section 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-accent-primary/30 rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-accent-primary">About Naba</span>
          </motion.div>
          
          <h1 className="section-title mb-8">
            Who <span className="gradient-text">We Are</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Naba is built by five passionate students from Al-Hussein Technical University 
              as part of an innovation challenge
            </p>
            
            <motion.div 
              className="glass-card-premium p-8 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-primary to-accent-deep rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-accent-primary font-bold text-sm mb-1">🏆 TOP WINNERS</div>
                  <div className="text-white font-semibold">Selected among winning teams</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="mb-32">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="section-subtitle mx-auto text-gray-400">
              Five passionate students building the future of inventory management
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <motion.section 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Background Pattern */}
            <div className="absolute inset-0 triangle-pattern opacity-30" />
            
            <motion.div 
              className="glass-card-premium p-12 md:p-16 relative overflow-hidden"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Accents */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-deep rounded-2xl flex items-center justify-center mx-auto mb-8 glow-accent">
                  <svg className="w-10 h-10 text-navy-900" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-8">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  We aim to help businesses make <span className="text-accent-primary font-bold">intelligent inventory decisions</span> using 
                  data-driven, ethical, and efficient AI technology
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
