# Knowledge Article Rules

이 문서는 이 저장소에서 사용하는 수학 개념 정리 HTML 구조와 작성 규칙을 정리한 문서다.

## 1. 파일 역할

- `index.html`
  - 문서 목록과 카테고리를 보여 주는 시작 페이지
- `probability.html`
  - 실제 작성 예시 문서
- `article-template.html`
  - 새 문서를 만들 때 복제해서 사용하는 기본 껍데기 파일
- `partials/hero-banner.html`
  - 여러 페이지에서 공통으로 쓰는 상단 배너 partial
- `partials/article-sidebar.html`
  - 문서 페이지에서 공통으로 쓰는 좌측 문서 목록 partial
- `assets/css/index.css`
  - 시작 페이지 전용 스타일 정의
- `assets/css/common-hero.css`
  - 공통 상단 배너 스타일 정의
- `assets/css/knowledge-article.css`
  - 문서 본문, 좌측 문서 목록, 상단 섹션 네비 스타일 정의
- `assets/js/site-shell.js`
  - partial include 로딩, 배너 문구 치환, 현재 문서 링크 활성화 처리
- `assets/js/knowledge-article.js`
  - KaTeX 수식 렌더링, 현재 섹션 활성화 처리

## 2. 문단 우선순위

문서 계층은 아래 순서를 따른다.

- `Title`
- `Section`
- `Concept`
- `Point`
- `Body`

우선순위:

`Title > Section > Concept > Point > Body`

## 3. 기본 클래스 규칙

- `h1.post-title`
  - 문서 전체 제목
- `h2.section-title`
  - 대주제
- `h3.concept-title`
  - 중주제
- `h4.point-title`
  - 소주제
- `p.body-text`
  - 일반 본문, 문단 전체 왼쪽 10px 여백 적용
- `.article-layout`
  - 좌측 문서 목록과 본문 2열 레이아웃
- `.article-sidebar`
  - 좌측 문서 제목 목록 영역
- `.sidebar-inner`
  - sticky 사이드바 내부 래퍼
- `.sidebar-nav`, `.sidebar-link`
  - 다른 문서 제목 링크
- `.sidebar-group`, `.sidebar-group-title`
  - 카테고리형 문서 묶음과 소제목
- `.article-main`
  - 문서 본문 영역
- `.tistory-post-wrapper`
  - 실제 글 본문 래퍼
- `.topic-nav`
  - 현재 문서 내부 섹션 이동 네비
- `.hero-banner`
  - 공통 상단 배너

## 4. 레이아웃 규칙

- 문서 페이지는 `전폭 배너 -> article-layout(sidebar + main)` 순서를 사용한다.
- 상단 배너는 `.article-layout` 바깥에 둔다.
- 좌측 사이드바는 현재 문서의 `Concept`나 `Section` 목록이 아니라, 다른 문서 제목 목록을 둔다.
- 좌측 문서 목록은 `index.html`과 같은 카테고리 구조를 따른다.
- 카테고리 예시는 `확률론 및 통계학 / 선형 대수학 / 미적분학 / 논문`이다.
- 현재 문서 안의 섹션 이동은 상단 `.topic-nav`에서 처리한다.
- 본문은 `.tistory-post-wrapper` 또는 `.article-container`를 사용한다.
- 문서 폭은 지나치게 넓지 않게 유지한다.
- 본문은 무채색 기반, 선명한 검정 제목, 연한 회색 경계선 중심으로 정리한다.
- 좌측 문서 목록은 데스크톱에서만 보이고, 모바일에서는 숨긴다.

## 5. Partial 규칙

- 공통 UI는 페이지마다 직접 복붙하지 않고 partial 파일로 분리한다.
- 페이지에서는 `data-include="partials/..."` 속성으로 partial을 불러온다.
- 배너 제목과 부제는 필요할 때 `data-hero-title`, `data-hero-subtitle`로 덮어쓴다.
- 공통 배너 구조는 `partials/hero-banner.html`에서만 수정한다.
- 공통 문서 목록 구조는 `partials/article-sidebar.html`에서만 수정한다.

## 6. HTML 기본 골격

