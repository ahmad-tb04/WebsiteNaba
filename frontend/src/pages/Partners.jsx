import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

// Static partners data
const partners = [
  { name: "Al Hussain Technical University", category: "Education", color: "from-blue-600 to-blue-800", logo: "/Htu.png" },
  { name: "TechCorp Industries", category: "Manufacturing", color: "from-accent-primary to-accent-deep" },
  { name: "Global Logistics Co.", category: "Logistics", color: "from-blue-500 to-blue-700" },
  { name: "RetailMax", category: "Retail", color: "from-accent-dark to-orange-600" },
  { name: "SupplyChain Pro", category: "Supply Chain", color: "from-blue-600 to-accent-primary" },
  { name: "Warehouse Solutions", category: "Warehousing", color: "from-accent-light to-accent-dark" },
  { name: "Smart Inventory Ltd.", category: "Technology", color: "from-blue-400 to-blue-600" },
];

const PartnerCard = ({ partner, index }) => {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2);
  };

  return (
    <motion.div
      className="glass-card-premium p-8 text-center hover-lift relative overflow-hidden group"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Triangle Accent */}
      <div className="absolute top-0 left-0 triangle triangle-up-lg opacity-[0.08] group-hover:opacity-[0.15] transition-opacity" />

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div
          className={`w-24 h-24 ${partner.logo ? 'bg-white' : `bg-gradient-to-br ${partner.color}`} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden`}
        >
          {partner.logo ? (
            <img src={partner.logo} alt={partner.name} className="w-20 h-20 object-contain" />
          ) : (
            <span className="text-3xl font-black text-white">{getInitials(partner.name)}</span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-light transition-colors">{partner.name}</h3>
        <p className="text-sm text-accent-primary font-medium px-4 py-1 bg-accent-primary/10 rounded-full inline-block border border-accent-primary/20">
          {partner.category}
        </p>
      </div>
    </motion.div>
  );
};

const Partners = () => {
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-24">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </div>

        {/* Become a Partner CTA */}
        <motion.div
          className="glass-card-premium p-12 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-primary to-accent-deep rounded-2xl flex items-center justify-center mx-auto mb-8 glow-accent">
              <Users className="w-10 h-10 text-navy-900" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Become a <span className="gradient-text">Partner</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our network of industry partners and help transform inventory management
              for businesses worldwide
            </p>
            <motion.button
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partners;
