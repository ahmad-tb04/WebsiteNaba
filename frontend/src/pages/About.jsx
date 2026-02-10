import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: "Shamma Al-Khawaldeh",
    role: "AI Engineering (3rd Year)",
    description: "Specializes in machine learning models and AI architecture design.",
    initial: "SA",
    color: "from-accent-primary to-accent-deep",
    linkedin: ""
  },
  {
    name: "Ola Amro",
    role: "Mechanical Engineering (5th Year)",
    description: "Expert in systems optimization and process engineering.",
    initial: "OA",
    color: "from-blue-500 to-blue-700",
    linkedin: ""
  },
  {
    name: "Aws Abwini",
    role: "Cyber Security (4th Year)",
    description: "Cloud infrastructure and security specialist.",
    initial: "AA",
    color: "from-accent-dark to-accent-deep",
    linkedin: ""
  },
  {
    name: "Raneem Khanji",
    role: "AI Engineering (4th Year)",
    description: "Data scientist focused on AI-driven analytics and insights.",
    initial: "RK",
    color: "from-accent-primary to-yellow-600",
    linkedin: ""
  },
  {
    name: "Ahmad Tbakhi",
    role: "Computer Science (4th Year)",
    description: "Full-stack developer with a passion for AI integration.",
    initial: "AT",
    color: "from-blue-600 to-accent-primary",
    linkedin: ""
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
        <div
          className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
        >
          <span className="text-3xl font-black text-white">{member.initial}</span>
        </div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">{member.name}</h3>
          <p className="text-accent-primary text-sm font-semibold mb-3">{member.role}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>

          {/* LinkedIn Link */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect on LinkedIn</span>
            </a>
          )}
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
          <h1 className="section-title mb-8">
            Who <span className="gradient-text">We Are</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Naba is built by five passionate students from Al-Hussein Technical University
              as part of an innovation challenge
            </p>
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
              className="glass-card-premium p-12 md:p-16 relative overflow-hidden hover-lift"
            >
              {/* Gradient Accents */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-deep rounded-2xl flex items-center justify-center mx-auto mb-8 glow-accent">
                  <Zap className="w-10 h-10 text-navy-900" />
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
