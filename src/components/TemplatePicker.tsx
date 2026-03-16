import { Sparkles } from 'lucide-react'

const templates = [
  {
    id: '1',
    name: '미니멀 블랙',
    nameEn: 'Minimal Black',
    description: '깔끔한 흑백 톤의 모던한 청첩장',
    colors: ['#000000', '#333333', '#f5f5f5', '#ffffff'],
    bgClass: 'from-white to-[#f5f5f5]',
    accentColor: '#000000',
    textColor: '#000000',
    previewBg: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
    tag: '심플 & 모던',
  },
  {
    id: '2',
    name: '로즈 가든',
    nameEn: 'Rose Garden',
    description: '은은한 핑크빛의 로맨틱한 청첩장',
    colors: ['#be185d', '#db2777', '#fce7f3', '#fff5f7'],
    bgClass: 'from-[#fff5f7] to-[#fce7f3]',
    accentColor: '#be185d',
    textColor: '#9d174d',
    previewBg: 'linear-gradient(135deg, #fff5f7 0%, #fce7f3 100%)',
    tag: '로맨틱 & 우아',
  },
  {
    id: '3',
    name: '이브닝 엘레강스',
    nameEn: 'Evening Elegance',
    description: '네이비와 골드의 격조 있는 청첩장',
    colors: ['#c9a84c', '#e9d18a', '#162d4a', '#1e3a5f'],
    bgClass: 'from-[#1e3a5f] to-[#0f2340]',
    accentColor: '#c9a84c',
    textColor: '#f0e6c8',
    previewBg: 'linear-gradient(135deg, #1e3a5f 0%, #0f2340 100%)',
    tag: '럭셔리 & 클래식',
  },
]

function TemplatePicker() {
  const handleSelect = (id: string) => {
    window.location.href = `/?t=${id}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#efefef] flex flex-col items-center justify-center px-4 py-16">
      {/* 헤더 */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-10 h-10 text-black" strokeWidth={1.5} />
        </div>
        <p className="text-xs tracking-[0.4em] uppercase font-serif-en text-gray-500 mb-3">
          Mobile Wedding Invitation
        </p>
        <h1 className="text-3xl sm:text-4xl font-light text-black mb-4 tracking-tight">
          템플릿을 선택하세요
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
        </div>
        <p className="text-sm text-gray-500 mt-4 font-light">
          원하시는 디자인 컨셉을 선택하여 청첩장을 미리 확인해 보세요
        </p>
      </div>

      {/* 템플릿 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => handleSelect(template.id)}
            className="group relative bg-white rounded-3xl shadow-xl overflow-hidden border border-black/10 hover:border-black/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left"
          >
            {/* 컬러 프리뷰 영역 */}
            <div
              className="w-full h-40 relative overflow-hidden"
              style={{ background: template.previewBg }}
            >
              {/* 미리보기 미니 UI */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
                <div
                  className="text-xs tracking-widest font-serif-en opacity-60"
                  style={{ color: template.textColor }}
                >
                  WEDDING
                </div>
                <div
                  className="text-2xl font-light"
                  style={{ color: template.textColor }}
                >
                  신랑 ♥ 신부
                </div>
                <div
                  className="flex items-center gap-2"
                >
                  <div
                    className="w-8 h-[1px]"
                    style={{ background: `linear-gradient(to right, transparent, ${template.accentColor})` }}
                  ></div>
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: template.accentColor }}
                  ></div>
                  <div
                    className="w-8 h-[1px]"
                    style={{ background: `linear-gradient(to left, transparent, ${template.accentColor})` }}
                  ></div>
                </div>
                <div
                  className="text-xs font-light opacity-70 mt-1"
                  style={{ color: template.textColor }}
                >
                  2026년 00월 00일
                </div>
              </div>

              {/* 컬러 팔레트 도트 */}
              <div className="absolute bottom-3 right-3 flex gap-1.5">
                {template.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full border-2 border-white/50 shadow-sm"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>

            {/* 카드 정보 */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p
                    className="text-xs tracking-wider font-serif-en mb-0.5"
                    style={{ color: template.accentColor }}
                  >
                    {template.nameEn}
                  </p>
                  <h3 className="text-lg font-medium text-black">{template.name}</h3>
                </div>
                <span
                  className="text-[10px] px-2 py-1 rounded-full font-light mt-0.5"
                  style={{
                    backgroundColor: `${template.accentColor}15`,
                    color: template.accentColor,
                    border: `1px solid ${template.accentColor}30`
                  }}
                >
                  {template.tag}
                </span>
              </div>
              <p className="text-xs text-gray-500 font-light mb-4">{template.description}</p>

              <div
                className="w-full py-2.5 rounded-xl text-xs font-medium text-center transition-all duration-300 group-hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(to right, ${template.accentColor}, ${template.colors[1] || template.accentColor})`,
                  color: template.id === '3' ? '#1e3a5f' : '#ffffff',
                }}
              >
                템플릿 미리보기 →
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* 하단 안내 */}
      <p className="mt-12 text-xs text-gray-400 font-light text-center leading-relaxed">
        모든 텍스트와 사진은 실제 사용 시 커스텀 가능합니다
        <br />
        청첩장 제작 문의: contact@example.com
      </p>
    </div>
  )
}

export default TemplatePicker
