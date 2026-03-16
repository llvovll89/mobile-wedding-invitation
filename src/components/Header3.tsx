import { useState, useEffect } from 'react'
import type { InvitationData } from '../types/invitation'
import { formatWeddingDateDot, formatWeddingTime, calcDDay } from '../types/invitation'

interface Header3Props {
  data: InvitationData
}

function Header3({ data }: Header3Props) {
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
      style={{ background: 'linear-gradient(to bottom, #1e3a5f, #162d4a, #0f2340)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: '#c9a84c' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-5 blur-3xl animate-float" style={{ background: '#c9a84c', animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-6 w-32 h-32 rounded-full opacity-5 blur-2xl animate-float" style={{ background: '#c9a84c', animationDelay: '0.5s' }}></div>
        <div className="absolute top-28 left-10 w-1 h-1 rounded-full opacity-50 animate-sparkle" style={{ background: '#c9a84c' }}></div>
        <div className="absolute top-48 right-14 w-1 h-1 rounded-full opacity-40 animate-sparkle" style={{ background: '#c9a84c', animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-48 left-16 w-1 h-1 rounded-full opacity-45 animate-sparkle" style={{ background: '#c9a84c', animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-36 right-10 w-1 h-1 rounded-full opacity-35 animate-sparkle" style={{ background: '#c9a84c', animationDelay: '0.4s' }}></div>
      </div>

      <div className="relative text-center z-10 max-w-sm mx-auto w-full">
        <div className="animate-fadeInUp opacity-0 mb-7" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16" style={{ background: 'linear-gradient(to right, transparent, #c9a84c)' }}></div>
            <span className="text-xs" style={{ color: '#c9a84c' }}>◆</span>
            <div className="h-[1px] w-16" style={{ background: 'linear-gradient(to left, transparent, #c9a84c)' }}></div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="h-[1px] w-8" style={{ background: 'rgba(201,168,76,0.4)' }}></div>
            <div className="h-[1px] w-8" style={{ background: 'rgba(201,168,76,0.4)' }}></div>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.2s' }}>
          <p className="text-[0.6rem] sm:text-xs font-serif-en font-light tracking-[0.55em] uppercase" style={{ color: '#c9a84c', letterSpacing: '0.55em' }}>
            Wedding Ceremony
          </p>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-8" style={{ animationDelay: '0.25s' }}>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1" style={{ background: 'rgba(201,168,76,0.4)', maxWidth: '60px' }}></div>
            <span style={{ color: 'rgba(201,168,76,0.6)', fontSize: '0.45rem' }}>◆</span>
            <div className="h-[1px] flex-1" style={{ background: 'rgba(201,168,76,0.4)', maxWidth: '60px' }}></div>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-3" style={{ animationDelay: '0.3s' }}>
          <div className="text-4xl sm:text-5xl font-light tracking-widest" style={{ color: '#f0e6c8' }}>
            {data.groomName}
          </div>
          <div className="my-2 flex items-center justify-center">
            <span className="text-sm" style={{ color: '#c9a84c' }}>◆</span>
          </div>
          <div className="text-4xl sm:text-5xl font-light tracking-widest" style={{ color: '#f0e6c8' }}>
            {data.brideName}
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-7" style={{ animationDelay: '0.35s' }}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-10" style={{ background: 'rgba(201,168,76,0.5)' }}></div>
            <span className="text-xs" style={{ color: '#c9a84c' }}>◆</span>
            <div className="h-[1px] w-10" style={{ background: 'rgba(201,168,76,0.5)' }}></div>
          </div>
        </div>

        {dDay > 0 && (
          <div className="animate-fadeInUp opacity-0 mb-6" style={{ animationDelay: '0.38s' }}>
            <div className="inline-block px-6 py-2.5 backdrop-blur-sm" style={{ background: 'rgba(15,35,64,0.7)', border: '1px solid rgba(201,168,76,0.5)' }}>
              <p className="text-xs tracking-[0.4em] uppercase" style={{ color: '#c9a84c', letterSpacing: '0.4em' }}>
                D — {dDay}
              </p>
            </div>
          </div>
        )}

        <div className="animate-fadeInUp opacity-0 mb-3" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl sm:text-2xl font-light tracking-[0.2em]" style={{ color: '#c9a84c', letterSpacing: '0.2em' }}>
            {formatWeddingDateDot(data.weddingDate)}
          </p>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-7" style={{ animationDelay: '0.45s' }}>
          <p className="text-xs sm:text-sm tracking-[0.35em] font-light uppercase" style={{ color: 'rgba(240,230,200,0.6)', letterSpacing: '0.35em' }}>
            {formatWeddingTime(data.weddingTime)}
          </p>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-9" style={{ animationDelay: '0.5s' }}>
          <div className="inline-block px-7 sm:px-9 py-3 sm:py-3.5" style={{ background: 'rgba(15,35,64,0.5)', border: '1px solid rgba(201,168,76,0.45)', backdropFilter: 'blur(8px)' }}>
            <p className="text-xs sm:text-sm tracking-[0.3em] font-light" style={{ color: '#f0e6c8', letterSpacing: '0.3em' }}>
              {data.venueName}{data.hallName ? ` · ${data.hallName}` : ''}
            </p>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-9 px-2" style={{ animationDelay: '0.6s' }}>
          <div className="p-6 sm:p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(12px)' }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1px] w-10" style={{ background: 'rgba(201,168,76,0.4)' }}></div>
              <span className="text-[0.5rem]" style={{ color: '#c9a84c' }}>◆</span>
              <div className="h-[1px] w-10" style={{ background: 'rgba(201,168,76,0.4)' }}></div>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed sm:leading-loose font-light" style={{ color: 'rgba(240,230,200,0.8)' }}>
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
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-[1px] w-10" style={{ background: 'rgba(201,168,76,0.4)' }}></div>
              <span className="text-[0.5rem]" style={{ color: '#c9a84c' }}>◆</span>
              <div className="h-[1px] w-10" style={{ background: 'rgba(201,168,76,0.4)' }}></div>
            </div>
          </div>
        </div>

        <div className="animate-fadeInUp opacity-0 mb-8" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12" style={{ background: 'rgba(201,168,76,0.35)' }}></div>
            <span className="text-base" style={{ color: '#c9a84c' }}>◆</span>
            <div className="h-[1px] w-12" style={{ background: 'rgba(201,168,76,0.35)' }}></div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 animate-bounce">
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" style={{ color: 'rgba(201,168,76,0.7)' }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header3
