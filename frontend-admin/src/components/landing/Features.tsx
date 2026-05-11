'use client';

import React from 'react';
import { 
  BarChart3, 
  Users, 
  Calendar, 
  FileText, 
  Shield, 
  Zap,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const Features = () => {
  const coreFeatures = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor student performance, attendance patterns, and engagement metrics with live dashboards.',
      gradient: 'from-primary to-accent',
      delay: 0.1
    },
    {
      icon: Users,
      title: 'Teacher Management',
      description: 'Streamline teacher assignments, performance tracking, and professional development.',
      gradient: 'from-secondary to-cyan-400',
      delay: 0.2
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automated timetable generation with conflict detection and optimization algorithms.',
      gradient: 'from-accent to-purple-600',
      delay: 0.3
    },
    {
      icon: FileText,
      title: 'Digital Report Cards',
      description: 'Generate comprehensive progress reports with customizable templates and automated insights.',
      gradient: 'from-success to-green-600',
      delay: 0.4
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security with role-based access control and data encryption.',
      gradient: 'from-warning to-yellow-600',
      delay: 0.5
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second load times and seamless user experience.',
      gradient: 'from-danger to-red-600',
      delay: 0.6
    }
  ];

  const advancedFeatures = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to identify at-risk students and predict performance trends.',
      stats: '85% Accuracy'
    },
    {
      icon: Award,
      title: 'Gamification',
      description: 'Engage students with point systems, badges, and interactive learning challenges.',
      stats: '40% Higher Engagement'
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Automated attendance and study time monitoring with detailed analytics.',
      stats: 'Saves 15hrs/week'
    }
  ];

  return (
    <section id="features" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-main to-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 mb-6">
            <Text size="sm" className="text-primary font-medium">
              Powerful Features
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Everything You Need to <GradientText>Manage Excellence</GradientText>
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Comprehensive tools designed to streamline educational administration, enhance learning outcomes, and drive institutional success.
          </Text>
        </motion.div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className={index % 3 === 1 ? 'lg:translate-y-8' : ''}
            >
              <Card 
                variant="glass" 
                size="lg" 
                interactive 
                className="h-full group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <Heading size="h4">{feature.title}</Heading>
                    <Text color="secondary" className="leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>

                  {/* Hover Effect */}
                  <div className="pt-4 border-t border-background-secondary/50">
                    <Button variant="ghost" size="sm" className="group/btn">
                      Learn more
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advanced Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Advanced <GradientText>Capabilities</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Cutting-edge features that set your institution apart with innovative technology and data-driven insights.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 1 ? 'lg:-translate-y-4' : ''}
              >
                <Card variant="gradient" size="md" className="text-center h-full">
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Heading size="h5">{feature.title}</Heading>
                      <Text size="sm" color="secondary">{feature.description}</Text>
                      <div className="text-lg font-bold text-primary">{feature.stats}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card variant="glass" size="xl" className="text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="space-y-6">
              <Heading size="h3">
                Ready to Transform Your <GradientText>Educational Institution?</GradientText>
              </Heading>
              <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
                Join thousands of institutions already using our platform to deliver exceptional educational experiences.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Free Trial
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export { Features };
