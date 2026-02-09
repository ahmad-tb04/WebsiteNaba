import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    verifyToken();
    fetchTestimonials();
  }, []);

  const getToken = () => localStorage.getItem('adminToken');

  const verifyToken = async () => {
    try {
      const response = await fetch(`${API_URL}/admin/verify`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      if (!response.ok) {
        navigate('/admin/login');
      }
    } catch {
      navigate('/admin/login');
    }
  };

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${API_URL}/testimonials/all`, {
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
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

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/testimonials/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        fetchTestimonials();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const deleteTestimonial = async (id) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return;
    
    try {
      const response = await fetch(`${API_URL}/testimonials/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getToken()}` }
      });
      if (response.ok) {
        fetchTestimonials();
      }
    } catch (error) {
      console.error('Failed to delete:', error);
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' || t.status.toLowerCase() === filter
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'rejected': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-accent/20 text-accent border-accent/30';
    }
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400">Manage testimonials</p>
          </div>
          <button onClick={logout} className="btn-outline text-sm px-4 py-2">
            Logout
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {['all', 'pending', 'approved', 'rejected'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                filter === f 
                  ? 'bg-accent text-navy-900' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-bold text-white">{testimonials.length}</p>
            <p className="text-gray-400 text-sm">Total</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-bold text-accent">{testimonials.filter(t => t.status === 'Pending').length}</p>
            <p className="text-gray-400 text-sm">Pending</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-bold text-green-400">{testimonials.filter(t => t.status === 'Approved').length}</p>
            <p className="text-gray-400 text-sm">Approved</p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-2xl font-bold text-red-400">{testimonials.filter(t => t.status === 'Rejected').length}</p>
            <p className="text-gray-400 text-sm">Rejected</p>
          </div>
        </div>

        {/* Testimonials List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-2 border-accent border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <p className="text-gray-400">No testimonials found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-semibold text-white">{testimonial.personName}</h3>
                      <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(testimonial.status)}`}>
                        {testimonial.status}
                      </span>
                    </div>
                    <p className="text-accent text-sm mb-2">{testimonial.role} at {testimonial.companyName}</p>
                    <p className="text-gray-300 mb-3">"{testimonial.content}"</p>
                    <p className="text-gray-500 text-xs">
                      Submitted: {new Date(testimonial.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {testimonial.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => updateStatus(testimonial.id, 'Approved')}
                          className="px-3 py-1.5 bg-green-500/20 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-colors"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(testimonial.id, 'Rejected')}
                          className="px-3 py-1.5 bg-red-500/20 text-red-300 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      className="px-3 py-1.5 bg-white/5 text-gray-400 rounded-lg text-sm hover:bg-white/10 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
