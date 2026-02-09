import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
      {/* Large decorative triangles */}
      <div
        className="triangle triangle-up-lg animate-float-1"
        style={{ top: '10%', left: '5%' }}
      />
      <div
        className="triangle triangle-down-lg animate-float-2"
        style={{ top: '20%', right: '10%' }}
      />
      <div
        className="triangle triangle-up animate-float-3"
        style={{ top: '50%', left: '15%' }}
      />
      <div
        className="triangle triangle-down animate-float-4"
        style={{ top: '60%', right: '5%' }}
      />
      <div
        className="triangle triangle-up animate-float-5"
        style={{ top: '80%', left: '10%' }}
      />

      {/* Medium triangles */}
      <div
        className="triangle triangle-up animate-float-2"
        style={{ top: '30%', left: '80%' }}
      />
      <div
        className="triangle triangle-down animate-float-3"
        style={{ top: '70%', right: '20%' }}
      />
      <div
        className="triangle triangle-up animate-float-1"
        style={{ top: '40%', left: '60%' }}
      />

      {/* Small accent triangles */}
      <div
        className="triangle triangle-up-lg animate-float-4"
        style={{ top: '85%', right: '15%', opacity: 0.08 }}
      />
      <div
        className="triangle triangle-down animate-float-5"
        style={{ top: '15%', left: '40%' }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, transparent 0%, var(--navy-primary) 70%)'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
