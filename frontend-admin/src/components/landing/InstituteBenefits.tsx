'use client';

import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Shield, 
  DollarSign, 
  Award,
  Target,
  Zap
} from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const InstituteBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improve Academic Performance',
      description: 'Data-driven insights help identify learning gaps and implement targeted interventions.',
      metric: '40% Better Results',
      color: 'from-primary to-accent'
    },
    {
      icon: Users,
      title: 'Enhance Teacher Efficiency',
      description: 'Automate administrative tasks and provide tools for effective teaching.',
      metric: '25hrs Saved/Week',
      color: 'from-secondary to-cyan-400'
    },
    {
      icon: Clock,
      title: 'Streamline Operations',
      description: 'Centralized management reduces paperwork and improves workflow efficiency.',
      metric: '60% Less Paperwork',
      color: 'from-accent to-purple-600'
    },
    {
      icon: Shield,
      title: 'Ensure Compliance',
      description: 'Built-in compliance tracking and reporting for educational standards.',
      metric: '100% Compliant',
      color: 'from-success to-green-600'
    },
    {
      icon: DollarSign,
      title: 'Reduce Operational Costs',
      description: 'Optimize resource allocation and eliminate redundant systems.',
      metric: '35% Cost Savings',
      color: 'from-warning to-yellow-600'
    },
    {
      icon: Award,
      title: 'Boost Reputation',
      description: 'Modern technology attracts quality students and teaching staff.',
      metric: '5⭐ Rating',
      color: 'from-danger to-red-600'
    }
  ];

  const testimonials = [
    {
      quote: "EduAdmin transformed how we manage our institution. The analytics alone helped us improve student outcomes by 40%.",
      author: "Dr. Sarah Johnson",
      role: "Principal, Riverside Academy",
      result: "40% Improvement"
    },
    {
      quote: "The time savings are incredible. Our teachers can now focus on what matters most - teaching.",
      author: "Michael Chen",
      role: "Director, Maplewood High School",
      result: "25hrs/Week Saved"
    }
  ];

  const roiMetrics = [
    {
      label: 'Average ROI',
      value: '320%',
      description: 'Within first year of implementation'
    },
    {
      label: 'Time to Value',
      value: '3 Months',
      description: 'Average implementation period'
    },
    {
      label: 'Student Satisfaction',
      value: '94%',
      description: 'Based on 10,000+ student surveys'
    }
  ];

  return (
    <section id="benefits" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-secondary to-background-main">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-success/10 to-green-600/10 border border-success/30 mb-6">
            <Text size="sm" className="text-success font-medium">
              Proven Results
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Transform Your <GradientText>Institution's Success</GradientText>
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Join thousands of educational institutions that have revolutionized their management systems and achieved remarkable results.
          </Text>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index % 3 === 1 ? 'lg:translate-y-6' : ''}
            >
              <Card 
                variant="elevated" 
                size="lg" 
                interactive 
                className="h-full group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon and Metric */}
                  <div className="flex items-start justify-between">
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {benefit.metric}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <Heading size="h5">{benefit.title}</Heading>
                    <Text color="secondary" className="leading-relaxed">
                      {benefit.description}
                    </Text>
                  </div>

                  {/* Progress Indicator */}
                  <div className="pt-4 border-t border-background-secondary/50">
                    <div className="flex items-center justify-between text-sm">
                      <Text color="muted">Impact Level</Text>
                      <Text className="text-primary font-medium">High</Text>
                    </div>
                    <div className="mt-2 h-2 bg-background-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${benefit.color} rounded-full`}
                        style={{ width: '85%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* ROI Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Measurable <GradientText>Return on Investment</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              See how our platform delivers tangible value to educational institutions of all sizes.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roiMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 1 ? 'lg:-translate-y-4' : ''}
              >
                <Card variant="gradient" size="md" className="text-center">
                  <div className="space-y-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {metric.value}
                    </div>
                    <Heading size="h5">{metric.label}</Heading>
                    <Text size="sm" color="secondary">{metric.description}</Text>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={index === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}
              >
                <Card variant="glass" size="lg" className="h-full">
                  <div className="space-y-6">
                    <div className="text-2xl text-primary">"</div>
                    <Text color="secondary" className="italic leading-relaxed">
                      {testimonial.quote}
                    </Text>
                    <div className="flex items-center justify-between pt-4 border-t border-background-secondary/50">
                      <div>
                        <div className="font-semibold text-text-primary">{testimonial.author}</div>
                        <Text size="sm" color="muted">{testimonial.role}</Text>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-success">{testimonial.result}</div>
                      </div>
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
          className="mt-16"
        >
          <Card variant="glass" size="xl" className="text-center bg-gradient-to-br from-success/5 to-primary/5 border-success/20">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Target className="w-16 h-16 text-success" />
              </div>
              <Heading size="h3">
                Ready to Achieve <GradientText>Remarkable Results?</GradientText>
              </Heading>
              <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
                Start your transformation journey today and see why institutions worldwide trust EduAdmin for their management needs.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Calculate Your ROI
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

export { InstituteBenefits };
