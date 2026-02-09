import React from 'react';

const teamMembers = [
  {
    name: "Shamma Al-Khawaldeh",
    role: "AI Engineering (3rd Year)",
    description: "Specializes in machine learning models and AI architecture design.",
    initial: "S"
  },
  {
    name: "Ola Amro",
    role: "Mechanical Engineering (5th Year)",
    description: "Expert in systems optimization and process engineering.",
    initial: "O"
  },
  {
    name: "Aws Abwini",
    role: "Cyber Security (4th Year)",
    description: "Cloud infrastructure and security specialist.",
    initial: "A"
  },
  {
    name: "Raneem Khanji",
    role: "AI Engineering (4th Year)",
    description: "Data scientist focused on AI-driven analytics and insights.",
    initial: "R"
  },
  {
    name: "Ahmad Tbakhi",
    role: "Computer Science (4th Year)",
    description: "Full-stack developer with a passion for AI integration.",
    initial: "A"
  }
];

const TeamCard = ({ member }) => {
  return (
    <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
          <span className="text-2xl font-bold text-navy-900">{member.initial}</span>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
          <p className="text-accent text-sm font-medium mb-2">{member.role}</p>
          <p className="text-gray-400 text-sm">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Who We Are */}
        <section className="text-center mb-20">
          <h1 className="section-title">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-300 mb-6">
              Naba is built by five students from Al-Hussein Technical University as part of 
              an innovation challenge.
            </p>
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/30 rounded-xl px-6 py-3">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-white font-medium">We were selected among the top winning teams.</span>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              Five passionate students building the future of inventory management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="text-center">
          <div className="glass-card-light p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300">
              We aim to help businesses make intelligent inventory decisions using 
              data-driven, ethical, and efficient AI technology.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
