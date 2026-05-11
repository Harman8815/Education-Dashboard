'use client';

import React from 'react';
import { 
  Users, 
  Calendar, 
  FileText, 
  Award, 
  Clock, 
  TrendingUp,
  BookOpen,
  Target,
  Star,
  CheckCircle
} from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const TeacherManagement = () => {
  const features = [
    {
      icon: Users,
      title: 'Teacher Profiles',
      description: 'Comprehensive profiles with qualifications, experience, and performance metrics.',
      color: 'from-primary to-accent',
      delay: 0.1
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Intelligent timetable management with conflict detection and optimization.',
      color: 'from-secondary to-cyan-400',
      delay: 0.2
    },
    {
      icon: FileText,
      title: 'Lesson Planning',
      description: 'Digital lesson plan templates with collaborative editing and sharing.',
      color: 'from-accent to-purple-600',
      delay: 0.3
    },
    {
      icon: Award,
      title: 'Performance Tracking',
      description: 'Continuous evaluation with detailed analytics and improvement suggestions.',
      color: 'from-success to-green-600',
      delay: 0.4
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Automated attendance tracking and workload distribution monitoring.',
      color: 'from-warning to-yellow-600',
      delay: 0.5
    },
    {
      icon: TrendingUp,
      title: 'Professional Development',
      description: 'Personalized training recommendations and skill development tracking.',
      color: 'from-danger to-red-600',
      delay: 0.6
    }
  ];

  const metrics = [
    {
      value: '95%',
      label: 'Teacher Satisfaction',
      description: 'Based on internal surveys',
      icon: Star
    },
    {
      value: '40%',
      label: 'Time Saved on Admin',
      description: 'Weekly time savings',
      icon: Clock
    },
    {
      value: '85%',
      label: 'Improved Efficiency',
      description: 'In administrative tasks',
      icon: TrendingUp
    }
  ];

  const workflow = [
    {
      step: '1',
      title: 'Onboard Teachers',
      description: 'Quickly add teachers with automated profile creation and credential verification.',
      icon: Users
    },
    {
      step: '2',
      title: 'Assign Classes',
      description: 'Intelligent class allocation based on expertise, availability, and workload.',
      icon: Target
    },
    {
      step: '3',
      title: 'Monitor Performance',
      description: 'Real-time tracking of teaching effectiveness and student outcomes.',
      icon: TrendingUp
    },
    {
      step: '4',
      title: 'Provide Support',
      description: 'Targeted professional development and resource recommendations.',
      icon: BookOpen
    }
  ];

  return (
    <section id="teacher-management" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-main to-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-secondary/10 to-cyan-400/10 border border-secondary/30 mb-6">
            <Text size="sm" className="text-secondary font-medium">
              Teacher Excellence
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Empower Your <GradientText>Teaching Staff</GradientText>
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Comprehensive teacher management tools that streamline administrative tasks, enhance professional development, and improve teaching effectiveness.
          </Text>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className={index % 3 === 1 ? 'lg:translate-y-6' : ''}
            >
              <Card 
                variant="glass" 
                size="lg" 
                interactive 
                className="h-full group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <Heading size="h5">{feature.title}</Heading>
                    <Text color="secondary" className="leading-relaxed">
                      {feature.description}
                    </Text>
                  </div>

                  {/* Feature Link */}
                  <div className="pt-4 border-t border-background-secondary/50">
                    <Button variant="ghost" size="sm" className="group/btn">
                      Explore feature
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Proven <GradientText>Teacher Success Metrics</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Real-world results from institutions using our teacher management system.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 1 ? 'md:translate-y-4' : ''}
              >
                <Card variant="gradient" size="md" className="text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <Heading size="h6">{metric.label}</Heading>
                    <Text size="sm" color="secondary">{metric.description}</Text>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Seamless <GradientText>Teacher Workflow</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              From onboarding to ongoing support, our platform streamlines every aspect of teacher management.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 1 ? 'lg:translate-y-8' : ''}
              >
                <Card variant="elevated" size="md" className="text-center h-full relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-cyan-400 rounded-xl flex items-center justify-center mx-auto">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <Heading size="h6">{step.title}</Heading>
                    <Text size="sm" color="secondary">{step.description}</Text>
                  </div>

                  {/* Connection Line */}
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="glass" size="xl" className="bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Heading size="h3">
                  Transform Your <GradientText>Teacher Management</GradientText>
                </Heading>
                <Text color="secondary" className="leading-relaxed">
                  Our comprehensive teacher management system empowers educational institutions to optimize their teaching staff's performance, reduce administrative burden, and create a more effective learning environment.
                </Text>
                
                <div className="space-y-3">
                  {[
                    'Reduce administrative workload by 40%',
                    'Improve teacher satisfaction and retention',
                    'Enhance teaching quality through data insights',
                    'Streamline professional development'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <Text size="sm" color="secondary">{benefit}</Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Users className="w-16 h-16 text-primary mx-auto" />
                    <Heading size="h4">Teacher Dashboard</Heading>
                    <Text color="muted">Comprehensive management at your fingertips</Text>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 group">
                    Start Free Trial
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    View Demo
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export { TeacherManagement };
