import { useState, useEffect } from 'react'
import type { InvitationData } from '../types/invitation'
import { formatWeddingDate, formatWeddingTime, calcDDay } from '../types/invitation'

interface Header2Props {
  data: InvitationData
}

function Header2({ data }: Header2Props) {
  const [dDay, setDDay] = useState(0)

  useEffect(() => {
    const update = () => setDDay(calcDDay(data.weddingDate, data.weddingTime))
    update()
    const interval = setInterval(update, 1000 * 60 * 60)
    return () => clearInterval(interval)
  }, [data.weddingDate, data.weddingTime])

  return (
    <header
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #fff5f7, #fce7f3, #fdf2f8)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-6 w-32 h-32 rounded-full opacity-20 blur-3xl animate-float" style={{ background: '#f9a8d4' }}></div>
        <div className="absolute top-40 right-4 w-24 h-24 rounded-full opacity-15 blur-2xl animate-float" style={{ background: '#fda4af', animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full opacity-15 blur-3xl animate-float" style={{ background: '#f0abfc', animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-16 right-10 w-28 h-28 rounded-full opacity-20 blur-2xl animate-float" style={{ background: '#fda4af', animationDelay: '0.4s' }}></div>
        <div className="absolute top-24 right-8 w-2 h-2 rounded-full opacity-40 animate-sparkle" style={{ background: '#f472b6' }}></div>
        <div className="absolute top-52 left-12 w-1.5 h-1.5 rounded-full opacity-30 animate-sparkle" style={{ background: '#ec4899', animationDelay: '0.6s' }}></div>
        <div className="absolute bottom-52 right-16 w-2 h-2 rounded-full opacity-35 animate-sparkle" style={{ background: '#f472b6', animationDelay: '1.1s' }}></div>
        <div className="absolute bottom-72 left-8 w-1.5 h-1.5 rounded-full opacity-30 animate-sparkle" style={{ background: '#ec4899', animationDelay: '0.3s' }}></div>
      </div>

      <div className="relative text-center z-10 max-w-sm mx-auto w-full">
        <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.1s' }}>
          <div className="flex justify-center items-center gap-3">
            <span className="text-3xl" role="img" aria-label="cherry blossom">🌸</span>
            <span className="text-2xl" role="img" aria-label="tulip">🌷</span>
            <span className="text-3xl" role="img" aria-label="cherry blossom">🌸</span>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-5" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs sm:text-sm tracking-[0.45em] uppercase font-serif-en font-light" style={{ color: '#be185d', letterSpacing: '0.45em' }}>
            Our Wedding Day
          </p>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.25s' }}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12" style={{ background: 'rgba(190,24,93,0.25)' }}></div>
            <span style={{ color: 'rgba(190,24,93,0.4)', fontSize: '0.5rem' }}>◆</span>
            <div className="h-[1px] w-12" style={{ background: 'rgba(190,24,93,0.25)' }}></div>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-4" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl sm:text-6xl font-light leading-tight italic font-serif-en" style={{ color: '#9d174d' }}>
            {data.groomName} <span style={{ color: '#be185d' }}>&</span> {data.brideName}
          </h1>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.35s' }}>
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-10" style={{ background: 'rgba(190,24,93,0.3)' }}></div>
            <span className="text-base" role="img" aria-label="rose">🌹</span>
            <div className="h-[1px] w-10" style={{ background: 'rgba(190,24,93,0.3)' }}></div>
          </div>
        </div>

        {dDay > 0 && (
          <div className="animate-fadeInUp opacity-0 mb-5" style={{ animationDelay: '0.38s' }}>
            <div className="inline-block px-5 py-2 rounded-full backdrop-blur-sm" style={{ background: 'rgba(252,231,243,0.8)', border: '1px solid rgba(190,24,93,0.35)' }}>
              <p className="text-sm font-medium" style={{ color: '#be185d' }}>D-{dDay}</p>
            </div>
          </div>
        )}

        <div className="animate-fadeInUp opacity-0 mb-4" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block px-6 py-2.5 rounded-full" style={{ background: 'rgba(255,245,247,0.9)', border: '1px solid rgba(190,24,93,0.3)' }}>
            <p className="text-base sm:text-lg font-light" style={{ color: '#831843' }}>
              {formatWeddingDate(data.weddingDate)}
            </p>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.45s' }}>
          <p className="text-sm tracking-[0.25em] font-light" style={{ color: '#be185d', opacity: 0.75 }}>
            {formatWeddingTime(data.weddingTime)}
          </p>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-8" style={{ animationDelay: '0.5s' }}>
          <div className="inline-block px-7 sm:px-9 py-3 sm:py-4 rounded-full backdrop-blur-md shadow-md" style={{ background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(190,24,93,0.25)' }}>
            <p className="text-sm sm:text-base font-light tracking-wide" style={{ color: '#9d174d' }}>
              {data.venueName}{data.hallName ? `, ${data.hallName}` : ''}
            </p>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-8 px-2" style={{ animationDelay: '0.6s' }}>
          <div className="rounded-3xl p-6 sm:p-8 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(252,231,243,0.6) 100%)', border: '1px solid rgba(190,24,93,0.15)', backdropFilter: 'blur(16px)' }}>
            <div className="flex justify-center mb-4">
              <span className="text-xl" role="img" aria-label="blossom">🌸</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed sm:leading-loose font-light" style={{ color: '#831843' }}>
              저희 두 사람이 사랑으로 하나되는 날,
              <br />
              소중한 분들을 모시고
              <br />
              평생의 약속을 맺고자 합니다.
              <br />
              <br />
              오셔서 축복해 주시면
              <br />
              더없는 기쁨으로 간직하겠습니다.
            </p>
            <div className="flex justify-center mt-4">
              <span className="text-xl" role="img" aria-label="tulip">🌷</span>
            </div>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.7s' }}>
          <div className="flex justify-center items-center gap-2">
            <span className="text-lg" role="img" aria-label="rose">🌹</span>
            <span className="text-base" role="img" aria-label="cherry blossom">🌸</span>
            <span className="text-lg" role="img" aria-label="rose">🌹</span>
          </div>
        </div>

        <div className="pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-1 animate-bounce">
            <span className="text-base" role="img" aria-label="blossom">🌸</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" style={{ color: 'rgba(190,24,93,0.6)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2
