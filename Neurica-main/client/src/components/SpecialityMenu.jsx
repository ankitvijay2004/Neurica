import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialityMenu = () => {
  return (
    <section id="speciality" className="relative overflow-hidden rounded-[2rem] bg-white/70 border border-white/80 px-6 md:px-10 py-12 md:py-14 shadow-[0_16px_38px_rgba(15,30,58,0.08)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f36f45]/12 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#14b8a6]/12 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#0f766e] font-semibold">Speciality Catalog</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#0e1f2f] leading-tight">
              Find care by discipline,
              <span className="text-[#f36f45]"> not by guesswork.</span>
            </h2>
          </div>
          <p className="text-[#4f6077] max-w-md">
            Curated access to {specialityData.length} focused specialities with a cleaner path from browsing to booking.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {specialityData.map((itemData, idx) => (
            <Link
              key={itemData.speciality}
              to={`/doctors/${itemData.speciality}`}
              className="group relative rounded-2xl border border-[#dce5f1] bg-white hover:bg-[#0e1f2f] hover:border-[#0e1f2f] transition-all duration-300 p-4"
              style={{ animationDelay: `${idx * 70}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] group-hover:bg-white/10 flex items-center justify-center transition-colors">
                <img
                  src={itemData.image}
                  alt={itemData.speciality}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-[#12253a] group-hover:text-white transition-colors">
                {itemData.speciality}
              </p>
              <p className="text-xs mt-1 text-[#6b7f97] group-hover:text-[#b5c9df] transition-colors">View doctors</p>
              <span className="absolute right-3 top-3 text-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity">+</span>
            </Link>
          ))}
        </motion.div>

        <div className="mt-9 text-center md:text-left">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0e1f2f] text-white font-semibold hover:bg-[#17314b] transition"
          >
            See All Specialities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h15" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
