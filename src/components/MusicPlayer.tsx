import { useState, useRef, useEffect } from 'react'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // 로컬 스토리지에서 재생 상태 복원
    const savedPlaying = localStorage.getItem('musicPlaying')
    if (savedPlaying === 'true' && audioRef.current) {
      audioRef.current.play().catch(() => {
        // 자동 재생 실패 시 무시 (브라우저 정책)
      })
      setIsPlaying(true)
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        localStorage.setItem('musicPlaying', 'false')
      } else {
        audioRef.current.play().catch((error) => {
          console.error('음악 재생 실패:', error)
        })
        localStorage.setItem('musicPlaying', 'true')
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <>
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Player */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Expanded Volume Control */}
        {isExpanded && (
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-black/20 animate-fadeInUp">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-700 font-light">볼륨</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 h-1 bg-gradient-to-r from-gray-200 to-black rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:bg-black
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:shadow-lg
                  [&::-moz-range-thumb]:w-3
                  [&::-moz-range-thumb]:h-3
                  [&::-moz-range-thumb]:bg-black
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:border-0"
              />
              <span className="text-xs text-gray-700 font-light min-w-[2rem] text-right">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        )}

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-md rounded-full shadow-2xl border border-black/30 hover:border-black/60 hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label={isPlaying ? '음악 일시정지' : '음악 재생'}
        >
          {/* Rotating Ring Animation when Playing */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-black/10 animate-spin" style={{ animationDuration: '3s' }}></div>
          )}

          {/* Icon */}
          <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
            {isPlaying ? (
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-black ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>

          {/* Pulse Effect when Playing */}
          {isPlaying && (
            <>
              <div className="absolute inset-0 rounded-full bg-black/5 animate-ping" style={{ animationDuration: '2s' }}></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black/5 to-transparent opacity-50"></div>
            </>
          )}
        </button>

        {/* Music Note Indicator */}
        {isPlaying && (
          <div className="absolute -top-8 right-0 text-2xl animate-float opacity-70">
            ♪
          </div>
        )}
      </div>
    </>
  )
}

export default MusicPlayer
