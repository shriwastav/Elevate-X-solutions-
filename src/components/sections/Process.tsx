"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "Understand business goals, target audience, and project requirements.",
  },
  {
    num: "2",
    title: "Design",
    desc: "Create engaging user experiences, wireframes, and high-fidelity mockups.",
  },
  {
    num: "3",
    title: "Development",
    desc: "Build scalable, secure, and performant solutions using modern tech stacks.",
  },
  {
    num: "4",
    title: "Launch",
    desc: "Deploy, optimize for SEO, and monitor performance for a successful release.",
  },
];

export function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 relative" id="process" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A systematic approach to transforming your ideas into powerful digital reality.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-purple-500 to-blue-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-start md:justify-between group">
                  
                  {/* Left Side (Empty for Odd on Desktop) */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'text-right pr-8' : 'order-last pl-8 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border-2 border-background bg-zinc-900 flex items-center justify-center z-10 text-foreground font-bold group-hover:scale-110 transition-transform duration-300 group-hover:border-purple-500">
                    {step.num}
                  </div>

                  {/* Mobile Layout / Right Side Desktop */}
                  <div className={`w-full pl-20 md:w-5/12 md:pl-0 ${isEven ? 'md:hidden' : 'md:block'}`}>
                     <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="md:text-left"
                    >
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
