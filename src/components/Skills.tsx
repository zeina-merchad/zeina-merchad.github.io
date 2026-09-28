import React from 'react';
import { skills } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-1">
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">// 05 — Skills</p>
          <h2 className="font-display text-3xl font-bold text-ink-900 leading-snug">
            Tools &amp; technologies
          </h2>
          <p className="text-sm text-ink-500 mt-4 leading-relaxed">
            The stack I reach for most, and the areas I'm deepest in.
          </p>
        </div>

        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-ink-200" />
                <p className="font-mono text-xs text-ink-400 uppercase tracking-widest whitespace-nowrap">
                  {group.category}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="text-sm text-ink-700 border border-ink-200 px-3 py-1 hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
