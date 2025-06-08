
import React from 'react';
import { Brain, Cog, BarChart3, Database, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      features: ['Custom AI Models', 'API Integration', 'Real-time Processing'],
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Automate complex business processes to increase efficiency and reduce costs.',
      features: ['Workflow Optimization', 'RPA Solutions', 'Smart Scheduling'],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage data-driven insights to make informed decisions and predict trends.',
      features: ['Forecasting Models', 'Risk Assessment', 'Performance Optimization'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for your AI initiatives.',
      features: ['ETL Pipelines', 'Data Warehousing', 'Real-time Streaming'],
    },
    {
      icon: Code,
      title: 'Custom AI Development',
      description: 'Develop bespoke AI solutions tailored to your specific business needs.',
      features: ['ML Algorithms', 'Neural Networks', 'Computer Vision'],
    },
    {
      icon: Zap,
      title: 'AI Consulting',
      description: 'Strategic guidance to help you navigate your AI transformation journey.',
      features: ['AI Strategy', 'Technology Assessment', 'Implementation Planning'],
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-dark rounded-xl p-8 hover:glow-purple transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold gradient-text">{service.title}</h3>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-foreground/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full glass px-4 py-2 rounded-lg hover:glow-blue transition-all duration-300 text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-600/20">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can solve your specific challenges 
              and unlock new opportunities for growth.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 glow-blue">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
