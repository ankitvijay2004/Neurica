import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  FaUser, FaSignOutAlt, FaUserMd, FaExternalLinkAlt,
  FaChevronDown, FaBars, FaTimes, FaPhoneAlt, FaMapMarkerAlt,
  FaUserNurse, FaInfoCircle, FaHandsHelping, FaEnvelope,
  FaCalendarAlt, FaHome
} from 'react-icons/fa';
import { HiOutlineLogin } from 'react-icons/hi';
import { GiMedicines } from 'react-icons/gi';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from "../assets/assets.js";

const navLinks = [
  { path: "", label: "Home", icon: FaHome },
  { path: "doctors", label: "Doctors", icon: FaUserNurse },
  { path: "about", label: "About", icon: FaInfoCircle },
  { path: "services", label: "Services", icon: FaHandsHelping },
  { path: "contact", label: "Contact", icon: FaEnvelope }
];

const staffLoginUrl = `${(import.meta.env.VITE_ADMIN_URL || "http://localhost:5175").replace(/\/$/, '')}/`;

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  const userMenu = [
    { path: "/my-profile", label: "My Profile", icon: FaUser },
    { path: "/my-appointments", label: "My Appointments", icon: FaCalendarAlt },
    { label: "Logout", icon: FaSignOutAlt, action: logout, isLogout: true }
  ];

  const AuthButtons = () => (
    <div className="hidden lg:flex items-center space-x-3">
      <a
        href={staffLoginUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/70 hover:bg-white text-[#0e1f2f] px-4 py-2 rounded-full border border-white/80 font-semibold shadow-sm transition"
      >
        <FaUserMd /><span>Staff Login</span><FaExternalLinkAlt className="text-xs" />
      </a>
      <button
        onClick={() => navigate("/login")}
        className="flex items-center gap-2 bg-[#f36f45] hover:bg-[#df5f37] text-white px-5 py-2.5 rounded-full font-semibold shadow-md transition"
      >
        <HiOutlineLogin /><span>Login</span>
      </button>
    </div>
  );

  const NavItems = ({ mobile = false }) => (
    <>
      {navLinks.map(({ path, label, icon }) => (
        <NavLink
          key={path}
          to={path}
          onClick={() => mobile && setShowMenu(false)}
          className={({ isActive }) =>
            `${mobile
              ? `py-2 px-4 rounded-lg flex items-center gap-3 ${isActive ? 'bg-white text-[#f36f45]' : 'text-[#1f2f40] hover:bg-white/80'}`
              : `py-1 flex items-center gap-1.5 font-semibold relative group transition ${isActive ? 'text-[#f36f45]' : 'text-[#1f2f40] hover:text-[#f36f45]'}`
            }`
          }
        >
          {React.createElement(icon, { className: `${mobile ? 'text-[#14b8a6]' : 'text-[#14b8a6]'} text-lg` })}
          {label}
          {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f36f45] group-hover:w-full transition-all duration-300" />}
        </NavLink>
      ))}
    </>
  );

  const UserDropdown = () => (
    <div className="absolute top-full right-0 pt-2 text-base font-medium z-30 animate-fade-in">
      <div className="min-w-52 glass-panel rounded-2xl flex flex-col p-4 gap-3 border border-white/90">
        {userMenu.map(({ label, icon, path, action, isLogout }) => (
          <p
            key={label}
            onClick={() => {
              action ? action() : navigate(path);
              setShowDropdown(false);
            }}
            className={`cursor-pointer flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/80 transition ${isLogout ? 'text-red-500 hover:text-red-600' : 'text-[#1f2f40] hover:text-[#f36f45]'}`}
          >
            {React.createElement(icon, { className: isLogout ? 'text-red-500' : 'text-[#14b8a6]' })}
            {label}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <header className="px-3 md:px-6 pt-3">
      {/* Top Info */}
      <div className="hidden md:block bg-[#0e1f2f] text-[#e2edf9] text-sm py-2.5 px-4 rounded-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center space-x-1"><FaPhoneAlt size={12} /><span>Emergency: +91-1234567890</span></div>
            <div className="flex items-center space-x-1"><FaMapMarkerAlt size={12} /><span>305901 Beawar, Rajasthan, India</span></div>
          </div>
          <div className="flex items-center space-x-1 text-[#66e4d6]"><GiMedicines size={14} /><span>24/7 Pharmacy Services</span></div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 mt-2 flex justify-between items-center rounded-2xl glass-panel">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={assets.logo} alt="Neurica Logo" className="h-10 mr-2" />
          <div>
            <span className="text-2xl font-bold text-[#0e1f2f] tracking-tight">Neurica</span>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#14b8a6] -mt-1">Care Studio</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavItems />
        </nav>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {token && userData ? (
            <div
              className="flex items-center gap-2 cursor-pointer relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="relative">
                <img
                  src={userData.image || assets.default_profile}
                  alt="Profile"
                  className="rounded-full w-10 h-10 object-cover border-2 border-[#dbe4f2]"
                />
                <div className="absolute -bottom-1 -right-1 bg-[#14b8a6] rounded-full p-1">
                  <FaChevronDown className="text-white text-xs" />
                </div>
              </div>
              {showDropdown && <UserDropdown />}
            </div>
          ) : (
            <AuthButtons />
          )}

          {/* Mobile Toggle */}
          <button className="md:hidden text-[#0e1f2f]" onClick={() => setShowMenu(true)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {showMenu && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setShowMenu(false)} />}

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-0 left-0 w-72 h-full z-50 bg-[#f5f8fc] transform transition-transform duration-300 shadow-2xl ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-[#dce4ef]">
          <div className="flex items-center cursor-pointer" onClick={() => { navigate("/"); setShowMenu(false); }}>
            <img src={assets.logo} alt="Neurica Logo" className="h-8 mr-2" />
            <span className="text-xl font-bold text-[#0e1f2f]">Neurica</span>
          </div>
          <button className="text-gray-500" onClick={() => setShowMenu(false)}><FaTimes size={24} /></button>
        </div>

        <div className="p-4">
          <ul className="flex flex-col space-y-4"><NavItems mobile /></ul>

          <div className="mt-8 border-t border-[#dce4ef] pt-4">
            {token && userData ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <img src={userData.image || assets.default_profile} alt="Profile" className="rounded-full w-12 h-12 object-cover border-2 border-blue-100" />
                  <div>
                    <p className="font-medium">{userData.name || "User"}</p>
                    <p className="text-sm text-gray-500">{userData.email}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {userMenu.map(({ label, icon, path, action, isLogout }) => (
                    <button
                      key={label}
                      onClick={() => { action ? action() : navigate(path); setShowMenu(false); }}
                      className={`w-full text-left py-2 px-4 rounded-lg flex items-center gap-3 hover:bg-white ${isLogout ? 'text-red-500' : 'text-[#1f2f40]'}`}
                    >
                      {React.createElement(icon, { className: isLogout ? 'text-red-500' : 'text-[#14b8a6]' })}
                      {label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-3">
                <a
                  href={staffLoginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white text-[#1f2f40] px-6 py-3 rounded-full border border-[#dce4ef] font-semibold"
                >
                  <FaUserMd /><span>Staff Login</span><FaExternalLinkAlt className="text-xs" />
                </a>
                <button
                  onClick={() => { navigate("/login"); setShowMenu(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#f36f45] hover:bg-[#df5f37] text-white px-6 py-3 rounded-full font-semibold shadow-md"
                >
                  <HiOutlineLogin /><span>Patient Login</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
