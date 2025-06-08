
import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To democratize AI technology and make intelligent automation accessible to businesses of all sizes.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A world where AI seamlessly integrates with human creativity to solve complex challenges.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in AI development and deployment practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best AI solutions emerge from diverse teams working together.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">42.ai</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Born from the intersection of cutting-edge research and practical business needs, 
            42.ai is pioneering the next generation of intelligent automation solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Founded by a team of AI researchers and industry veterans, 42.ai emerged from the 
              realization that while AI technology was advancing rapidly, businesses struggled 
              to implement these solutions effectively.
            </p>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              We bridge this gap by providing enterprise-grade AI solutions that are both 
              powerful and practical, helping organizations transform their operations and 
              unlock new possibilities.
            </p>
            <div className="glass-dark rounded-lg p-6">
              <div className="text-2xl font-bold gradient-text mb-2">Founded in 2023</div>
              <div className="text-foreground/60">With a vision to make AI accessible to all</div>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-blue-400/20 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 gradient-text">Why 42?</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Inspired by Douglas Adams' "The Hitchhiker's Guide to the Galaxy," 
                  where 42 is the answer to the ultimate question of life, the universe, 
                  and everything. We believe AI is the key to unlocking humanity's 
                  greatest challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group glass-dark rounded-xl p-6 hover:glow-blue transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 gradient-text">{value.title}</h4>
              <p className="text-foreground/70 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
