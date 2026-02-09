import React from 'react';

// Static partners data - easy to update
const partners = [
  { name: "TechCorp Industries", category: "Manufacturing" },
  { name: "Global Logistics Co.", category: "Logistics" },
  { name: "RetailMax", category: "Retail" },
  { name: "SupplyChain Pro", category: "Supply Chain" },
  { name: "Warehouse Solutions", category: "Warehousing" },
  { name: "Smart Inventory Ltd.", category: "Technology" },
];

const PartnerCard = ({ partner }) => {
  // Generate placeholder logo with company initials
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2);
  };

  return (
    <div className="glass-card p-8 hover:border-accent/30 transition-all duration-300 group text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
        <span className="text-2xl font-bold text-accent">{getInitials(partner.name)}</span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{partner.name}</h3>
      <p className="text-sm text-gray-400">{partner.category}</p>
    </div>
  );
};

const Partners = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            Our Trusted
            <span className="block text-accent">Partners</span>
          </h1>
          <p className="section-subtitle mx-auto">
            We're proud to work with industry leaders who trust Naba for their inventory management needs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>

        {/* Become a Partner CTA */}
        <div className="glass-card-light p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-gray-300 mb-8">
            Join our network of industry partners and help transform inventory management 
            for businesses worldwide.
          </p>
          <button className="btn-primary">
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;
