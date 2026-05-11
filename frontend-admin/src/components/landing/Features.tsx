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

      </div>
    </section>
  );
};

export { Features };
