
import { motion } from 'framer-motion'
import {
  CalendarDays,
  MapPin,
  Clock,
  Navigation,
  Heart,
} from 'lucide-react'

const details = [
  {
    icon: CalendarDays,
    label: 'THE DATE',
    title: '31 January 2027',
    subtitle: 'Sunday',
  },
  {
    icon: Clock,
    label: 'THE TIME',
    title: 'Coming Soon',
    subtitle: 'Event time will be announced',
  },
  {
    icon: MapPin,
    label: 'THE LOCATION',
    title: 'Colombo',
    subtitle: 'Sri Lanka',
  },
]

export default function WeddingDetails() {
  return (
    <section
      id="details"
      className="details-section bg-[#10100f] text-[#f5eee4] py-28 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase mb-6">
            Save The Date
          </p>

          <h2 className="font-serif text-5xl md:text-7xl font-light">
            Wedding <span className="italic text-[#c9a66b]">Details</span>
          </h2>

          <p className="text-white/50 text-sm mt-8 tracking-widest">
            A beautiful day, a lifetime of memories.
          </p>

          <div className="w-16 h-px bg-[#c9a66b] mx-auto mt-8" />
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase">
            January
          </p>

          <h3 className="font-serif text-8xl md:text-[150px] font-light my-3">
            31
          </h3>

          <p className="text-sm tracking-[0.5em] uppercase text-white/70">
            2027 · Sunday
          </p>
        </motion.div>

        {/* Information Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {details.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`border border-[#c9a66b]/25 p-7 sm:p-10 text-center hover:border-[#c9a66b] transition-colors duration-500 ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <Icon
                  size={30}
                  strokeWidth={1}
                  className="text-[#c9a66b] mx-auto mb-8"
                />

                <p className="text-[#c9a66b] text-[10px] tracking-[0.4em] mb-5">
                  {item.label}
                </p>

                <h3 className="font-serif text-3xl mb-4">
                  {item.title}
                </h3>

                <p className="text-white/40 text-xs tracking-wider">
                  {item.subtitle}
                </p>
              </motion.div>
            )
          })}

        </div>

        {/* Venue Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 border border-[#c9a66b]/25 p-10 md:p-16 text-center"
        >
          <MapPin
            size={32}
            strokeWidth={1}
            className="text-[#c9a66b] mx-auto mb-6"
          />

          <p className="text-[#c9a66b] text-xs tracking-[0.4em] uppercase mb-5">
            The Venue
          </p>

          <h3 className="font-serif text-4xl md:text-5xl mb-5">
            Venue Details Coming Soon
          </h3>

          <p className="text-white/50 text-sm leading-7 max-w-lg mx-auto">
            The exact wedding venue and event schedule
            will be shared soon. We cannot wait to celebrate
            this special day with you.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Colombo%2C+Sri+Lanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 border border-[#c9a66b] px-8 py-4 text-xs tracking-[0.2em] uppercase text-[#c9a66b] hover:bg-[#c9a66b] hover:text-black transition-all duration-500"
          >
            <Navigation size={15} />
            Explore Colombo
          </a>
        </motion.div>

        {/* Closing */}
        <div className="text-center mt-20">
          <Heart
            size={22}
            strokeWidth={1}
            className="text-[#c9a66b] mx-auto mb-5"
          />

          <p className="font-serif italic text-2xl md:text-3xl text-white/70">
            We look forward to celebrating with you.
          </p>
        </div>

      </div>
    </section>
  )
}
