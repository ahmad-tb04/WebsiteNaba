import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="glass-card p-6 hover:border-accent/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <div className="flex-grow">
          <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="text-white font-medium">{testimonial.personName}</p>
              <p className="text-sm text-accent">{testimonial.role} at {testimonial.companyName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            What Our Clients
            <span className="block text-accent">Say About Us</span>
          </h1>
          <p className="section-subtitle mx-auto">
            Real feedback from companies using Naba to transform their inventory management.
          </p>
        </div>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-16 glass-card">
            <p className="text-gray-400">No testimonials yet. Be the first to share your experience!</p>
          </div>
        )}

        {/* My Testimonial Status */}
        {myTestimonial && (
          <div className="glass-card-light p-6 mb-8">
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
                <button 
                  onClick={() => setShowForm(!showForm)}
                  className="btn-outline text-sm px-4 py-2"
                >
                  {showForm ? 'Cancel' : 'Edit'}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Submit/Edit Form */}
        {(showForm || !myTestimonial) && (
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {myTestimonial ? 'Edit Your Testimonial' : 'Share Your Experience'}
            </h3>
            
            {message && (
              <div className={`p-4 rounded-lg mb-6 ${
                message.includes('Thank') || message.includes('success') 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-300 border border-red-500/30'
              }`}>
                {message}
              </div>
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
              
              <button 
                type="submit" 
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting...' : (myTestimonial ? 'Update Testimonial' : 'Submit Testimonial')}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
