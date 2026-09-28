import React, { useState } from 'react';
import { papers } from '../data';

const Research: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="research" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">// 03 — Research</p>
          <h2 className="font-display text-3xl font-bold text-ink-900">Published papers</h2>
        </div>
        <span className="font-mono text-xs text-ink-400">{papers.length} papers</span>
      </div>

      <div className="space-y-0 border border-ink-200">
        {papers.map((paper, i) => (
          <div key={paper.id} className={`border-b border-ink-200 last:border-b-0`}>
            <button
              className="w-full text-left p-6 hover:bg-ink-50 transition-colors"
              onClick={() => setExpanded(expanded === paper.id ? null : paper.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-ink-400">{paper.year}</span>
                    <span className="font-mono text-xs text-accent bg-accent-light px-2 py-0.5">
                      {paper.venue}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink-900 leading-snug">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-ink-500 mt-1">
                    {paper.authors.join(', ')}
                  </p>
                </div>
                <span className={`text-ink-400 transition-transform mt-1 ${expanded === paper.id ? 'rotate-180' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </span>
              </div>
            </button>

            {expanded === paper.id && (
              <div className="px-6 pb-6 bg-ink-50 border-t border-ink-100">
                <p className="text-sm text-ink-700 leading-relaxed mt-4 mb-4 italic">
                  {paper.abstract}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {paper.tags.map(tag => (
                      <span key={tag} className="font-mono text-xs text-ink-600 bg-ink-100 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {paper.link && (
                    <a href={paper.link} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:text-accent-dark flex items-center gap-1">
                      Read paper →
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
