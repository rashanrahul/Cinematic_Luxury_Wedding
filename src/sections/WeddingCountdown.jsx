
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Heart } from 'lucide-react'

const weddingDate = new Date('2027-01-31T00:00:00+05:30').getTime()

function calculateTimeLeft() {
  const difference = weddingDate - Date.now()

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

const countdownItems = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="countdown-section relative overflow-hidden bg-[#10100f] text-[#f5eee4] py-28 md:py-36 px-6">

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c9a66b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c9a66b]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart
            size={25}
            strokeWidth={1}
            className="text-[#c9a66b] mx-auto mb-8"
          />

          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase mb-6">
            The Big Day Is Almost Here
          </p>

          <h2 className="font-serif text-5xl md:text-7xl font-light">
            Counting Down To
          </h2>

          <h3 className="font-serif italic text-4xl md:text-6xl text-[#c9a66b] mt-3">
            Forever
          </h3>

          <p className="text-white/50 text-sm tracking-[0.3em] mt-8">
            31 JANUARY 2027 · COLOMBO
          </p>
        </motion.div>

        {/* Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20">

          {countdownItems.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="border border-[#c9a66b]/30 py-10 px-4 md:py-14"
            >
              <div className="font-serif text-6xl md:text-8xl font-light text-[#c9a66b] tabular-nums">
                {String(timeLeft[item.key]).padStart(2, '0')}
              </div>

              <p className="text-white/50 text-[10px] md:text-xs tracking-[0.35em] uppercase mt-6">
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16"
        >
          <Clock
            size={18}
            strokeWidth={1}
            className="text-[#c9a66b] mx-auto mb-5"
          />

          <p className="font-serif italic text-2xl text-white/70">
            Every second brings us closer to forever.
          </p>

          <p className="text-[#c9a66b] text-xs tracking-[0.3em] mt-6">
            JASMINE & RAYAN
          </p>
        </motion.div>

      </div>
    </section>
  )
}
