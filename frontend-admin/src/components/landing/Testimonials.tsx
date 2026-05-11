'use client';

import React from 'react';
import { Star, Quote, Users, School, Award } from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "EduAdmin has completely transformed how we manage our institution. The analytics alone helped us improve student outcomes by 40% within the first semester.",
      author: "Dr. Sarah Johnson",
      role: "Principal",
      institution: "Riverside Academy",
      avatar: "SJ",
      rating: 5,
      result: "40% Improvement",
      location: "California, USA"
    },
    {
      quote: "The predictive analytics feature is a game-changer. We can now identify at-risk students weeks in advance and provide targeted interventions.",
      author: "Dr. Lisa Park",
      role: "School Psychologist",
      institution: "Green Valley Elementary",
      avatar: "LP",
      rating: 5,
      result: "85% Accuracy",
      location: "Seoul, South Korea"
    },
    {
      quote: "From scheduling to reporting, everything is streamlined. Our parent satisfaction scores have increased by 35% since implementing EduAdmin.",
      author: "Robert Taylor",
      role: "Superintendent",
      institution: "Mountain View School District",
      avatar: "RT",
      rating: 5,
      result: "35% Higher Satisfaction",
      location: "Colorado, USA"
    }
  ];

  const institutions = [
    {
      name: "Riverside Academy",
      type: "Private K-12 School",
      students: "1,200",
      implementation: "2 years ago",
      result: "45% Better Academic Performance"
    },
    {
      name: "Maplewood High School",
      type: "Public High School",
      students: "2,500",
      implementation: "18 months ago",
      result: "30% Reduction in Admin Time"
    },
    {
      name: "Oakwood International",
      type: "International School",
      students: "3,000",
      implementation: "1 year ago",
      result: "50% Increase in Student Engagement"
    }
  ];

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Educational Institutions",
      description: "Trust our platform worldwide"
    },
    {
      icon: School,
      value: "500K+",
      label: "Students Managed",
      description: "Across all institutions"
    },
    {
      icon: Award,
      value: "98%",
      label: "Customer Satisfaction",
      description: "Based on annual surveys"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-warning text-warning' : 'text-background-secondary'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-main to-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-warning/10 to-yellow-600/10 border border-warning/30 mb-6">
            <Text size="sm" className="text-warning font-medium">
              Success Stories
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Trusted by <GradientText>Leading Institutions</GradientText> Worldwide
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Hear from educational leaders who have transformed their institutions with our comprehensive management platform.
          </Text>
        </motion.div>


        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 3 === 1 ? 'lg:translate-y-6' : ''}
              >
                <Card 
                  variant="glass" 
                  size="lg" 
                  interactive 
                  className="h-full group hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary opacity-20" />

                    {/* Quote */}
                    <Text color="secondary" className="italic leading-relaxed flex-grow">
                      "{testimonial.quote}"
                    </Text>

                    {/* Author Info */}
                    <div className="flex items-start justify-between pt-4 border-t border-background-secondary/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary">{testimonial.author}</div>
                          <Text size="sm" color="muted">{testimonial.role}</Text>
                          <Text size="sm" color="muted">{testimonial.institution}</Text>
                        </div>
                      </div>
                    </div>

                    {/* Rating and Result */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                        {testimonial.result}
                      </div>
                    </div>

                    {/* Location */}
                    <Text size="xs" color="muted" className="text-center">
                      📍 {testimonial.location}
                    </Text>
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
          transition={{ duration: 0.8 }}
        >
          <Card variant="glass" size="xl" className="text-center bg-gradient-to-br from-warning/5 to-primary/5 border-warning/20">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Award className="w-16 h-16 text-warning" />
              </div>
              <Heading size="h3">
                Join the <GradientText>Success Stories</GradientText>
              </Heading>
              <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
                Become part of our growing community of educational institutions that are transforming education through innovative technology.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Your Success Story
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline" size="lg">
                  More Testimonials
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export { Testimonials };
