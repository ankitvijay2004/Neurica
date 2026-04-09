import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-[#0e1f2f] px-6 md:px-10 py-12 md:py-14 text-white shadow-[0_20px_45px_rgba(8,17,35,0.35)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-8 w-52 h-52 rounded-full bg-[#14b8a6]/25 blur-3xl" />
        <div className="absolute -bottom-16 left-0 w-64 h-64 rounded-full bg-[#f36f45]/25 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#97e7dd] font-semibold">Featured Team</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
              Top specialists,
              <span className="text-[#ffd2c5]"> selected for outcomes.</span>
            </h2>
          </div>
          <p className="text-[#c5d6e8] max-w-md">
            Expert profiles with transparent credentials, real availability, and direct booking access.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
        >
          {doctors.slice(0, 8).map((doctor) => (
            <article
              key={doctor._id}
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              className="group cursor-pointer rounded-2xl bg-white/10 border border-white/10 hover:bg-white/16 hover:border-white/25 transition-all overflow-hidden"
            >
              <div className="relative h-56 bg-gradient-to-br from-white/8 to-white/0 flex items-end justify-center p-3">
                <img
                  src={doctor.image}
                  alt={doctor.name || 'Doctor'}
                  className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className={`absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full font-semibold ${doctor.available ? 'bg-[#14b8a6] text-white' : 'bg-white/20 text-white'}`}>
                  {doctor.available ? 'Open' : 'Busy'}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{doctor.name}</h3>
                <p className="text-[#9bece3] text-sm mt-0.5 font-semibold">{doctor.speciality}</p>
                <p className="text-[#c6d8eb] text-sm mt-2">
                  {doctor.degree || 'BDS, MDS'} | {doctor.experience || '16'} years exp.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#ffd2c5]">
                  Book consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 12h15" />
                  </svg>
                </p>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="mt-9 text-center">
          <button
            onClick={() => {
              navigate('/doctors');
              window.scrollTo(0, 0);
            }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#f36f45] hover:bg-[#df5f37] text-white font-semibold transition"
          >
            Explore All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
