import { useState } from 'react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // 플레이스홀더 이미지 배열 (실제로는 이미지 URL로 변경)
  const images = [
    { id: 1, alt: '사진 1' },
    { id: 2, alt: '사진 2' },
    { id: 3, alt: '사진 3' },
    { id: 4, alt: '사진 4' },
    { id: 5, alt: '사진 5' },
    { id: 6, alt: '사진 6' },
    { id: 7, alt: '사진 7' },
    { id: 8, alt: '사진 8' },
    { id: 9, alt: '사진 9' },
    { id: 10, alt: '사진 10' },
    { id: 11, alt: '사진 11' },
    { id: 12, alt: '사진 12' },
  ]

  const openSlideshow = (index: number) => {
    setCurrentSlide(index)
    setSelectedImage(index)
  }

  const closeSlideshow = () => {
    setSelectedImage(null)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">Our Memories</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              Our Story
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black animate-sparkle"></div>
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
            </div>
          </div>
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openSlideshow(index)}
              className="group relative aspect-square bg-gradient-to-br from-white to-[#fafafa] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-black/20 hover:border-black/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
            >
              {/* 플레이스홀더 컨텐츠 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-3xl sm:text-4xl opacity-40 group-hover:opacity-70 transition-opacity">
                    📷
                  </div>
                  <p className="text-black text-xs sm:text-sm font-light">{image.alt}</p>
                </div>
              </div>

              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 테두리 효과 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 메시지 */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <div className="inline-block bg-white/50 backdrop-blur-md rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg border border-black/15">
            <p className="text-xs sm:text-sm text-gray-700 font-light flex items-center gap-2">
              <span className="text-base">✨</span>
              사진은 추후 업데이트될 예정입니다
            </p>
          </div>
        </div>

        {/* 슬라이드쇼 모달 */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeSlideshow}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeSlideshow}
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
            >
              ✕
            </button>

            {/* 이전 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevSlide()
              }}
              className="absolute left-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
            >
              ‹
            </button>

            {/* 이미지 영역 */}
            <div
              className="w-full max-w-4xl px-16 sm:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-8 sm:p-12 border border-black/30 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl sm:text-8xl">📷</div>
                    <p className="text-black text-lg sm:text-xl font-light">{images[currentSlide].alt}</p>
                    <p className="text-gray-700 text-sm">이미지를 추가하세요</p>
                  </div>
                </div>
              </div>

              {/* 이미지 카운터 */}
              <div className="text-center mt-4 text-white text-sm">
                {currentSlide + 1} / {images.length}
              </div>
            </div>

            {/* 다음 버튼 */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextSlide()
              }}
              className="absolute right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
            >
              ›
            </button>

            {/* 썸네일 리스트 */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-4">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setCurrentSlide(index)
                  }}
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex-shrink-0 transition-all duration-300 ${currentSlide === index
                      ? 'ring-2 ring-white scale-110'
                      : 'opacity-50 hover:opacity-100'
                    }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-white to-[#fafafa] rounded-lg flex items-center justify-center border border-black/20">
                    <span className="text-lg sm:text-2xl">📷</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
