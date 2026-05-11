'use client';

import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Crown } from 'lucide-react';
import { Card, Heading, Text, GradientText, Button } from '@/components/common';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small schools getting started',
      price: billingCycle === 'monthly' ? 99 : 79,
      yearlyPrice: 948,
      originalPrice: 1188,
      icon: Star,
      color: 'from-secondary to-cyan-400',
      features: [
        'Up to 100 students',
        'Basic analytics dashboard',
        'Teacher management (up to 10)',
        'Email support',
        'Mobile app access',
        'Basic reporting',
        'Cloud storage (5GB)'
      ],
      excluded: [
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing educational institutions',
      price: billingCycle === 'monthly' ? 299 : 239,
      yearlyPrice: 2868,
      originalPrice: 3588,
      icon: Zap,
      color: 'from-primary to-accent',
      features: [
        'Up to 1,000 students',
        'Advanced analytics dashboard',
        'Teacher management (up to 50)',
        'Priority email & chat support',
        'Mobile & tablet apps',
        'Advanced reporting & insights',
        'Cloud storage (50GB)',
        'Parent portal access',
        'Automated scheduling',
        'Performance tracking'
      ],
      excluded: [
        'White-label options',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large institutions',
      price: billingCycle === 'monthly' ? 799 : 639,
      yearlyPrice: 7668,
      originalPrice: 9588,
      icon: Crown,
      color: 'from-warning to-yellow-600',
      features: [
        'Unlimited students',
        'Enterprise analytics suite',
        'Unlimited teacher accounts',
        '24/7 dedicated support',
        'All platform access',
        'Custom reporting & BI',
        'Unlimited cloud storage',
        'White-label options',
        'API access & integrations',
        'Custom training sessions',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      excluded: [],
      popular: false
    }
  ];

  const additionalFeatures = [
    {
      title: 'Custom Add-ons',
      items: [
        { name: 'Advanced Analytics Suite', price: '$49/month' },
        { name: 'Parent Communication Module', price: '$29/month' },
        { name: 'Online Learning Platform', price: '$99/month' },
        { name: 'Custom Integrations', price: 'Contact us' }
      ]
    },
    {
      title: 'Professional Services',
      items: [
        { name: 'Implementation & Setup', price: '$2,500 one-time' },
        { name: 'Staff Training', price: '$1,500 one-time' },
        { name: 'Data Migration', price: 'Starting at $1,000' },
        { name: 'Custom Development', price: 'Contact us' }
      ]
    }
  ];

  const faq = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial for all plans. No credit card required to start.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Do you offer discounts for multiple schools?',
      answer: 'Yes, we offer special pricing for school districts and educational networks. Contact our sales team.'
    }
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-32 bg-gradient-to-b from-background-secondary to-background-main">
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-success/10 to-green-600/10 border border-success/30 mb-6">
            <Text size="sm" className="text-success font-medium">
              Simple Pricing
            </Text>
          </div>
          <Heading size="h2" className="mb-6">
            Choose Your <GradientText>Perfect Plan</GradientText>
          </Heading>
          <Text size="lg" color="secondary" className="max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Start with a free trial and scale as you grow.
          </Text>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-background-card rounded-xl p-1 border border-background-secondary/50">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 1 ? 'lg:-translate-y-4' : ''}
            >
              <Card 
                variant={plan.popular ? "gradient" : "glass"} 
                size="lg" 
                interactive 
                className={`h-full relative ${
                  plan.popular 
                    ? 'border-2 border-primary shadow-2xl scale-105' 
                    : 'hover:scale-[1.02]'
                } transition-all duration-300`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <Heading size="h4">{plan.name}</Heading>
                      <Text color="secondary" className="text-sm">{plan.description}</Text>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-text-primary">${plan.price}</span>
                      <span className="text-text-secondary ml-2">/month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="space-y-1">
                        <Text size="sm" color="primary" className="text-success font-medium">
                          ${plan.yearlyPrice} billed annually
                        </Text>
                        <Text size="xs" color="muted" className="line-through">
                          ${plan.originalPrice} regular price
                        </Text>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-success flex-shrink-0" />
                        <Text size="sm" color="secondary">{feature}</Text>
                      </div>
                    ))}
                    {plan.excluded.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 opacity-50">
                        <X className="w-4 h-4 text-muted flex-shrink-0" />
                        <Text size="sm" color="muted">{feature}</Text>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "primary" : "outline"} 
                    size="lg" 
                    fullWidth
                    className="group"
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Heading size="h3" className="mb-4">
              Frequently Asked <GradientText>Questions</GradientText>
            </Heading>
            <Text color="secondary" className="max-w-2xl mx-auto">
              Got questions? We've got answers. Contact our support team for more information.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index % 2 === 1 ? 'md:translate-y-4' : ''}
              >
                <Card variant="glass" size="md">
                  <div className="space-y-3">
                    <Heading size="h6">{item.question}</Heading>
                    <Text size="sm" color="secondary">{item.answer}</Text>
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

export { Pricing };
