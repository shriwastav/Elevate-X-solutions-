"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on complexity. A standard landing page might take 1-2 weeks, while a full e-commerce solution or custom web application can take 4-8 weeks or more. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What technologies do you use?",
    answer: "We specialize in modern web technologies including Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for the frontend. For the backend, we often use Node.js, Supabase, or custom serverless solutions to ensure maximum performance and scalability.",
  },
  {
    question: "Do you provide support?",
    answer: "Yes! We offer ongoing support and maintenance packages to ensure your website remains fast, secure, and up-to-date. We also provide training so you can manage your content easily.",
  },
  {
    question: "Can you redesign my current website?",
    answer: "Absolutely. We can perform a full audit of your current site, identify areas for improvement, and completely overhaul the design and architecture to improve conversions and user experience.",
  },
  {
    question: "How much does a website cost?",
    answer: "Costs depend heavily on the scope, features, and custom functionality required. Our packages start at NPR 9,999 for basic landing pages and go upwards for comprehensive custom applications. Contact us for a precise quote.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/5 transition-colors hover:border-white/10"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-lg text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={`text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-purple-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
