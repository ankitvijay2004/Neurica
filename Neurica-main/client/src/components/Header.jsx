import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] px-6 md:px-10 lg:px-14 pt-8 md:pt-10 pb-10 md:pb-14 bg-[#0e1f2f] text-white shadow-[0_28px_70px_rgba(14,31,47,0.28)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-12 w-72 h-72 rounded-full bg-[#14b8a6]/30 blur-[90px]" />
        <div className="absolute -bottom-16 right-0 w-[22rem] h-[22rem] rounded-full bg-[#f36f45]/30 blur-[100px]" />
        <div className="absolute top-1/2 left-8 md:left-16 -translate-y-1/2 w-36 h-36 border border-white/10 rounded-full" />
        <div className="absolute top-8 right-10 w-18 h-18 md:w-24 md:h-24 border border-white/10 rounded-xl rotate-12" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-end">
        <div className="pt-2 md:pt-4">
          <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-semibold tracking-wide text-[#9bece3]">
            <span className="w-2 h-2 rounded-full bg-[#14b8a6]" />
            Boutique Digital Health Portfolio
          </p>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold max-w-2xl">
            Designing a
            <span className="text-[#9bece3]"> memorable care experience </span>
            that feels premium from first click.
          </h1>

          <p className="mt-5 text-[#d5e4f6] text-base md:text-lg max-w-xl leading-relaxed">
            Move beyond a standard hospital template. This interface combines strong art direction,
            narrative layout, and confidence-building cues to make your brand stand out.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#speciality"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#f36f45] hover:bg-[#df5f37] text-white font-semibold transition"
            >
              Explore Specialities
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition"
            >
              Meet The Team
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            <div className="rounded-2xl bg-white/8 border border-white/15 px-4 py-3">
              <p className="text-2xl font-bold text-[#9bece3]">100+</p>
              <p className="text-xs uppercase tracking-wider text-[#d4e2f1]">Doctors</p>
            </div>
            <div className="rounded-2xl bg-white/8 border border-white/15 px-4 py-3">
              <p className="text-2xl font-bold text-[#ffd3c7]">4.9</p>
              <p className="text-xs uppercase tracking-wider text-[#d4e2f1]">Avg Rating</p>
            </div>
            <div className="rounded-2xl bg-white/8 border border-white/15 px-4 py-3 col-span-2 sm:col-span-1">
              <p className="text-2xl font-bold text-[#9bece3]">24/7</p>
              <p className="text-xs uppercase tracking-wider text-[#d4e2f1]">Support</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[340px] md:min-h-[420px] flex items-end justify-center">
          <div className="absolute top-3 right-2 md:right-6 glass-panel rounded-2xl px-4 py-3 text-[#0e1f2f] w-52 animate-[float-orb-a_12s_ease-in-out_infinite]">
            <p className="text-xs uppercase tracking-widest text-[#0f766e] font-semibold">Live Queue</p>
            <p className="text-2xl font-bold mt-1">12 min</p>
            <p className="text-xs mt-1 text-slate-500">Average response time</p>
          </div>

          <div className="absolute bottom-8 left-0 bg-[#14b8a6] text-white rounded-2xl px-4 py-3 shadow-xl w-52 animate-[float-orb-b_14s_ease-in-out_infinite]">
            <p className="text-xs uppercase tracking-widest text-[#d9fffb] font-semibold">Care Promise</p>
            <p className="text-lg font-bold mt-1">No long waiting room loops</p>
          </div>

          <img
            src={assets.header_img}
            alt="Neurica care professional"
            className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_24px_45px_rgba(5,10,20,0.4)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
