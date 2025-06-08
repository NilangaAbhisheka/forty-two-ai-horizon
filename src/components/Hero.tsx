
import React from 'react';
import { ArrowRight, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delay opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-blue-300 rounded-full animate-float-delay-2 opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-purple-300 rounded-full animate-float opacity-70"></div>
        
        {/* Code Pattern Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M200,400 Q400,300 600,400 T800,400" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '1s'}} />
          <path d="M150,600 Q350,500 550,600 T850,600" stroke="url(#line-gradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '2s'}} />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center glass px-4 py-2 rounded-full mb-8 animate-pulse-glow">
            <Code size={16} className="mr-2 text-blue-400" />
            <span className="text-sm font-medium gradient-text">✨ Building Software That Builds Businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Custom Software.</span>{' '}
            <span className="gradient-text">Built Right.</span>{' '}
            <span className="gradient-text">Delivered Fast.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            From startup MVPs to enterprise solutions - we craft custom web and mobile applications 
            that drive real business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 glow-blue flex items-center gap-2">
              Book Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass px-8 py-4 rounded-lg font-semibold hover:glow-purple transition-all duration-300">
              See Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-dark rounded-lg p-6 hover:glow-blue transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">150+</div>
              <div className="text-foreground/60">Projects Delivered</div>
            </div>
            <div className="glass-dark rounded-lg p-6 hover:glow-purple transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-foreground/60">Client Satisfaction</div>
            </div>
            <div className="glass-dark rounded-lg p-6 hover:glow-blue transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-foreground/60">Development Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
