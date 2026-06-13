"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "NPR 9,999+",
    description: "Perfect for single landing pages to validate ideas.",
    features: [
      "Custom Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "1 Week Delivery",
    ],
  },
  {
    name: "Growth",
    price: "NPR 24,999+",
    description: "Comprehensive business websites that build authority.",
    popular: true,
    features: [
      "Up to 5 Pages",
      "Premium Design",
      "Advanced SEO",
      "CMS Integration",
      "Analytics Setup",
      "2 Weeks Delivery",
    ],
  },
  {
    name: "Premium",
    price: "NPR 49,999+",
    description: "Full e-commerce solutions or custom applications.",
    features: [
      "Unlimited Pages",
      "E-commerce/SaaS Setup",
      "Payment Gateway",
      "Custom Functionality",
      "Priority Support",
      "4+ Weeks Delivery",
    ],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" id="pricing" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            High-quality development that provides massive ROI for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative glass-card rounded-3xl p-8 flex flex-col border ${
                plan.popular ? "border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]" : "border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground min-h-[48px]">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold text-foreground mb-2">{plan.price}</div>
                <div className="text-sm text-muted-foreground">One-time payment</div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="https://wa.me/9779749945433" target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
