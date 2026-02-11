import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [lightboxSwiper, setLightboxSwiper] = useState<SwiperType | null>(null)

  // 플레이스홀더 이미지 배열 (실제로는 이미지 URL로 변경)
  const images = [
    { id: 1, alt: '사진 1', url: '' },
    { id: 2, alt: '사진 2', url: '' },
    { id: 3, alt: '사진 3', url: '' },
    { id: 4, alt: '사진 4', url: '' },
    { id: 5, alt: '사진 5', url: '' },
    { id: 6, alt: '사진 6', url: '' },
    { id: 7, alt: '사진 7', url: '' },
    { id: 8, alt: '사진 8', url: '' },
    { id: 9, alt: '사진 9', url: '' },
    { id: 10, alt: '사진 10', url: '' },
    { id: 11, alt: '사진 11', url: '' },
    { id: 12, alt: '사진 12', url: '' },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    if (lightboxSwiper) {
      lightboxSwiper.slideTo(index)
    }
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-[#f5f5f5]">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">
              Our Memories
            </p>
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

        {/* Swiper Carousel */}
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="gallery-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image.id}>
                <div
                  onClick={() => openLightbox(index)}
                  className="group relative aspect-square bg-gradient-to-br from-white to-[#fafafa] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-black/20 hover:border-black/50 transition-all duration-500 cursor-pointer"
                >
                  {/* 플레이스홀더 컨텐츠 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2 group-hover:scale-110 transition-transform duration-500">
                      <div className="text-4xl sm:text-5xl opacity-40 group-hover:opacity-70 transition-opacity">
                        📷
                      </div>
                      <p className="text-black text-xs sm:text-sm font-light">
                        {image.alt}
                      </p>
                    </div>
                  </div>

                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* 확대 아이콘 */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">🔍</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={closeLightbox}
              className="fixed top-4 right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 transition-colors z-10 w-12 h-12 flex items-center justify-center"
              aria-label="닫기"
            >
              ✕
            </button>

            {/* Lightbox Swiper */}
            <div
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                initialSlide={selectedImage}
                navigation
                pagination={{ clickable: true }}
                onSwiper={setLightboxSwiper}
                className="lightbox-swiper"
              >
                {images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="flex items-center justify-center p-4">
                      <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl p-8 sm:p-12 border border-black/30 shadow-2xl w-full">
                        <div className="aspect-square bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] rounded-xl flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="text-6xl sm:text-8xl">📷</div>
                            <p className="text-black text-lg sm:text-xl font-light">
                              {image.alt}
                            </p>
                            <p className="text-gray-700 text-sm">
                              이미지를 추가하세요
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>

      {/* Custom Swiper Styles */}
      <style>{`
        .gallery-swiper .swiper-button-next,
        .gallery-swiper .swiper-button-prev {
          color: #000;
          background: rgba(255, 255, 255, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .gallery-swiper .swiper-button-next:after,
        .gallery-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .gallery-swiper .swiper-pagination-bullet {
          background: #000;
          opacity: 0.3;
        }

        .gallery-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .lightbox-swiper .swiper-button-next,
        .lightbox-swiper .swiper-button-prev {
          color: #fff;
        }

        .lightbox-swiper .swiper-button-next:after,
        .lightbox-swiper .swiper-button-prev:after {
          font-size: 32px;
        }

        .lightbox-swiper .swiper-pagination-bullet {
          background: #fff;
        }
      `}</style>
    </section>
  )
}

export default Gallery
