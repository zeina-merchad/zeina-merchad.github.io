import React from 'react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 max-w-5xl mx-auto">
      <div className="max-w-2xl">
        <p className="font-mono text-accent text-sm mb-4">
          <span className="text-ink-400">~</span> $ whoami
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-ink-900 leading-tight mb-6">
          {personalInfo.name}
        </h1>
        <p className="font-mono text-lg md:text-xl text-ink-700 mb-6 leading-relaxed">
          <span className="text-accent">&gt;</span> {personalInfo.title}
          <span className="inline-block w-2.5 h-5 md:h-6 ml-1 align-middle bg-accent animate-blink" aria-hidden="true" />
        </p>
        <p className="text-ink-600 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          {personalInfo.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-sm font-medium hover:bg-accent-dark transition-colors"
          >
            View my work
            <span>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-ink-800 text-ink-800 px-6 py-3 text-sm font-medium hover:bg-ink-800 hover:text-white transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Decorative rule */}
      <div className="mt-20 flex items-center gap-4">
        <div className="h-px w-12 bg-accent" />
        <span className="text-xs text-ink-400 uppercase tracking-widest font-mono">
          Software Engineer · Researcher · Writer
        </span>
      </div>
    </section>
  );
};

export default Hero;
