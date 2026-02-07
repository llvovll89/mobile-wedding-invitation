function Share() {
  const handleShare = async () => {
    const shareData = {
      title: '신랑♥신부 결혼식',
      text: '저희의 결혼식에 초대합니다.',
      url: window.location.href
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.log('공유 취소됨')
      }
    } else {
      // 모바일 환경이 아닌 경우 URL 복사
      navigator.clipboard.writeText(window.location.href)
      alert('초대장 링크가 복사되었습니다!')
    }
  }

  const handleAddToCalendar = () => {
    const event = {
      title: '신랑♥신부 결혼식',
      description: '저희의 결혼식에 참석해 주세요!',
      location: '장소명, 홀 이름 (서울특별시 강남구 테헤란로 123)',
      start: '20260615T140000',
      end: '20260615T160000'
    }

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`

    window.open(googleCalendarUrl, '_blank')
  }

  const handleKakaoShare = () => {
    // 카카오톡 공유하기 (실제 사용시에는 Kakao SDK 초기화 필요)
    alert('카카오톡 공유하기 기능은 Kakao SDK 설정이 필요합니다.\n현재는 URL 복사로 대체합니다.')
    navigator.clipboard.writeText(window.location.href)
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-black/20">
          <h3 className="text-xl sm:text-2xl font-light text-center mb-5 sm:mb-6 text-black">
            초대장 공유하기
          </h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <button
              onClick={handleShare}
              className="flex flex-col items-center gap-2 sm:gap-3 py-5 sm:py-6 bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-sm border-2 border-black/30 rounded-xl text-xs sm:text-sm font-light text-black hover:shadow-xl hover:border-black/60 hover:bg-black/10 transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[110px]"
            >
              <span className="text-2xl sm:text-3xl">📤</span>
              <span>공유하기</span>
            </button>

            <button
              onClick={handleAddToCalendar}
              className="flex flex-col items-center gap-2 sm:gap-3 py-5 sm:py-6 bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-sm border-2 border-black/30 rounded-xl text-xs sm:text-sm font-light text-black hover:shadow-xl hover:border-black/60 hover:bg-black/10 transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[110px]"
            >
              <span className="text-2xl sm:text-3xl">📅</span>
              <span>캘린더 저장</span>
            </button>

            <button
              onClick={handleKakaoShare}
              className="flex flex-col items-center gap-2 sm:gap-3 py-5 sm:py-6 bg-gradient-to-br from-[#fee500]/20 to-[#ffd400]/20 backdrop-blur-sm border-2 border-[#fee500]/40 rounded-xl text-xs sm:text-sm font-medium text-[#3c1e1e] hover:shadow-xl hover:border-[#fee500]/70 hover:bg-[#fee500]/30 transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[110px]"
            >
              <span className="text-2xl sm:text-3xl">💬</span>
              <span>카카오톡</span>
            </button>

            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('링크가 복사되었습니다!')
              }}
              className="flex flex-col items-center gap-2 sm:gap-3 py-5 sm:py-6 bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-sm border-2 border-black/30 rounded-xl text-xs sm:text-sm font-light text-black hover:shadow-xl hover:border-black/60 hover:bg-black/10 transition-all duration-300 hover:scale-105 min-h-[100px] sm:min-h-[110px]"
            >
              <span className="text-2xl sm:text-3xl">🔗</span>
              <span>링크 복사</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Share
