
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { number: '01', title: 'Our Story', link: '#story' },
    { number: '02', title: 'Wedding Details', link: '#details' },
    { number: '03', title: 'RSVP', link: '#rsvp' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <section className="hero-section relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2400')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#090807]/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#090807]/65 via-[#090807]/10 to-[#090807]/70" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 py-8">

        <h2 className="text-xl tracking-[0.3em] text-[#D6B77A]">
          J <span className="text-white/90">&</span> R
        </h2>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-white/80">
          <a href="#story" className="hover:text-[#D6B77A] transition-colors">Our Story</a>
          <a href="#details" className="hover:text-[#D6B77A] transition-colors">Details</a>
          <a href="#rsvp" className="hover:text-[#D6B77A] transition-colors">RSVP</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D6B77A] p-2 relative z-[60]"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {/* Full Screen Luxury Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#080807] px-8 md:px-20"
          >

            {/* Decorative Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-serif text-[45vw] text-[#D6B77A]/[0.025]">
                J&R
              </span>
            </div>

            {/* Menu Heading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-[#D6B77A] text-[10px] tracking-[0.5em] uppercase mb-12"
            >
              Explore Our Wedding
            </motion.p>

            {/* Menu Links */}
            <div className="relative flex flex-col gap-7 md:gap-9">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.number}
                  href={item.link}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.45 + index * 0.15,
                    duration: 0.7,
                  }}
                  className="group flex items-center gap-5 border-b border-white/10 pb-5"
                >
                  <span className="text-[#D6B77A] text-xs tracking-widest">
                    {item.number}
                  </span>

                  <span className="font-serif text-4xl md:text-6xl text-white/80 group-hover:text-[#D6B77A] transition-colors duration-300">
                    {item.title}
                  </span>

                  <span className="ml-auto text-[#D6B77A] text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-10 left-0 w-full text-center"
            >
              <div className="w-12 h-px bg-[#D6B77A]/50 mx-auto mb-5" />

              <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase">
                Jasmine & Rayan
              </p>

              <p className="text-[#D6B77A] text-[10px] tracking-[0.3em] mt-2">
                31 January 2027 · Colombo
              </p>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[#D6B77A] text-xs md:text-sm tracking-[0.5em] uppercase mb-8"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="font-serif text-6xl md:text-9xl font-light tracking-wide"
        >
          Jasmine
        </motion.h1>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="font-serif italic text-4xl md:text-6xl text-[#D6B77A] my-2"
        >
          &
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-serif text-6xl md:text-9xl font-light tracking-wide"
        >
          Rayan
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="mt-12"
        >
          <div className="w-16 h-px bg-[#D6B77A] mx-auto mb-6" />

          <p className="text-sm md:text-base tracking-[0.35em] uppercase">
            31 January 2027
          </p>

          <p className="text-xs tracking-[0.4em] text-white/60 uppercase mt-4">
            Colombo · Sri Lanka
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-9"
        >
          <a
            href="#rsvp"
            className="rounded-full bg-[#D6B77A] px-8 py-4 text-[10px] tracking-[0.25em] uppercase text-[#17120a] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Celebrate with us
          </a>
          <a
            href="#story"
            className="rounded-full border border-white/50 px-8 py-4 text-[10px] tracking-[0.25em] uppercase text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
          >
            Discover our story
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/60">
          Scroll to discover
        </span>
        <ChevronDown className="text-[#D6B77A]" size={20} />
      </motion.div>

    </section>
  )
}
