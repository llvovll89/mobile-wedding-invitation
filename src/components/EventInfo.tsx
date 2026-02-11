import { Star, Building2, Train, Bus, ParkingCircle, Map, Navigation } from 'lucide-react'

function EventInfo() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-3xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">When & Where</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              예식 일정
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black animate-sparkle"></div>
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* 날짜 및 시간 카드 */}
          <div className="group relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-black/10 hover:border-black/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            <div className="relative text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Star className="w-12 h-12 sm:w-14 sm:h-14 text-black" strokeWidth={1.5} />
              </div>
              <div className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-black/10 to-gray-700/10 rounded-full border-2 border-black/30 backdrop-blur-sm">
                <p className="text-base sm:text-lg md:text-xl font-light text-black">2026년 00월 00일 오후 00시 00분</p>
              </div>
            </div>
          </div>

          {/* 장소 정보 카드 */}
          <div className="group relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-black/10 hover:border-black/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            <div className="relative text-center space-y-3 sm:space-y-4">
              <div className="flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-12 h-12 sm:w-14 sm:h-14 text-black" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-black">장소명</h3>
              <p className="text-black text-base sm:text-lg font-light">홀 이름</p>
              <div className="pt-2 pb-4">
                <div className="inline-block bg-gradient-to-r from-white to-[#fafafa] backdrop-blur-sm rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-md border border-black/15">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    서울특별시 강남구 테헤란로 123
                    <br />
                    <span className="text-xs text-black">(지번: 역삼동 000-00)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 교통 정보 */}
          <div className="group relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-black/10 hover:border-black/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            <h4 className="relative text-xl sm:text-2xl font-light text-center mb-6 sm:mb-8 text-black flex items-center justify-center gap-3">
              <Navigation className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              오시는 길
            </h4>

            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* 지하철 */}
              <div className="group/item relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-black/10 hover:border-black/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover/item:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center border border-black/20 group-hover/item:border-black/40 transition-colors">
                    <Train className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2} />
                  </div>
                  <p className="font-medium text-black text-sm sm:text-base">지하철</p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">2호선 역삼역<br />3번 출구 도보 5분</p>
                </div>
              </div>

              {/* 버스 */}
              <div className="group/item relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-black/10 hover:border-black/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover/item:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center border border-black/20 group-hover/item:border-black/40 transition-colors">
                    <Bus className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2} />
                  </div>
                  <p className="font-medium text-black text-sm sm:text-base">버스</p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    간선: 146, 340, 360, 740<br />
                    지선: 4318, 3412
                  </p>
                </div>
              </div>

              {/* 주차 */}
              <div className="group/item relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-black/10 hover:border-black/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover/item:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center border border-black/20 group-hover/item:border-black/40 transition-colors">
                    <ParkingCircle className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2} />
                  </div>
                  <p className="font-medium text-black text-sm sm:text-base">주차</p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">건물 지하 1~3층<br />3시간 무료</p>
                </div>
              </div>
            </div>
          </div>

          {/* 지도 */}
          <div className="group relative bg-gradient-to-br from-white via-white/95 to-gray-50/80 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-6 border border-black/10 hover:border-black/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
            <div className="relative w-full h-56 sm:h-64 bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] rounded-2xl flex items-center justify-center overflow-hidden border border-black/10">
              <div className="text-center space-y-2">
                <div className="flex justify-center">
                  <Map className="w-10 h-10 sm:w-12 sm:h-12 text-black" strokeWidth={1.5} />
                </div>
                <p className="text-black font-light text-sm sm:text-base">지도 영역</p>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-2 sm:gap-3 mt-5 sm:mt-6">
              <button className="py-2.5 sm:py-3 px-2 sm:px-4 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-black/20 rounded-2xl text-xs sm:text-sm font-light text-black hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[44px]">
                네이버 지도
              </button>
              <button className="py-2.5 sm:py-3 px-2 sm:px-4 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-black/20 rounded-2xl text-xs sm:text-sm font-light text-black hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[44px]">
                카카오맵
              </button>
              <button className="py-2.5 sm:py-3 px-2 sm:px-4 bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm border border-black/20 rounded-2xl text-xs sm:text-sm font-light text-black hover:bg-gradient-to-br hover:from-black hover:to-gray-800 hover:text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] min-h-[44px]">
                Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventInfo
