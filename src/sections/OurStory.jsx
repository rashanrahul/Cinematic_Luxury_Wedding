
import { motion } from 'framer-motion'

const milestones = [
  {
    number: '01',
    title: 'The First Meeting',
    description:
      'Sometimes the most beautiful journeys begin with a simple hello.',
  },
  {
    number: '02',
    title: 'A Beautiful Journey',
    description:
      'Through countless memories, laughter and dreams, our story became something extraordinary.',
  },
  {
    number: '03',
    title: 'Forever Begins',
    description:
      'Now, we are ready to begin our greatest adventure together, surrounded by love.',
  },
]

export default function OurStory() {
  return (
    <section
      id="story"
      className="story-section bg-[#0b0b0b] text-[#f5eee4] py-28 md:py-40 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase mb-6">
            A Story Written In Love
          </p>

          <h2 className="text-5xl md:text-7xl font-light">
            Our <span className="italic text-[#c9a66b]">Story</span>
          </h2>

          <div className="w-16 h-px bg-[#c9a66b] mx-auto mt-8" />
        </motion.div>

        {/* Story Image and Text */}
        <div className="flex flex-col items-center gap-14 md:gap-20 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000"
              alt="Romantic wedding couple"
              className="w-full h-[450px] md:h-[650px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <p className="text-[#c9a66b] text-xs tracking-[0.4em] uppercase mb-8">
              Jasmine & Rayan
            </p>

            <h3 className="text-4xl md:text-6xl leading-tight font-light mb-8">
              Two Souls,
              <br />
              One Beautiful
              <br />
              <span className="italic text-[#c9a66b]">Forever.</span>
            </h3>

            <p className="text-white/60 leading-8 text-sm md:text-base">
              Every love story is beautiful, but ours is our favourite.
              From the little moments that made us smile to the dreams
              we built together, every chapter has brought us closer.
            </p>

            <p className="text-white/60 leading-8 text-sm md:text-base mt-6">
              As we begin this beautiful new chapter, we look forward
              to celebrating a lifetime of love, happiness and
              unforgettable memories.
            </p>

            <p className="font-serif italic text-3xl text-[#c9a66b] mt-12">
              With love, Jasmine & Rayan
            </p>
          </motion.div>
        </div>

        {/* Milestones */}
        <div className="grid md:grid-cols-3 gap-12 mt-36">

          {milestones.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border-t border-[#c9a66b]/40 pt-8 text-center"
            >
              <span className="text-[#c9a66b] text-sm tracking-widest">
                {item.number}
              </span>

              <h3 className="font-serif text-3xl mt-5 mb-5">
                {item.title}
              </h3>

              <p className="text-white/50 text-sm leading-7">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
