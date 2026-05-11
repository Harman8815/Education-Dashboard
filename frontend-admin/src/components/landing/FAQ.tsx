'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      icon: HelpCircle,
      color: 'from-primary to-accent',
      questions: [
        {
          id: 'q1',
          question: 'What is EduAdmin?',
          answer: 'EduAdmin is a comprehensive education management platform designed to streamline administrative tasks, enhance teaching effectiveness, and improve student outcomes through advanced analytics and intuitive tools.'
        },
        {
          id: 'q2',
          question: 'Who is EduAdmin for?',
          answer: 'EduAdmin is designed for K-12 schools, colleges, universities, tutoring centers, and any educational institution looking to modernize their management systems.'
        },
        {
          id: 'q3',
          question: 'How long does implementation take?',
          answer: 'Implementation typically takes 2-4 weeks depending on institution size and customization requirements. We provide dedicated support throughout the process.'
        },
        {
          id: 'q4',
          question: 'Is there a free trial available?',
          answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.'
        }
      ]
    },
    {
      id: 'features',
      name: 'Features & Functionality',
      icon: MessageCircle,
      color: 'from-secondary to-cyan-400',
      questions: [
        {
          id: 'q5',
          question: 'What features are included?',
          answer: 'EduAdmin includes student management, teacher tools, analytics dashboards, scheduling, reporting, parent portals, communication tools, and much more.'
        },
        {
          id: 'q6',
          question: 'Can I customize the platform?',
          answer: 'Yes! Enterprise plans include full customization options, white-labeling, and custom integrations to meet your specific needs.'
        },
        {
          id: 'q7',
          question: 'Does it work with mobile devices?',
          answer: 'Absolutely! EduAdmin is fully responsive with dedicated mobile apps for iOS and Android, ensuring access from anywhere.'
        },
        {
          id: 'q8',
          question: 'What about data security?',
          answer: 'We use enterprise-grade encryption, regular security audits, and comply with GDPR, FERPA, and other educational data protection standards.'
        }
      ]
    },
    {
      id: 'pricing',
      name: 'Pricing & Billing',
      icon: Mail,
      color: 'from-success to-green-600',
      questions: [
        {
          id: 'q9',
          question: 'How does pricing work?',
          answer: 'We offer flexible pricing based on institution size and needs. Choose from monthly or annual billing with discounts for annual commitments.'
        },
        {
          id: 'q10',
          question: 'Can I change plans anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
        },
        {
          id: 'q11',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, bank transfers for annual plans, and purchase orders for educational institutions.'
        },
        {
          id: 'q12',
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees! All pricing is transparent. Optional add-ons and professional services are clearly priced.'
        }
      ]
    },
    {
      id: 'support',
      name: 'Support & Training',
      icon: Phone,
      color: 'from-warning to-yellow-600',
      questions: [
        {
          id: 'q13',
          question: 'What kind of support do you provide?',
          answer: 'We offer email support for all plans, priority chat support for Professional plans, and 24/7 dedicated support for Enterprise customers.'
        },
        {
          id: 'q14',
          question: 'Do you provide training?',
          answer: 'Yes! We offer comprehensive onboarding training, ongoing webinars, video tutorials, and optional on-site training sessions.'
        },
        {
          id: 'q15',
          question: 'Is there documentation available?',
          answer: 'Extensive documentation, API references, video tutorials, and a knowledge base are available 24/7 in our help center.'
        },
        {
          id: 'q16',
          question: 'What about data migration?',
          answer: 'We provide professional data migration services to help you transition from existing systems smoothly and securely.'
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant answers from our support team',
      action: 'Start Chat',
      available: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions',
      action: 'Send Email',
      available: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our experts directly',
      action: 'Call Now',
      available: 'Enterprise customers only'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
    setOpenQuestion(null);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-secondary to-background-main">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
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
              Got Questions?
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Frequently Asked <GradientText>Questions</GradientText>
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Find answers to common questions about EduAdmin. Can't find what you're looking for? Our support team is here to help.
          </Text>
        </motion.div>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {faqCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index % 2 === 1 ? 'lg:translate-y-6' : ''}
            >
              <Card variant="glass" size="lg" className="overflow-hidden">
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-background-card/50 transition-colors duration-200 border-b border-background-secondary/50"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <Heading size="h5">{category.name}</Heading>
                  </div>
                  {openCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-text-secondary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-secondary" />
                  )}
                </button>

                {/* Questions */}
                <div className={`transition-all duration-300 ${openCategory === category.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="p-6 space-y-4">
                    {category.questions.map((item) => (
                      <div key={item.id} className="border-b border-background-secondary/30 last:border-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleQuestion(item.id)}
                          className="w-full text-left flex items-center justify-between py-2 hover:text-primary transition-colors duration-200"
                        >
                          <Text weight="medium" className="flex-1 pr-4">
                            {item.question}
                          </Text>
                          {openQuestion === item.id ? (
                            <ChevronUp className="w-4 h-4 text-text-muted flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-text-muted flex-shrink-0" />
                          )}
                        </button>
                        <div className={`transition-all duration-300 ${openQuestion === item.id ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'} overflow-hidden`}>
                          <Text size="sm" color="secondary" className="leading-relaxed">
                            {item.answer}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Still Have <GradientText>Questions?</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Our support team is ready to help you with any questions about EduAdmin.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 1 ? 'md:translate-y-4' : ''}
              >
                <Card variant="elevated" size="md" interactive className="text-center h-full hover:scale-[1.02] transition-transform duration-300">
                  <div className="space-y-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto">
                      <option.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="space-y-3">
                      <Heading size="h6">{option.title}</Heading>
                      <Text size="sm" color="secondary">{option.description}</Text>
                      <Text size="xs" color="muted">{option.available}</Text>
                    </div>
                    <Button variant="outline" size="sm" fullWidth>
                      {option.action}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card variant="glass" size="xl" className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Heading size="h3">
                  <GradientText>Helpful Resources</GradientText>
                </Heading>
                <Text color="secondary" className="leading-relaxed">
                  Explore our comprehensive resources to get the most out of EduAdmin. From detailed documentation to video tutorials, we've got you covered.
                </Text>
                
                <div className="space-y-4">
                  {[
                    'Comprehensive documentation',
                    'Video tutorials & webinars',
                    'API reference guides',
                    'Best practices & case studies'
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <Text size="sm" color="secondary">{resource}</Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <HelpCircle className="w-16 h-16 text-primary mx-auto" />
                    <Heading size="h4">Help Center</Heading>
                    <Text color="muted">24/7 access to resources</Text>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 group">
                    Visit Help Center
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Contact Support
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

export { FAQ };
