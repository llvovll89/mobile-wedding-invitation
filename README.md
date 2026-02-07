# Mobile Wedding Invitation

모바일 환경에 최적화된 디지털 결혼 청첩장 웹 애플리케이션입니다.

## 프로젝트 소개

현대적이고 세련된 디자인의 모바일 청첩장으로, 신랑신부의 정보부터 예식 정보, 갤러리, 계좌 정보까지 결혼식에 필요한 모든 정보를 제공합니다. 반응형 디자인으로 모바일, 태블릿, PC 환경 모두를 지원합니다.

## 주요 기능

### 1. 메인 배너 (Header)

- D-Day 카운터 (실시간 업데이트)
- 초대 메시지
- 세련된 애니메이션 효과

### 2. 신랑신부 정보 (CoupleInfo)

- 신랑신부 프로필
- 부모님 정보
- 전화/문자 바로가기 기능

### 3. 갤러리 (Gallery)

- 사진 슬라이드쇼
- 모달 팝업으로 이미지 확대 보기
- 터치/클릭 네비게이션

### 4. 예식 정보 (EventInfo)

- 예식 날짜, 시간, 장소
- 지도 연동
- 교통 정보 (지하철/버스/주차)

### 5. 공유 기능 (Share)

- URL 링크 복사
- 카카오톡 공유
- Google Calendar 일정 저장
- 네이티브 공유 API 지원

### 6. 계좌 정보 (AccountInfo)

- 신랑/신부측 계좌 번호
- 계좌번호 복사 기능
- 카카오페이 송금 링크
- 아코디언 UI로 깔끔한 정보 표시

## 기술 스택

### Frontend

- **React** 18.2.0 - UI 라이브러리
- **TypeScript** 5.2.2 - 타입 안전성
- **Vite** 5.2.0 - 빌드 도구 및 개발 서버
- **TailwindCSS** 4.1.0 - 유틸리티 기반 스타일링

### Fonts

- **Noto Serif KR** - 한글 본문
- **Cormorant Garamond** - 영문 제목
- **Playfair Display** - 영문 보조

### DevTools

- ESLint - 코드 품질 관리
- TypeScript ESLint - TypeScript 린팅

## 프로젝트 구조

```
mobile-wedding-invitation/
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── Header.tsx           # 메인 배너
│   │   ├── CoupleInfo.tsx       # 신랑신부 정보
│   │   ├── Gallery.tsx          # 갤러리
│   │   ├── EventInfo.tsx        # 예식 정보
│   │   ├── Share.tsx            # 공유 기능
│   │   └── AccountInfo.tsx      # 계좌 정보
│   ├── App.tsx              # 메인 App 컴포넌트
│   ├── main.tsx             # 애플리케이션 진입점
│   ├── index.css            # 글로벌 스타일
│   └── App.css              # App 스타일
├── index.html               # HTML 진입점
├── package.json             # 프로젝트 설정
├── tsconfig.json            # TypeScript 설정
├── vite.config.ts           # Vite 설정
└── README.md                # 프로젝트 문서
```

## 주요 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, PC 모든 화면 크기 지원
- **미니멀 디자인**: 흰색/검은색 기반의 우아한 디자인
- **그라데이션 배경**: 부드러운 색상 전환
- **애니메이션**: fadeInUp, float, sparkle 등 다양한 애니메이션 효과
- **Backdrop Blur**: 현대적인 글래스모피즘 효과
- **터치 친화적**: 모바일 환경 최적화

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 라이선스

이 프로젝트는 개인 프로젝트로, 자유롭게 사용 및 수정 가능합니다.

## 개발자

프로젝트 버전: 0.1.0

---

*Made with React + Vite + TypeScript + TailwindCSS*
