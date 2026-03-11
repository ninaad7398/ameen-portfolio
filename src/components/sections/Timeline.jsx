"use client";

import { motion } from "framer-motion";
import timelineData from "@/data/timeline.json";

export default function Timeline() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-white uppercase tracking-wider mb-2">
            Release <span className="text-accent italic">Timeline</span>
          </h2>
          <div className="h-1 w-16 bg-accent opacity-50 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto relative border-l border-accent/20 pl-6 md:pl-0 md:border-none">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-accent/20 -translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`mb-16 md:mb-24 flex flex-col md:flex-row relative ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Desktop Node */}
              <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 rounded-full bg-background border-2 border-accent -translate-x-1/2 translate-y-2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
              
              {/* Mobile Node */}
              <div className="md:hidden absolute -left-8 top-2 w-3 h-3 rounded-full bg-background border border-accent shadow-[0_0_10px_rgba(212,175,55,0.6)]" />

              <div className={`md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <h3 className="text-3xl font-heading text-accent mb-6">{item.year}</h3>
                <div className="space-y-6">
                  {item.events.map((event, eIndex) => (
                    <div key={eIndex} className="bg-[#121212] p-6 rounded-xl border border-white/5 shadow-xl hover:border-accent/30 transition-colors">
                      <h4 className="text-lg text-white font-semibold tracking-wide mb-2">{event.title}</h4>
                      <p className="text-white/60 font-light text-sm leading-relaxed">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
