'use client';

import React from 'react';
import { ArrowRight, Play, CheckCircle, BarChart3, Users, Award } from 'lucide-react';
import { Button, Card, Heading, Text, GradientText } from '@/components/common';
import { motion } from 'framer-motion';

const Hero = () => {
  const stats = [
    { label: 'Active Institutes', value: '10,000+', icon: Users },
    { label: 'Students Managed', value: '500K+', icon: BarChart3 },
    { label: 'Success Rate', value: '98%', icon: Award },
  ];

  const features = [
    'Real-time student analytics',
    'Automated attendance tracking',
    'Comprehensive reporting tools',
    'Teacher performance metrics',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background-main via-background-secondary to-background-card">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left Content - Broken Grid Position */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:translate-y-8"
          >
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-sm"
              >
                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                <Text size="sm" className="text-primary">
                  Trusted by 10,000+ educational institutions worldwide
                </Text>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <Heading size="h1" className="leading-tight">
                  Transform Your <GradientText>Education Management</GradientText> with Advanced Analytics
                </Heading>
                <Text size="lg" color="secondary" className="max-w-2xl">
                  Empower your institute with cutting-edge dashboard analytics, seamless teacher management, and comprehensive student performance tracking.
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
              >
                <Button size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="secondary" size="lg" className="group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <Text size="sm" color="secondary">{feature}</Text>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Broken Grid Position */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 lg:-translate-y-12"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <Card variant="glass" size="lg" className="transform rotate-2 hover:rotate-1 transition-transform duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <Heading size="h4">Live Dashboard Preview</Heading>
                    <Text color="muted">Interactive analytics at your fingertips</Text>
                  </div>
                </div>
              </Card>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-8 -right-8 lg:-top-12 lg:-right-12"
              >
                <Card variant="gradient" size="sm" className="transform -rotate-6 hover:-rotate-3 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500K+</div>
                    <Text size="sm" color="muted">Students</Text>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8"
              >
                <Card variant="success" size="sm" className="transform rotate-3 hover:rotate-1 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">98%</div>
                    <Text size="sm" color="muted">Success Rate</Text>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Broken Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 lg:mt-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className={index === 1 ? 'md:translate-y-8' : ''}
              >
                <Card variant="glass" size="md" className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <Text color="secondary">{stat.label}</Text>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
