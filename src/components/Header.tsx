import { useState, useEffect } from 'react'

function Header() {
  const [dDay, setDDay] = useState(0)

  useEffect(() => {
    // 예식 날짜 설정 (예: 2026년 6월 15일)
    const weddingDate = new Date('2026-06-15T14:00:00')

    const calculateDDay = () => {
      const today = new Date()
      const difference = weddingDate.getTime() - today.getTime()
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24))
      setDDay(days)
    }

    calculateDDay()
    const interval = setInterval(calculateDDay, 1000 * 60 * 60) // 1시간마다 업데이트

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 overflow-hidden bg-gradient-to-br from-white via-[#fafafa] to-[#f5f5f5]">
      {/* 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 반짝이는 블랙 포인트 */}
        <div className="absolute top-20 left-10 w-2 h-2 sm:w-3 sm:h-3 bg-black rounded-full blur-sm animate-sparkle opacity-20"></div>
        <div className="absolute top-40 right-16 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-700 rounded-full blur-sm animate-sparkle opacity-15" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full blur-sm animate-sparkle opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-gray-700 rounded-full blur-sm animate-sparkle opacity-15" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-60 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full blur-sm animate-sparkle opacity-20" style={{ animationDelay: '0.7s' }}></div>

        {/* 광채 효과 */}
        <div className="absolute top-32 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-10 w-40 h-40 sm:w-48 sm:h-48 bg-gray-400 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative text-center space-y-6 sm:space-y-8 z-10 max-w-2xl mx-auto">
        {/* 장식 아이콘 */}
        <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="text-3xl sm:text-4xl mb-2">✨</div>
        </div>

        {/* 서브 타이틀 */}
        <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] text-black uppercase font-serif-en font-light">
            Wedding Invitation
          </p>
        </div>

        {/* 메인 타이틀 - 신랑신부 이름 */}
        <div className="space-y-4 sm:space-y-6 animate-fadeInUp opacity-0" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-black tracking-tight leading-tight px-4">
            신랑 <span className="text-gradient">♥</span> 신부
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-black animate-sparkle"></div>
            <div className="w-12 sm:w-16 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
          </div>
        </div>

        {/* D-Day 카운터 */}
        {dDay > 0 && (
          <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.35s' }}>
            <div className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-black/10 to-gray-700/10 rounded-full border border-black/30 backdrop-blur-sm">
              <p className="text-black font-medium text-sm sm:text-base">
                D-{dDay}
              </p>
            </div>
          </div>
        )}

        {/* 날짜 및 시간 */}
        <div className="space-y-2 sm:space-y-3 text-black animate-fadeInUp opacity-0 px-4" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl sm:text-2xl md:text-3xl font-light">2026년 00월 00일</p>
          <p className="text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.3em] font-light text-gray-700">오후 00시 00분</p>
        </div>

        {/* 장소 */}
        <div className="animate-fadeInUp opacity-0 px-4" style={{ animationDelay: '0.5s' }}>
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white/60 backdrop-blur-md rounded-full shadow-lg border border-black/20">
            <p className="text-sm sm:text-base text-black tracking-wide font-light">
              장소명, 홀 이름
            </p>
          </div>
        </div>

        {/* 초대 메시지 */}
        <div className="max-w-md mx-auto pt-6 sm:pt-8 animate-fadeInUp opacity-0 px-4" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-black/15">
            <p className="text-xs sm:text-sm leading-relaxed sm:leading-loose text-gray-700 font-light">
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
          </div>
        </div>

        {/* 장식 요소 */}
        <div className="animate-fadeInUp opacity-0" style={{ animationDelay: '0.7s' }}>
          <div className="text-2xl sm:text-3xl">🌸</div>
        </div>

        {/* 스크롤 인디케이터 */}
        <div className="pt-8 sm:pt-12 animate-bounce">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header
