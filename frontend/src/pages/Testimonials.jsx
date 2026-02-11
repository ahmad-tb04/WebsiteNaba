import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../config/supabaseClient';
import { Plus, Check, X, Loader2 } from 'lucide-react';

const TestimonialCard = ({ testimonial, index }) => {
  const personName = testimonial.person_name || testimonial.personName || 'Anonymous';
  const companyName = testimonial.company_name || testimonial.companyName || '';
  const role = testimonial.role || '';

  return (
    <motion.div
      className="glass-card p-8 hover-lift relative overflow-hidden group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Author Info - Top */}
        <div className="mb-5">
          <h4 className="text-lg font-bold text-white">{personName}</h4>
          <p className="text-sm text-accent-primary font-medium">
            {role}{role && companyName ? ' at ' : ''}{companyName}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5" />

        {/* Testimonial Content - Bottom */}
        <p className="text-gray-300 leading-relaxed text-base">
          {testimonial.content}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    company_name: '',
    person_name: '',
    role: '',
    email: '',
    content: ''
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
      } else {
        setTestimonials(data || []);
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([{
          company_name: formData.company_name,
          person_name: formData.person_name,
          role: formData.role,
          email: formData.email,
          content: formData.content
        }]);

      if (error) {
        console.error('Supabase error:', error);
        setMessage('Failed to submit testimonial. Please try again.');
        setMessageType('error');
      } else {
        setMessage('Thank you! Your testimonial has been submitted successfully.');
        setMessageType('success');
        setFormData({
          company_name: '',
          person_name: '',
          role: '',
          email: '',
          content: ''
        });
        setShowForm(false);
        fetchTestimonials();
      }
    } catch (error) {
      console.error('Submit error:', error);
      setMessage('Network error. Please try again.');
      setMessageType('error');
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
      <div className="triangle triangle-down-lg animate-float-1" style={{ top: '10%', right: '8%' }} />
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            What Our Clients
            <span className="block gradient-text">Say About Us</span>
          </h1>
          <p className="section-subtitle mx-auto text-gray-400">
            Real feedback from companies using Naba to transform their inventory management
          </p>
        </motion.div>

        {/* Success/Error Message Toast */}
        <AnimatePresence>
          {message && !showForm && (
            <motion.div
              className={`max-w-2xl mx-auto mb-12 p-4 rounded-2xl text-center ${messageType === 'success'
                ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3">
                {messageType === 'success' ? (
                  <Check className="w-6 h-6" />
                ) : (
                  <X className="w-6 h-6" />
                )}
                <span className="font-medium">{message}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center py-12">
            <Loader2 className="w-10 h-10 text-accent-primary animate-spin mx-auto" />
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id || index} testimonial={testimonial} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16 mb-16 glass-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 text-lg">No testimonials yet. Be the first to share your experience!</p>
          </motion.div>
        )}

        {/* Share Your Experience CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {!showForm ? (
            <motion.button
              onClick={() => {
                setShowForm(true);
                setMessage('');
              }}
              className="btn-primary text-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus className="w-5 h-5" />
              Share Your Experience
            </motion.button>
          ) : (
            <AnimatePresence>
              <motion.div
                className="glass-card-premium p-8 max-w-2xl mx-auto text-left"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">Share Your Experience</h3>
                  <motion.button
                    onClick={() => setShowForm(false)}
                    className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </motion.button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="person_name"
                        value={formData.person_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                      <input
                        type="text"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all"
                        placeholder="Your Company"
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
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all"
                        placeholder="Your Role"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all"
                        placeholder="Your Email"
                      />
                      <p className="text-xs text-gray-500 mt-1">Never shared publicly</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Testimonial *</label>
                    <textarea
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary/50 focus:bg-white/10 transition-all resize-none"
                      placeholder="Share your experience with Naba..."
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </span>
                      ) : 'Submit Testimonial'}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="btn-glass px-6"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
