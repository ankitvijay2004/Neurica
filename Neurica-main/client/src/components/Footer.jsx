import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' }
];

const Footer = () => {
  return (
    <footer className="mt-10 px-4 md:px-6 pb-6">
      <div className="max-w-7xl mx-auto rounded-[2rem] overflow-hidden bg-[#0b1b2a] text-white shadow-[0_25px_60px_rgba(9,22,39,0.45)]">
        <div className="relative px-6 md:px-10 lg:px-14 pt-12 pb-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 left-0 w-72 h-72 bg-[#14b8a6]/18 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f36f45]/18 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            <div>
              <img src={assets.logo} alt="Neurica" className="w-44" />
              <p className="mt-4 text-[#c4d6e8] leading-relaxed text-sm max-w-sm">
                A creative healthcare platform built to make doctor discovery and appointment booking easier, clearer, and faster.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f36f45] transition flex items-center justify-center"><FaFacebookF /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f36f45] transition flex items-center justify-center"><FaTwitter /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f36f45] transition flex items-center justify-center"><FaInstagram /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f36f45] transition flex items-center justify-center"><FaLinkedinIn /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f36f45] transition flex items-center justify-center"><FaYoutube /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold">Quick Navigation</h3>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path} className="text-[#c4d6e8] hover:text-[#9bece3] transition text-sm font-medium inline-flex items-center">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Contact Studio</h3>
              <div className="mt-4 text-sm space-y-3 text-[#c4d6e8]">
                <p>
                  <span className="block text-[#9bece3] text-xs uppercase tracking-wider">Address</span>
                  305901 Beawar, Rajasthan, India
                </p>
                <p>
                  <span className="block text-[#9bece3] text-xs uppercase tracking-wider">Phone</span>
                  +91 1234567890
                </p>
                <p>
                  <span className="block text-[#9bece3] text-xs uppercase tracking-wider">Email</span>
                  ankitvijay100@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold">Weekly Health Notes</h3>
              <p className="mt-4 text-sm text-[#c4d6e8]">Get practical tips, updates, and doctor-backed guidance every week.</p>
              <form className="mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-[#a8bdd2] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl px-4 py-3 bg-[#f36f45] hover:bg-[#df5f37] text-white font-semibold transition"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 lg:px-14 py-4 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-[#a9bfd6]">
          <p>Copyright {new Date().getFullYear()} Neurica. All rights reserved.</p>
          <p>
            Crafted by{' '}
            <a
              href="https://www.linkedin.com/in/jay-joshi-75b75124b/"
              className="text-[#9bece3] hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jay Joshi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
