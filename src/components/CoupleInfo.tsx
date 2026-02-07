function CoupleInfo() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-3xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">Our Love Story</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              신랑 & 신부
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black animate-sparkle"></div>
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {/* 신랑 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-black/20">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="text-5xl sm:text-6xl">🤵</div>

              <div>
                <p className="text-xs sm:text-sm text-black mb-2 tracking-wide">GROOM</p>
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-4">김건호</h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-black">아버지</span>
                  <span>김아버지</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-black">어머니</span>
                  <span>김어머니</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-2 sm:gap-3">
                <a
                  href="tel:010-0000-0000"
                  className="flex-1 max-w-[120px] px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-white to-[#fafafa] border border-black/30 rounded-xl text-xs sm:text-sm text-black hover:border-black/60 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  📞 전화
                </a>
                <a
                  href="sms:010-0000-0000"
                  className="flex-1 max-w-[120px] px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-white to-[#fafafa] border border-black/30 rounded-xl text-xs sm:text-sm text-black hover:border-black/60 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  💬 문자
                </a>
              </div>
            </div>
          </div>

          {/* 신부 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 sm:p-8 border border-black/20">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="text-5xl sm:text-6xl">👰</div>

              <div>
                <p className="text-xs sm:text-sm text-black mb-2 tracking-wide">BRIDE</p>
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-4">김서희</h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-black">아버지</span>
                  <span>김아버지</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-black">어머니</span>
                  <span>김어머니</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-2 sm:gap-3">
                <a
                  href="tel:010-1111-1111"
                  className="flex-1 max-w-[120px] px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-white to-[#fafafa] border border-black/30 rounded-xl text-xs sm:text-sm text-black hover:border-black/60 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  📞 전화
                </a>
                <a
                  href="sms:010-1111-1111"
                  className="flex-1 max-w-[120px] px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-white to-[#fafafa] border border-black/30 rounded-xl text-xs sm:text-sm text-black hover:border-black/60 hover:shadow-md transition-all duration-300 hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  💬 문자
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 인사말 */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-black/15">
            <p className="text-xs sm:text-sm leading-relaxed sm:leading-loose text-gray-700 font-light">
              서로가 마주보며 다져온 사랑을
              <br />
              이제 함께 한 곳을 바라보며
              <br />
              걸어갈 수 있는 큰 사랑으로 키우고자 합니다.
              <br />
              <br />
              저희 두 사람의 새로운 시작을
              <br />
              따뜻한 마음으로 축복해 주시면 감사하겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoupleInfo
