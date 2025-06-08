
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project 
            and explore how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center glass-dark rounded-lg p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-foreground/70">hello@42.ai</div>
                </div>
              </div>

              <div className="flex items-center glass-dark rounded-lg p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-foreground/70">+1 (555) 042-AI42</div>
                </div>
              </div>

              <div className="flex items-center glass-dark rounded-lg p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-foreground/70">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 gradient-text">Why Choose 42.ai?</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  Expert AI engineers and data scientists
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  Proven track record with enterprise clients
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  End-to-end AI solution development
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                  24/7 support and maintenance
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-dark rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project and how we can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-all duration-300 glow-blue flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
