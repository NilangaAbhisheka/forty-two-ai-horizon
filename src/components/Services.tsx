
import React from 'react';
import { Globe, Smartphone, Database, Cloud, TestTube, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and optimized for performance.',
      features: ['React & Next.js', 'Full-Stack Solutions', 'Progressive Web Apps'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter Apps'],
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Robust backend systems and APIs that scale with your business needs.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and CI/CD pipelines for reliable, scalable deployments.',
      features: ['AWS & Azure', 'Docker & Kubernetes', 'Automated Deployment'],
    },
    {
      icon: TestTube,
      title: 'QA & Testing',
      description: 'Comprehensive testing strategies to ensure your software works flawlessly.',
      features: ['Automated Testing', 'Quality Assurance', 'Performance Testing'],
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful interfaces with intuitive experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
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
            End-to-end software development services designed to bring your ideas to life 
            and scale your business to new heights.
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
              Ready to Build Something Amazing?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution 
              that drives your business forward.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 glow-blue">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
