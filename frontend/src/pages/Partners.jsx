import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

// Static partners data
const partners = [
  { name: "Al Hussain Technical University", category: "Education", color: "from-blue-600 to-blue-800", logo: "/Htu.png" },
  { name: "TechCorp Industries", category: "Manufacturing", color: "from-accent-primary to-accent-deep" },
  { name: "Global Logistics Co.", category: "Logistics", color: "from-blue-500 to-blue-700" },

];

const PartnerCard = ({ partner, index }) => {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2);
  };

  return (
    <motion.div
      className="glass-card-premium p-8 text-center hover-lift relative overflow-hidden group flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className={`w-24 h-24 ${partner.logo ? 'bg-white' : `bg-gradient-to-br ${partner.color}`} rounded-3xl flex items-center justify-center mb-6 shadow-lg overflow-hidden flex-shrink-0`}
        >
          {partner.logo ? (
            <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain" />
          ) : (
            <span className="text-3xl font-black text-white">{getInitials(partner.name)}</span>
          )}
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-accent-light transition-colors leading-tight">{partner.name}</h3>
        <span className="text-sm text-accent-primary font-medium px-4 py-1.5 bg-accent-primary/10 rounded-full border border-accent-primary/20 whitespace-nowrap">
          {partner.category}
        </span>
      </div>
    </motion.div>
  );
};

const Partners = () => {
  useEffect(() => { document.title = 'Partners - Naba'; }, []);
  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Triangles */}
      <div className="triangle triangle-down-lg animate-float-1" style={{ top: '12%', right: '8%' }} />
      <div className="triangle triangle-up animate-float-2" style={{ top: '55%', left: '10%' }} />
      <div className="triangle triangle-down animate-float-3" style={{ bottom: '18%', right: '15%' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="section-title mb-6">
            Our Trusted
            <span className="block gradient-text">Partners</span>
          </h1>
          <p className="section-subtitle mx-auto text-gray-400">
            We're proud to work with industry leaders who trust Naba for their inventory management needs
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-24">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Partners;
