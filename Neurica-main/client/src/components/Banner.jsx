import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const bannerPoints = [
  'Instant doctor matching by speciality',
  'Profile-first booking with transparent fees',
  'Designed for trust, speed, and conversion'
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className="relative mt-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#fff8f4] via-[#f2fbfa] to-[#eef4fb] border border-white/70 shadow-[0_18px_45px_rgba(21,37,63,0.1)]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 top-8 w-44 h-44 bg-[#f36f45]/20 blur-3xl rounded-full" />
        <div className="absolute right-8 -bottom-12 w-56 h-56 bg-[#14b8a6]/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1fr_1px_0.9fr] gap-0">
        <div className="px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">Creative Upgrade</p>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.8rem] leading-tight font-bold text-[#0e1f2f] max-w-xl">
            Turn this project into a bold,
            <span className="text-[#f36f45]"> portfolio-level </span>
            healthcare product.
          </h2>
          <p className="mt-4 text-[#42546b] text-base md:text-lg max-w-xl leading-relaxed">
            Keep your current features, but present them with confident visuals and clearer conversion pathways.
            This is where utility meets identity.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                navigate('/login');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0e1f2f] hover:bg-[#122a3f] text-white font-semibold transition"
            >
              Start Booking
            </button>
            <button
              onClick={() => {
                navigate('/doctors');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#d4deea] bg-white/70 text-[#0e1f2f] font-semibold hover:bg-white transition"
            >
              Browse Doctors
            </button>
          </div>
        </div>

        <div className="hidden lg:block bg-[#dce6f1]/70" />

        <div className="px-6 sm:px-10 py-10 lg:py-14">
          <div className="rounded-2xl bg-white/80 border border-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36f45]">What Changes</p>
            <ul className="mt-4 space-y-4">
              {bannerPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[#1f2f40]">
                  <span className="mt-1 w-5 h-5 rounded-full bg-[#14b8a6] text-white text-xs flex items-center justify-center">✓</span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-2xl bg-[#0e1f2f] px-5 py-4 text-white">
            <p className="text-sm text-[#9bd9d2]">Design Direction</p>
            <p className="text-xl font-bold mt-1">Editorial + Product Hybrid</p>
            <p className="text-sm mt-1 text-[#d4e2f1]">Distinctive typography, layered backgrounds, and intentional spacing rhythm.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
