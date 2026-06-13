"use client";

import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    company: "TechFlow Inc",
    text: "Elevate X transformed our online presence. Our conversion rate increased by 150% in just two months after the new website launch.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Logistics",
    text: "The team's attention to detail and modern design aesthetic is unmatched. They delivered ahead of schedule and exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Emma Watson",
    company: "Creative Studio",
    text: "Working with Elevate X was a breeze. They understood our vision perfectly and brought it to life with stunning animations and flawless performance.",
    rating: 5,
  },
  {
    name: "David Smith",
    company: "E-Commerce Plus",
    text: "Our new online store is incredibly fast and secure. The custom dashboard they built makes managing inventory so much easier.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-black/20">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        {/* We use two sets of cards to create an infinite scroll effect */}
        <div className="flex animate-marquee gap-6 whitespace-nowrap px-3 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] flex-shrink-0 glass-card p-8 rounded-2xl border border-white/5 whitespace-normal"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/50 to-blue-500/50 border border-white/10 flex items-center justify-center text-lg font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Gradients for smooth fading edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
