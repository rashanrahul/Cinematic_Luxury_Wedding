
import { motion } from 'framer-motion'
import { Heart, MessageCircle, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer bg-[#10100f] text-[#f5eee4] px-6 py-20 border-t border-[#c9a66b]/20">

      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase mb-8">
            Together Forever
          </p>

          <h2 className="font-serif text-5xl md:text-7xl font-light">
            Jasmine <span className="italic text-[#c9a66b]">&</span> Rayan
          </h2>

          <p className="text-white/50 text-xs tracking-[0.4em] mt-8">
            31 JANUARY 2027 · COLOMBO, SRI LANKA
          </p>

          <div className="w-16 h-px bg-[#c9a66b] mx-auto my-12" />

          <p className="font-serif italic text-2xl text-white/70 mb-8">
            We'd love to hear from you.
          </p>

          {/* WhatsApp Only */}
          <motion.a
            href="https://wa.me/94707937390"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 border border-[#c9a66b] px-9 py-5 text-[#c9a66b] text-xs tracking-[0.2em] uppercase hover:bg-[#c9a66b] hover:text-black transition-all duration-500"
          >
            <MessageCircle size={19} />
            Contact via WhatsApp
          </motion.a>

          <p className="text-white/40 text-sm mt-5">
            +94 70 793 7390
          </p>
        </motion.div>

        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col items-center text-center gap-6">

          <p className="text-white/40 text-xs tracking-wider">
            © 2027 Jasmine & Rayan. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-white/40 text-xs">
            Made with
            <Heart size={13} className="text-[#c9a66b]" />
            and love
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-[#c9a66b] text-xs tracking-wider hover:text-white transition-colors"
          >
            Back to Top
            <ArrowUp size={15} />
          </a>

        </div>

      </div>
    </footer>
  )
}
