'use client';

import React from 'react';
import { Award, TrendingUp, Users, BookOpen, Target, Star, MapPin } from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const StudentSuccess = () => {
  const successStories = [
    {
      name: "Emily Rodriguez",
      achievement: "National Science Fair Winner",
      before: "Struggling with grades",
      after: "Top 1% in class",
      improvement: "+45% GPA increase",
      testimonial: "The analytics helped me identify my weak areas and focus on improvement. My teachers could track my progress in real-time.",
      avatar: "ER",
      location: "California, USA",
      field: "STEM",
      year: "2024"
    },
    {
      name: "James Chen",
      achievement: "Full Scholarship to MIT",
      before: "Average student",
      after: "Valedictorian",
      improvement: "+3.8 GPA improvement",
      testimonial: "EduAdmin's personalized learning paths and progress tracking transformed my academic journey completely.",
      avatar: "JC",
      location: "Toronto, Canada",
      field: "Engineering",
      year: "2024"
    },
    {
      name: "Sophia Williams",
      achievement: "Olympic Swimming Qualifier",
      before: "Time management issues",
      after: "Academic & Athletic Excellence",
      improvement: "Balanced schedule",
      testimonial: "The scheduling system helped me balance training and studies effectively. Teachers could see when I needed extra support.",
      avatar: "SW",
      location: "London, UK",
      field: "Athletics",
      year: "2023"
    },
    {
      name: "Marcus Johnson",
      achievement: "Young Entrepreneur Award",
      before: "Lack of direction",
      after: "Business leader",
      improvement: "Developed leadership skills",
      testimonial: "The platform's project management tools and teacher mentorship helped me discover my passion for business.",
      avatar: "MJ",
      location: "New York, USA",
      field: "Business",
      year: "2023"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      value: "2,500+",
      description: "Students achieved honor roll status",
      color: "from-primary to-accent"
    },
    {
      icon: TrendingUp,
      title: "Performance Improvement",
      value: "78%",
      description: "Average grade improvement",
      color: "from-success to-green-600"
    },
    {
      icon: Users,
      title: "College Acceptance",
      value: "95%",
      description: "Students accepted to top universities",
      color: "from-secondary to-cyan-400"
    },
    {
      icon: BookOpen,
      title: "Scholarship Winners",
      value: "$12M+",
      description: "Total scholarship amount earned",
      color: "from-warning to-yellow-600"
    }
  ];

  const pathways = [
    {
      title: "STEM Excellence",
      students: "450+",
      success: "92% success rate",
      highlights: ["Science fair winners", "Math olympians", "Coding champions"],
      color: "from-primary to-accent"
    },
    {
      title: "Arts & Humanities",
      students: "320+",
      success: "88% success rate",
      highlights: ["Published authors", "Art competition winners", "Debate champions"],
      color: "from-secondary to-cyan-400"
    },
    {
      title: "Athletic Achievement",
      students: "280+",
      success: "90% success rate",
      highlights: ["Olympic qualifiers", "College athletes", "National champions"],
      color: "from-success to-green-600"
    },
    {
      title: "Business Leadership",
      students: "200+",
      success: "85% success rate",
      highlights: ["Young entrepreneurs", "Startup founders", "Business competition winners"],
      color: "from-warning to-yellow-600"
    }
  ];

  return (
    <section id="student-success" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-main to-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
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
              Student Success Stories
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Transforming <GradientText>Student Potential</GradientText> into Reality
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Discover how students from diverse backgrounds have achieved remarkable success through our comprehensive educational management platform.
          </Text>
        </motion.div>

        {/* Achievement Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 1 ? 'md:translate-y-4' : ''}
              >
                <Card variant="gradient" size="md" className="text-center">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mx-auto`}>
                      <achievement.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {achievement.value}
                    </div>
                    <Heading size="h6">{achievement.title}</Heading>
                    <Text size="sm" color="secondary">{achievement.description}</Text>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              <GradientText>Remarkable Transformations</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Real stories of students who overcame challenges and achieved extraordinary success with our platform.
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'}
              >
                <Card variant="glass" size="lg" interactive className="h-full group hover:scale-[1.02] transition-all duration-300">
                  <div className="space-y-6">
                    {/* Student Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {story.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-text-primary">{story.name}</div>
                          <div className="text-sm text-text-muted flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {story.location}
                          </div>
                          <div className="text-xs text-text-muted">{story.field} • Class of {story.year}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {story.improvement}
                        </div>
                      </div>
                    </div>

                    {/* Achievement */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-warning" />
                        <Heading size="h5">{story.achievement}</Heading>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <Text color="muted">Before: {story.before}</Text>
                        <span className="text-primary">→</span>
                        <Text color="primary">After: {story.after}</Text>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-background-card/50 rounded-xl p-4 border-l-4 border-primary">
                      <Text size="sm" color="secondary" className="italic">
                        "{story.testimonial}"
                      </Text>
                    </div>

                    {/* Action */}
                    <div className="pt-4 border-t border-background-secondary/50">
                      <Button variant="outline" size="sm" fullWidth>
                        Read Full Story
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Pathways */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              <GradientText>Success Pathways</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Students excel across diverse fields with personalized guidance and comprehensive support.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((pathway, index) => (
              <motion.div
                key={pathway.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 1 ? 'md:translate-y-4' : ''}
              >
                <Card variant="elevated" size="md" className="text-center h-full">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pathway.color} rounded-xl flex items-center justify-center mx-auto`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Heading size="h6">{pathway.title}</Heading>
                      <div className="text-lg font-bold text-primary">{pathway.students}</div>
                      <Text size="sm" color="secondary">{pathway.success}</Text>
                    </div>
                    <div className="space-y-2">
                      {pathway.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-warning" />
                          <Text size="xs" color="secondary">{highlight}</Text>
                        </div>
                      ))}
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
          transition={{ duration: 0.8 }}
        >
          <Card variant="glass" size="xl" className="text-center bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Award className="w-16 h-16 text-accent" />
              </div>
              <Heading size="h3">
                Create Your <GradientText>Success Story</GradientText>
              </Heading>
              <Text size="lg" color="secondary" className="max-w-2xl mx-auto">
                Join thousands of students who have transformed their educational journey with our innovative platform.
              </Text>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Your Journey
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
                <Button variant="outline" size="lg">
                  View More Stories
                </Button>
              </div>
              <Text size="sm" color="muted">
                Every student deserves the opportunity to succeed. Start yours today.
              </Text>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export { StudentSuccess };
