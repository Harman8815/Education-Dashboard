'use client';

import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Award, 
  AlertCircle, 
  Brain,
  Eye,
  Clock,
  Users,
  Activity,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const StudentAnalytics = () => {
  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time monitoring of academic progress with detailed visualizations.',
      color: 'from-primary to-accent',
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered insights to identify at-risk students and predict outcomes.',
      color: 'from-secondary to-cyan-400',
      delay: 0.2
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Personalized learning objectives with progress tracking and milestones.',
      color: 'from-accent to-purple-600',
      delay: 0.3
    },
    {
      icon: Award,
      title: 'Achievement Badges',
      description: 'Gamification elements to motivate students and celebrate success.',
      color: 'from-success to-green-600',
      delay: 0.4
    },
    {
      icon: AlertCircle,
      title: 'Early Intervention',
      description: 'Automated alerts for performance drops and attendance issues.',
      color: 'from-warning to-yellow-600',
      delay: 0.5
    },
    {
      icon: Brain,
      title: 'Learning Analytics',
      description: 'Deep insights into learning patterns and engagement metrics.',
      color: 'from-danger to-red-600',
      delay: 0.6
    }
  ];

  const metrics = [
    {
      value: '92%',
      label: 'Student Engagement',
      description: 'Average engagement rate across all courses',
      icon: Eye,
      trend: '+12%'
    },
    {
      value: '85%',
      label: 'Grade Improvement',
      description: 'Students showing academic improvement',
      icon: TrendingUp,
      trend: '+18%'
    },
    {
      value: '78%',
      label: 'Retention Rate',
      description: 'Student retention year over year',
      icon: Users,
      trend: '+8%'
    }
  ];

  const insights = [
    {
      title: 'Learning Patterns',
      description: 'Identify optimal study times and learning preferences for each student.',
      icon: Clock
    },
    {
      title: 'Subject Strengths',
      description: 'Detailed analysis of performance across different subjects and topics.',
      icon: BookOpen
    },
    {
      title: 'Engagement Metrics',
      description: 'Track participation, assignment completion, and interaction levels.',
      icon: Activity
    }
  ];

  return (
    <section id="analytics" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-secondary to-background-main">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-purple-600/10 border border-accent/30 mb-6">
            <Text size="sm" className="text-accent font-medium">
              Advanced Analytics
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Transform <GradientText>Student Success</GradientText> with Data-Driven Insights
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Comprehensive student analytics platform that provides actionable insights, tracks progress, and helps improve educational outcomes through intelligent data analysis.
          </Text>
        </motion.div>

        {/* Analytics Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {analyticsFeatures.map((feature, index) => (
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
                      Learn more
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Proven <GradientText>Student Success Metrics</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Real-world impact of our analytics platform on student performance and engagement.
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
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <metric.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                        {metric.trend}
                      </div>
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

        {/* Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Heading size="h3" className="mb-6">
                  Deep <GradientText>Learning Insights</GradientText>
                </Heading>
                <Text color="secondary" className="leading-relaxed mb-8">
                  Our advanced analytics engine processes millions of data points to provide meaningful insights that help educators make informed decisions and students achieve their full potential.
                </Text>
              </div>

              <div className="space-y-6">
                {insights.map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={index % 2 === 1 ? 'translate-x-8' : ''}
                  >
                    <Card variant="elevated" size="sm" className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <insight.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <Heading size="h6">{insight.title}</Heading>
                        <Text size="sm" color="secondary">{insight.description}</Text>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:-translate-y-8"
            >
              <Card variant="glass" size="lg" className="bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <BarChart3 className="w-16 h-16 text-primary mx-auto" />
                    <Heading size="h4">Analytics Dashboard</Heading>
                    <Text color="muted">Real-time insights at your fingertips</Text>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="glass" size="xl" className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="space-y-8">
              <div className="text-center">
                <Heading size="h3" className="mb-4">
                  Empower <GradientText>Every Student</GradientText> to Succeed
                </Heading>
                <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
                  Our analytics platform provides the insights and tools needed to create personalized learning experiences that drive student achievement.
                </Text>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  'Personalized learning paths',
                  'Early intervention alerts',
                  'Progress tracking',
                  'Performance predictions'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <Text size="sm" color="secondary">{benefit}</Text>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Analytics Trial
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export { StudentAnalytics };
