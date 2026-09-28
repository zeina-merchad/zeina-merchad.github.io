import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data";

const Writing: React.FC = () => {
  const isOdd = blogPosts.length % 2 === 1;

  return (
    <section id="writing" className="py-24 bg-white">
      <div className="px-6 max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              // 04 — Writing
            </p>
            <h2 className="font-display text-3xl font-bold text-ink-900">
              From the blog
            </h2>
          </div>
        </div>

        {/* 2 per row; an odd last post spans the full row so no cell is left empty */}
        <div className="grid md:grid-cols-2 gap-px bg-ink-200 border border-ink-200">
          {blogPosts.map((post, i) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className={`group bg-white p-6 flex flex-col gap-3 hover:bg-ink-50 transition-colors ${
                isOdd && i === blogPosts.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ink-400">
                  {post.date}
                </span>
                <span className="font-mono text-xs text-ink-400">·</span>
                <span className="font-mono text-xs text-ink-400">
                  {post.readTime} min read
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-900 leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-ink-500 bg-ink-100 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
