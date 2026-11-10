
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Send } from 'lucide-react'

export default function RSVP() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('2')
  const [attendance, setAttendance] = useState('Yes, I will attend')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = '94707937390'

    const whatsappMessage = `
Hello Jasmine & Rayan! ❤️

Wedding RSVP Confirmation

Guest Name: ${name}
Number of Guests: ${guests}
Attendance: ${attendance}

Message: ${message || 'No additional message'}

Wedding Date: 31 January 2027
Location: Colombo, Sri Lanka

Best wishes!
    `

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappURL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="rsvp"
      className="rsvp-section bg-[#090909] text-[#f5eee4] py-28 md:py-36 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Heart
            size={28}
            strokeWidth={1}
            className="text-[#c9a66b] mx-auto mb-8"
          />

          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase mb-6">
            We Would Love To Have You
          </p>

          <h2 className="font-serif text-5xl md:text-7xl font-light">
            Kindly <span className="italic text-[#c9a66b]">RSVP</span>
          </h2>

          <p className="text-white/50 text-sm leading-7 mt-8">
            Your presence would make our special day
            even more beautiful. Please let us know
            if you can celebrate with us.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 text-center border border-[#c9a66b]/30 p-7 md:p-12 space-y-8"
        >

          {/* Guest Name */}
          <div>
            <label htmlFor="guest-name" className="block text-center text-[#c9a66b] text-xs tracking-[0.2em] uppercase mb-4">
              Your Full Name
            </label>

            <input
              id="guest-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              autoComplete="name"
              className="w-full bg-transparent border-b border-white/30 py-4 text-white outline-none focus:border-[#c9a66b] placeholder:text-white/30"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label htmlFor="guest-count" className="block text-center text-[#c9a66b] text-xs tracking-[0.2em] uppercase mb-4">
              Number of Guests
            </label>

            <select
              id="guest-count"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-[#171512] border-b border-white/30 py-4 text-white outline-none focus:border-[#c9a66b]"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
            </select>
          </div>

          {/* Attendance */}
          <div>
            <label className="block text-center text-[#c9a66b] text-xs tracking-[0.2em] uppercase mb-5">
              Will You Attend?
            </label>

            <div className="flex flex-col sm:flex-row justify-center gap-5">

              <label               className="flex min-h-11 items-center gap-3 px-3 text-sm text-white/80 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="Yes, I will attend"
                  checked={attendance === 'Yes, I will attend'}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="accent-[#c9a66b]"
                />
                Joyfully Accept
              </label>

              <label               className="flex min-h-11 items-center gap-3 px-3 text-sm text-white/80 cursor-pointer">
                <input
                  type="radio"
                  name="attendance"
                  value="Sorry, I cannot attend"
                  checked={attendance === 'Sorry, I cannot attend'}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="accent-[#c9a66b]"
                />
                Regretfully Decline
              </label>

            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="guest-message" className="block text-center text-[#c9a66b] text-xs tracking-[0.2em] uppercase mb-4">
              Your Message (Optional)
            </label>

            <textarea
              id="guest-message"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your wishes..."
              className="w-full bg-transparent border-b border-white/30 py-4 text-white outline-none focus:border-[#c9a66b] placeholder:text-white/30 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-4 bg-[#c9a66b] text-black py-5 text-xs tracking-[0.3em] uppercase hover:bg-[#e0c18b] transition-all duration-500"
          >
            <Send size={16} />
            Confirm via WhatsApp
          </button>

          <p className="text-center text-white/40 text-xs">
            Your RSVP will open in WhatsApp for confirmation.
          </p>

        </motion.form>

      </div>
    </section>
  )
}
