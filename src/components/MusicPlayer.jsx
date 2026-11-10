
import { useEffect, useRef, useState } from 'react'
import { Music2, Pause, Play } from 'lucide-react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) return

    audio.volume = 0.5

    const startMusic = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.log('Autoplay blocked by browser. Visitor can press Play.')
      }
    }

    startMusic()
  }, [])

  const toggleMusic = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      console.error('Music playback failed:', error)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-[#c9a96e] bg-black/90 px-5 py-3 text-[#e8d5a8] shadow-xl backdrop-blur-md transition hover:bg-[#c9a96e] hover:text-black"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        <Music2 size={18} />
        <span className="text-xs tracking-widest">
          {isPlaying ? 'PAUSE MUSIC' : 'PLAY MUSIC'}
        </span>
      </button>
    </>
  )
}
