
import { motion } from 'framer-motion'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
    alt: 'Elegant wedding celebration',
    className: 'sm:col-span-2 sm:row-span-2 h-[350px] sm:h-[650px]',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1000',
    alt: 'Romantic wedding moment',
    className: 'h-[350px]',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000',
    alt: 'Beautiful wedding details',
    className: 'h-[350px]',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=1000',
    alt: 'Wedding photography',
    className: 'h-[350px]',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?q=80&w=1000',
    alt: 'Personalized wedding welcome sign',
    className: 'h-[350px]',
  },
]

export default function WeddingGallery() {
  return (
    <section
      id="gallery"
      className="gallery-section bg-[#090909] text-[#f5eee4] py-28 md:py-36 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Gallery Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <p className="text-[#c9a66b] text-xs tracking-[0.5em] uppercase mb-6">
            Moments To Remember
          </p>

          <h2 className="font-serif text-5xl md:text-7xl font-light">
            Our <span className="italic text-[#c9a66b]">Gallery</span>
          </h2>

          <div className="w-16 h-px bg-[#c9a66b] mx-auto mt-8" />

          <p className="text-white/40 text-sm mt-8 max-w-lg mx-auto leading-7">
            A collection of beautiful moments, timeless emotions
            and memories that tell our story.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className={`group relative overflow-hidden ${image.className}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />

              <div className="absolute inset-0 border border-white/0 group-hover:border-[#c9a66b]/70 m-4 transition-all duration-700" />
            </motion.div>
          ))}

        </div>

        {/* Gallery Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-20"
        >
          <p className="font-serif italic text-3xl text-[#c9a66b]">
            Every picture tells a story.
          </p>

          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mt-5">
            Jasmine & Rayan · 2027
          </p>
        </motion.div>

      </div>
    </section>
  )
}
