import { useState } from 'react'

interface AccountData {
  role: string
  name: string
  bank: string
  account: string
  kakaoPayLink?: string
}

function AccountInfo() {
  const [isGroomOpen, setIsGroomOpen] = useState(false)
  const [isBrideOpen, setIsBrideOpen] = useState(false)
  const [showKakaoPayModal, setShowKakaoPayModal] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState<AccountData | null>(null)

  const groomAccounts: AccountData[] = [
    {
      role: '신랑',
      name: '김건호',
      bank: '카카오뱅크',
      account: '3333-00-0000000',
      kakaoPayLink: 'https://qr.kakaopay.com/example-groom'
    },
    {
      role: '신랑 아버지',
      name: '김아버지',
      bank: 'KB국민은행',
      account: '123456-00-000000'
    },
    {
      role: '신랑 어머니',
      name: '김어머니',
      bank: '신한은행',
      account: '110-123-456789'
    }
  ]

  const brideAccounts: AccountData[] = [
    {
      role: '신부',
      name: '김서희',
      bank: '토스뱅크',
      account: '1000-0000-0000',
      kakaoPayLink: 'https://qr.kakaopay.com/example-bride'
    },
    {
      role: '신부 아버지',
      name: '김아버지',
      bank: '우리은행',
      account: '1002-123-456789'
    },
    {
      role: '신부 어머니',
      name: '김어머니',
      bank: 'NH농협',
      account: '301-0123-4567-89'
    }
  ]

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${label} 계좌번호가 복사되었습니다.`)
    })
  }

  const AccountCard = ({ account }: { account: AccountData }) => (
    <div className="bg-gradient-to-br from-white to-[#fafafa] backdrop-blur-sm rounded-xl p-5 border border-black/30 hover:border-black/60 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-black mb-1 tracking-wide">{account.role}</p>
          <p className="font-medium text-black text-lg">{account.name}</p>
        </div>
        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center border border-black/30">
          <span className="text-xl">💰</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] backdrop-blur-sm rounded-lg p-3 border border-black/20">
          <p className="text-xs text-black mb-1">은행</p>
          <p className="text-sm text-black font-medium">{account.bank}</p>
        </div>

        <div className="bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] backdrop-blur-sm rounded-lg p-3 border border-black/20">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-xs text-black mb-1">계좌번호</p>
              <p className="text-sm font-mono text-black">{account.account}</p>
            </div>
            <button
              onClick={() => copyToClipboard(account.account, account.role)}
              className="px-4 py-2 bg-gradient-to-r from-black to-gray-800 text-white text-xs rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium min-h-[36px]"
            >
              복사
            </button>
          </div>
        </div>
      </div>

      {account.kakaoPayLink && (
        <button
          onClick={() => {
            setSelectedAccount(account)
            setShowKakaoPayModal(true)
          }}
          className="w-full mt-4 py-3 bg-gradient-to-r from-[#fee500] to-[#ffd400] hover:from-[#ffd400] hover:to-[#fee500] transition-all duration-300 text-sm font-medium rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] min-h-[44px]"
        >
          <span className="text-lg">💬</span>
          카카오페이 송금
        </button>
      )}
    </div>
  )

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-3xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-6">
          <div className="inline-block">
            <p className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-black uppercase font-serif-en mb-2">Gift</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-black mb-4">
              마음 전하실 곳
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black animate-sparkle"></div>
              <div className="w-8 sm:w-10 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block bg-white/50 backdrop-blur-md rounded-full px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg border border-black/20">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
              참석이 어려우신 분들을 위해 계좌번호를 기재하였습니다.
              <br />
              <span className="text-black">축하의 마음 감사히 받겠습니다 ✨</span>
            </p>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {/* 신랑측 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-black/30">
            <button
              onClick={() => setIsGroomOpen(!isGroomOpen)}
              className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-white to-[#fafafa] hover:from-[#fafafa] hover:to-white transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-black/30">
                  <span className="text-xl sm:text-2xl">🤵</span>
                </div>
                <span className="font-medium text-black text-base sm:text-lg">신랑측 계좌번호</span>
              </div>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform duration-300 ${isGroomOpen ? 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {isGroomOpen && (
              <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-[#f5f5f5] space-y-4 border-t border-black/20">
                {groomAccounts.map((account, index) => (
                  <AccountCard key={index} account={account} />
                ))}
              </div>
            )}
          </div>

          {/* 신부측 */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-black/30">
            <button
              onClick={() => setIsBrideOpen(!isBrideOpen)}
              className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-white to-[#fafafa] hover:from-[#fafafa] hover:to-white transition-all duration-300 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-black/30">
                  <span className="text-xl sm:text-2xl">👰</span>
                </div>
                <span className="font-medium text-black text-base sm:text-lg">신부측 계좌번호</span>
              </div>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-black transition-transform duration-300 ${isBrideOpen ? 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            {isBrideOpen && (
              <div className="p-5 sm:p-6 bg-gradient-to-br from-white to-[#f5f5f5] space-y-4 border-t border-black/20">
                {brideAccounts.map((account, index) => (
                  <AccountCard key={index} account={account} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 푸터 메시지 */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-r from-transparent via-black to-gray-700"></div>
            <div className="text-xl sm:text-2xl">⭐</div>
            <div className="w-10 sm:w-12 h-[1px] bg-gradient-to-l from-transparent via-black to-gray-700"></div>
          </div>
          <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-black/20 inline-block">
            <p className="text-xs sm:text-sm text-gray-700 leading-loose font-light">
              소중한 당신을 초대합니다
              <br />
              <br />
              <span className="text-black text-sm sm:text-base">감사합니다 ♥</span>
            </p>
          </div>
        </div>
      </div>

      {/* 카카오페이 모달 */}
      {showKakaoPayModal && selectedAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setShowKakaoPayModal(false)}>
          <div className="bg-gradient-to-br from-white to-[#fafafa] rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full border border-black/30" onClick={(e) => e.stopPropagation()}>
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg sm:text-xl font-light text-black">카카오페이 송금</h3>
                <button
                  onClick={() => setShowKakaoPayModal(false)}
                  className="text-gray-700 hover:text-black transition-colors text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2">
                <p className="text-black text-xs sm:text-sm">{selectedAccount.role}</p>
                <p className="text-black text-base sm:text-lg font-medium">{selectedAccount.name}</p>
              </div>

              {/* QR 코드 플레이스홀더 */}
              <div className="bg-white p-4 rounded-xl border border-black/20">
                <div className="aspect-square bg-gradient-to-br from-[#f5f5f5] to-[#fafafa] rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <p className="text-3xl sm:text-4xl">📱</p>
                    <p className="text-xs sm:text-sm text-gray-700">QR 코드 위치</p>
                    <p className="text-[0.65rem] sm:text-xs text-black">실제 사용시 카카오페이 QR 이미지로 교체하세요</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    if (selectedAccount.kakaoPayLink) {
                      window.open(selectedAccount.kakaoPayLink, '_blank')
                    }
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#fee500] to-[#ffd400] hover:from-[#ffd400] hover:to-[#fee500] transition-all duration-300 text-sm font-medium rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] min-h-[44px]"
                >
                  카카오페이로 송금하기
                </button>

                <button
                  onClick={() => {
                    copyToClipboard(selectedAccount.account, selectedAccount.role)
                    setShowKakaoPayModal(false)
                  }}
                  className="w-full py-3 bg-gradient-to-r from-white to-[#fafafa] border border-black/30 text-black rounded-xl hover:border-black/60 transition-all duration-300 hover:scale-[1.02] min-h-[44px]"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AccountInfo
