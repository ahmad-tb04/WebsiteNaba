import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:5000/api';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div 
      className="glass-card-premium p-8 hover-lift relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Triangle Accent */}
      <div className="absolute bottom-0 left-0 triangle triangle-up opacity-[0.12] group-hover:opacity-20 transition-opacity" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex items-start gap-6">
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-accent-primary/30 to-accent-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-accent-primary/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-8 h-8 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>
        
        <div className="flex-grow">
          <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-deep rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">{testimonial.personName[0]}</span>
            </div>
            <div>
              <p className="text-white font-bold">{testimonial.personName}</p>
              <p className="text-sm text-accent-primary">{testimonial.role} at {testimonial.companyName}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [myTestimonial, setMyTestimonial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    companyName: '',
    personName: '',
    role: '',
    email: '',
    content: ''
  });

  useEffect(() => {
    fetchTestimonials();
    fetchMyTestimonial();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${API_URL}/testimonials`);
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyTestimonial = async () => {
    try {
      const response = await fetch(`${API_URL}/testimonials/my`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        setMyTestimonial(data);
        setFormData({
          companyName: data.companyName,
          personName: data.personName,
          role: data.role,
          email: '',
          content: data.content
        });
      }
    } catch (error) {
      // No existing testimonial
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/testimonials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMessage('Thank you! Your testimonial has been submitted and is pending review.');
        setShowForm(false);
        fetchMyTestimonial();
      } else {
        const error = await response.json();
        setMessage(error.message || 'Failed to submit testimonial');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await fetch(`${API_URL}/testimonials/my`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          companyName: formData.companyName,
          personName: formData.personName,
          role: formData.role,
          content: formData.content
        })
      });

      if (response.ok) {
        setMessage('Testimonial updated successfully!');
        fetchMyTestimonial();
      } else {
        const error = await response.json();
        setMessage(error.message || 'Failed to update testimonial');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative py-24 px-4 overflow-hidden">
      {/* Decorative Triangles */}
      <div className="triangle triangle-up-lg animate-float-1" style={{ top: '10%', right: '8%' }} />
      <div className="triangle triangle-down animate-float-2" style={{ top: '50%', left: '5%' }} />
      <div className="triangle triangle-up animate-float-3" style={{ bottom: '15%', right: '12%' }} />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
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
            <span className="text-sm font-semibold text-accent-primary">Client Stories</span>
          </motion.div>
          
          <h1 className="section-title mb-6">
            What Our Clients
            <span className="block gradient-text">Say About Us</span>
          </h1>
          <p className="section-subtitle mx-auto text-gray-400">
            Real feedback from companies using Naba to transform their inventory management
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-10 h-10 border-3 border-accent-primary border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        ) : (
          <motion.div 
            className="text-center py-16 mb-20 glass-card-premium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-lg">No testimonials yet. Be the first to share your experience!</p>
          </motion.div>
        )}

        {/* My Testimonial Status */}
        {myTestimonial && (
          <motion.div 
            className="glass-card-light p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Your Testimonial</h3>
                <p className="text-gray-400">
                  Status: <span className={`font-medium ${
                    myTestimonial.status === 'Approved' ? 'text-green-400' :
                    myTestimonial.status === 'Rejected' ? 'text-red-400' :
                    'text-accent'
                  }`}>{myTestimonial.status}</span>
                </p>
              </div>
              {myTestimonial.status === 'Pending' && (
                <motion.button 
                  onClick={() => setShowForm(!showForm)}
                  className="btn-outline text-sm px-4 py-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {showForm ? 'Cancel' : 'Edit'}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}

        {/* Submit/Edit Form */}
        {(showForm || !myTestimonial) && (
          <motion.div 
            className="glass-card p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {myTestimonial ? 'Edit Your Testimonial' : 'Share Your Experience'}
            </h3>
            
            {message && (
              <motion.div 
                className={`p-4 rounded-lg mb-6 ${
                  message.includes('Thank') || message.includes('success') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {message}
              </motion.div>
            )}

            <form onSubmit={myTestimonial ? handleUpdate : handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="personName"
                    value={formData.personName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Role *</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                    placeholder="e.g., Operations Manager"
                  />
                </div>
                {!myTestimonial && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@company.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">Your email will never be shared publicly.</p>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Testimonial *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Share your experience with Naba..."
                />
              </div>
              
              <motion.button 
                type="submit" 
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {submitting ? 'Submitting...' : (myTestimonial ? 'Update Testimonial' : 'Submit Testimonial')}
              </motion.button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
