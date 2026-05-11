'use client';

import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const CallToAction = () => {
  const benefits = [
    '14-day free trial with full access',
    'No credit card required to start',
    'Cancel anytime, no questions asked',
    'Dedicated onboarding support',
    'Regular feature updates at no extra cost'
  ];

  const trustIndicators = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Educational Institutions'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Customer Rating'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Guarantee'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support Available'
    }
  ];

  return (
    <section id="cta" className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-accent to-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-main/20 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <Text size="sm" className="text-white font-medium">
              Start Your Journey
            </Text>
          </div>
          <Heading size="h2" className="mb-6 text-white">
            Transform Your <GradientText from="secondary" to="cyan-400">Educational Institution</GradientText> Today
          </Heading>
          <Text size="lg" className="text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of educational institutions that have already revolutionized their management systems and achieved remarkable results with EduAdmin.
          </Text>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card variant="glass" size="xl" className="bg-white/10 backdrop-blur-md border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <Heading size="h3" className="text-white mb-4">
                    Ready to Get Started?
                  </Heading>
                  <Text className="text-white/80 leading-relaxed">
                    Begin your transformation journey with a risk-free trial. Experience the full power of EduAdmin and see the difference it can make for your institution.
                  </Text>
                </div>

                {/* Benefits List */}
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <Text size="sm" className="text-white/80">{benefit}</Text>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 group">
                    Start Your 14-Day Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg" className="w-full border-white/30 text-white hover:bg-white/10">
                    Schedule a Demo
                  </Button>
                </div>
              </div>

              {/* Right Content - Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:-translate-y-8"
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <Zap className="w-12 h-12 text-white" />
                      </div>
                      <div className="space-y-2">
                        <Heading size="h4" className="text-white">Instant Setup</Heading>
                        <Text className="text-white/70">Get started in minutes, not weeks</Text>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -top-6 -right-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-success to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="absolute -bottom-6 -left-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-warning to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className={index % 2 === 1 ? 'lg:translate-y-4' : ''}
              >
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto backdrop-blur-sm">
                    <indicator.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{indicator.value}</div>
                  <Text size="sm" className="text-white/70">{indicator.label}</Text>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center">
            <Heading size="h3" className="text-white mb-4">
              <GradientText from="secondary" to="cyan-400">Don't Wait to Transform</GradientText>
            </Heading>
            <Text className="text-white/80 mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your institution could be operating more efficiently, engaging students more effectively, and achieving better outcomes.
            </Text>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
                Start Free Trial Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Text size="sm" className="text-white/60">
                No credit card required • Cancel anytime
              </Text>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { CallToAction };
