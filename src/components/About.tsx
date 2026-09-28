import React from "react";
import { personalInfo } from "../data";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-1">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
            // 01 — About
          </p>
          <h2 className="font-display text-3xl font-bold text-ink-900 leading-snug">
            Who I am
          </h2>
        </div>

        <div className="md:col-span-2 space-y-5">
          {personalInfo.bio
            .split("\n")
            .filter(Boolean)
            .map((paragraph, i) => (
              <p key={i} className="text-ink-700 leading-relaxed text-base">
                {paragraph.trim()}
              </p>
            ))}

          {/* 3 stats → 3 columns, so the row is always full */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-2xl font-medium text-ink-900">2+</p>
              <p className="text-sm text-ink-500 mt-1">Years of Experience</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-2xl font-medium text-ink-900">1</p>
              <p className="text-sm text-ink-500 mt-1">Published papers</p>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="font-mono text-2xl font-medium text-ink-900">10+</p>
              <p className="text-sm text-ink-500 mt-1">Open source projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