```html
<body>
    <div
        data-include="partials/hero-banner.html"
        data-hero-subtitle="문서 성격에 맞는 한 줄 설명"
    ></div>

    <div class="article-layout">
        <aside
            class="article-sidebar"
            aria-label="문서 목록"
            data-include="partials/article-sidebar.html"
        ></aside>

        <main class="article-main">
            <div class="tistory-post-wrapper">
                <div class="article-topbar">
                    <nav class="topic-nav" aria-label="주제 네비게이션">
                        <a href="#section-1">1. 첫 번째 섹션</a>
                    </nav>
                </div>

                <span class="meta-text">Category: Mathematics / Probability / Statistics</span>
                <h1 class="post-title">문서 제목</h1>
                <p class="meta-text">작성일: YYYY. MM. DD</p>

                <article>
                    <p class="body-text">도입 문단...</p>

                    <h2 id="section-1" class="section-title">1. 첫 번째 섹션</h2>
                    <div class="concept-group">
                        <h3 class="concept-title">Concept 제목</h3>
                        <h4 class="point-title">Point 제목</h4>
                        <p class="body-text">설명 문단...</p>
                    </div>
                </article>
            </div>
        </main>
    </div>

    <script src="assets/js/site-shell.js"></script>
    <script src="assets/js/knowledge-article.js"></script>
</body>
```

## 7. Section 규칙

- `Section`은 숫자 구조를 직접 제목에 포함한다.
- 제목 아래에는 얇지 않은 진한 가로 구분선을 둔다.
- 상단 섹션 네비와 연결하려면 모든 `Section`은 고유한 `id`를 가져야 한다.

## 8. Concept 규칙

- `Concept`는 `Section` 아래에서 개념 묶음을 구분하는 중주제다.
- 각 `Concept`는 반드시 `.concept-group`으로 감싼다.
- 보통 짧은 제목 한 줄과 이어지는 본문, 수식, 별첨 블록으로 구성한다.
- 별도 박스 래퍼 없이도 흐름이 읽히도록 `h3.concept-title` 자체의 시각적 구분을 사용한다.
- 같은 `Section` 안에서 다음 `Concept`가 이어질 때는 이전 `Concept`보다 더 큰 세로 간격을 둬 개념 경계를 분명히 한다.

## 9. Point 규칙

- `Point`는 `Concept` 아래의 세부 소주제다.
- 보통 `h4.point-title` 뒤에 `p.body-text`가 이어진다.
- `p.body-text`는 기본적으로 문단 전체에 `padding-left: 10px;`가 적용된다.
- 앞에는 작은 점 기호가 자동으로 붙는다.

## 10. 수식 규칙

- 인라인 수식은 `$...$`
- 블록 수식은 `$$...$$`
- 블록 수식은 `.math-box`, `.math-box-label`, `.math-box-content` 구조를 사용한다.
- 수식 자체는 `.math-box-content--formula`로 가운데 정렬하고, 같은 박스 안의 설명문은 `.math-box-content--body`로 좌측 정렬한다.
- 본문 문장 안의 KaTeX 인라인 수식은 약간 크게 표시하고, 분수는 추가로 더 키워 가독성을 맞춘다.
- KaTeX 렌더링을 위해 문서 페이지에는 KaTeX CSS/JS와 `assets/js/knowledge-article.js`를 함께 포함한다.

## 11. 별첨 규칙

- `중요`: `.special-block.important`
- `요약`: `.special-block.summary`
- `예시`: `.special-block.example`
- `주의`: `.special-block.caution`

## 12. JS 규칙

- `assets/js/site-shell.js`는 `data-include`가 붙은 요소를 찾아 partial을 불러온다.
- `assets/js/site-shell.js`는 `.sidebar-nav a[data-doc-link]`에 현재 문서 기준 `.is-active`를 토글한다.
- `assets/js/knowledge-article.js`는 수식 렌더링과 `.topic-nav a`의 현재 섹션 활성화를 담당한다.
- `assets/js/knowledge-article.js`는 `.math-box-content`를 formula/body 역할에 맞게 정리하고, 혼합 박스에는 `data-math-box-layout="mixed"`를 부여한다.
- `assets/js/knowledge-article.js`는 각 `Section` 아래의 `.concept-group`에 `data-concept-index`를 부여해 concept 간격 기준을 맞춘다.
- 문서 페이지에서는 `site-shell.js`를 `knowledge-article.js`보다 먼저 불러온다.

## 13. 작성 원칙

- 장식보다 정보 전달을 우선한다.
- 제목 위계가 한눈에 보여야 한다.
- `Section`, `Concept`, `Point`의 역할이 섞이지 않게 유지한다.
- 새 문서를 만들 때는 `article-template.html`을 복제하고 본문과 메타 정보만 교체한다.
- 새 문서를 추가했으면 필요에 따라 `index.html` 카드와 `partials/article-sidebar.html` 링크도 함께 갱신한다.
- 시작 페이지(`index.html`)는 인라인 CSS/JS 없이 `assets` 파일을 참조해 관리한다.
- 공통 UI는 페이지별 CSS/HTML에 중복 정의하지 말고 공용 CSS와 partial로 분리한다.
- partial include는 `fetch()`를 사용하므로, 브라우저에 따라 로컬 파일 직접 열기보다 간단한 로컬 서버 환경이 더 안정적일 수 있다.
