'use client';

import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  GraduationCap,
  Shield,
  Users,
  Globe,
  MessageCircle,
  Video
} from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Analytics', href: '#analytics' },
        { label: 'Teacher Management', href: '#teacher-management' },
        { label: 'Student Success', href: '#student-success' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Blog', href: '#blog' },
        { label: 'Press', href: '#press' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'API Reference', href: '#api' },
        { label: 'Help Center', href: '#help' },
        { label: 'Community', href: '#community' },
        { label: 'Status', href: '#status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'GDPR', href: '#gdpr' },
        { label: 'Security', href: '#security' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Globe, href: '#facebook', label: 'Facebook' },
    { icon: MessageCircle, href: '#twitter', label: 'Twitter' },
    { icon: Globe, href: '#linkedin', label: 'LinkedIn' },
    { icon: Globe, href: '#instagram', label: 'Instagram' },
    { icon: Video, href: '#youtube', label: 'YouTube' }
  ];

  const contactInfo = [
    { icon: Mail, label: 'support@eduadmin.com', href: 'mailto:support@eduadmin.com' },
    { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, label: 'San Francisco, CA', href: '#location' }
  ];

  const certifications = [
    { icon: Shield, label: 'SOC 2 Compliant' },
    { icon: GraduationCap, label: 'FERPA Compliant' },
    { icon: Users, label: 'COPPA Compliant' }
  ];

  return (
    <footer className="relative bg-background-secondary border-t border-background-card/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <Heading size="h4" className="text-text-primary">EduAdmin</Heading>
                </div>
                
                <Text color="secondary" className="leading-relaxed max-w-sm">
                  Transforming education management with innovative technology and data-driven insights. Empowering institutions worldwide to achieve excellence.
                </Text>

                {/* Newsletter Signup */}
                <div className="space-y-3">
                  <Text weight="medium" className="text-text-primary">Stay Updated</Text>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 bg-background-card border border-background-card/50 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button size="sm" className="group">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <Text weight="medium" className="text-text-primary">Follow Us</Text>
                  <div className="flex space-x-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-background-card border border-background-card/50 rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-200 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <Heading size="h6" className="text-text-primary">{section.title}</Heading>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Contact & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-8 border-t border-background-card/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-3">
              <Heading size="h6" className="text-text-primary">Contact Us</Heading>
              {contactInfo.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
                >
                  <contact.icon className="w-4 h-4" />
                  <span>{contact.label}</span>
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <Heading size="h6" className="text-text-primary">Compliance & Security</Heading>
              {certifications.map((cert) => (
                <div key={cert.label} className="flex items-center space-x-2">
                  <cert.icon className="w-4 h-4 text-success" />
                  <Text size="sm" color="secondary">{cert.label}</Text>
                </div>
              ))}
            </div>

            {/* App Stores */}
            <div className="space-y-3">
              <Heading size="h6" className="text-text-primary">Mobile Apps</Heading>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  Download iOS
                </Button>
                <Button variant="outline" size="sm">
                  Download Android
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-background-card/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <Text size="sm" color="secondary">
                © 2024 EduAdmin. All rights reserved.
              </Text>
            </div>
            
            <div className="flex items-center space-x-6">
              <Text size="sm" color="secondary">
                Made with ❤️ for educators worldwide
              </Text>
            </div>

            <div className="flex items-center space-x-4">
              <a href="#privacy" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                Privacy
              </a>
              <a href="#terms" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                Terms
              </a>
              <a href="#cookies" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };
