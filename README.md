# Knowledge Article Rules

이 문서는 이 저장소에서 사용하는 수학 개념 정리 HTML 양식 규칙을 정리한 문서다.

## 1. 파일 역할

- `index.html`
  - 문서 목록과 카테고리를 보여 주는 시작 페이지
- `probability.html`
  - 실제 작성 예시 문서
- `article-template.html`
  - 새 문서를 만들 때 글자만 바꿔 넣으면 되는 기본 껍데기 파일
- `assets/css/index.css`
  - 시작 페이지 전용 스타일 정의
- `assets/css/common-hero.css`
  - `index.html`과 문서 페이지가 함께 쓰는 상단 배너 공통 스타일
- `assets/css/knowledge-article.css`
  - 문서 본문, 좌측 문서 목록, 상단 섹션 네비 스타일 정의
- `assets/js/knowledge-article.js`
  - KaTeX 수식 렌더링, 현재 문서 활성화, 현재 섹션 활성화 처리

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
  - 일반 본문
- `.article-layout`
  - 좌측 문서 목록과 본문 2열 레이아웃
- `.article-sidebar`
  - 좌측 문서 제목 목록
- `.sidebar-nav`, `.sidebar-link`
  - 다른 문서 제목 링크
- `.sidebar-group`, `.sidebar-group-title`
  - 카테고리형 문서 묶음과 소제목
- `.topic-nav`
  - 현재 문서 내부 섹션 이동 네비

## 4. 레이아웃 규칙

- 문서 페이지는 기본적으로 `.article-layout` 안에서 `sidebar + main` 구조를 사용한다.
- 좌측 사이드바는 현재 문서의 `Concept`나 `Section` 목록이 아니라, 다른 문서 제목 목록을 둔다.
- 좌측 문서 목록은 `index.html`과 같은 카테고리 구조를 따른다.
- 카테고리 예시는 `확률론 및 통계학 / 선형 대수학 / 미적분학 / 논문`이다.
- 현재 문서 안의 섹션 이동은 상단 `.topic-nav`에서 처리한다.
- 본문은 `.tistory-post-wrapper` 또는 `.article-container` 사용
- 문서 폭은 지나치게 넓지 않게 유지
- 본문은 무채색 기반, 선명한 검정 제목, 연한 회색 경계선 중심으로 정리
- 전폭 배너가 들어가는 문서는 최상단 공백 없이 바로 시작되게 한다
- 동일한 배너를 여러 페이지가 쓰면 `assets/css/common-hero.css`에서 공통 관리한다
- 좌측 문서 목록은 데스크톱에서만 보이고, 모바일에서는 숨긴다

## 5. HTML 기본 골격

```html
<div class="article-layout">
    <aside class="article-sidebar">
        <div class="sidebar-inner">
            <div class="sidebar-label">Documents</div>
            <h2 class="sidebar-title">문서 카테고리</h2>
            <nav class="sidebar-nav">
                <a class="sidebar-link" data-doc-link href="index.html">홈</a>
                <div class="sidebar-group">
                    <div class="sidebar-group-title">확률론 및 통계학</div>
                    <a class="sidebar-link" data-doc-link href="probability.html">확률 기초</a>
                </div>
            </nav>
        </div>
    </aside>

    <main class="article-main">
        <div class="tistory-post-wrapper">
            <div class="article-topbar">
                <nav class="topic-nav">
                    <a href="#section-1">1. 첫 번째 섹션</a>
                </nav>
            </div>

            <h1 class="post-title">문서 제목</h1>
            <p class="body-text">도입 문단...</p>

            <h2 id="section-1" class="section-title">1. 첫 번째 섹션</h2>
            <h3 class="concept-title">Concept 제목</h3>
            <h4 class="point-title">Point 제목</h4>
            <p class="body-text">설명 문단...</p>
        </div>
    </main>
</div>
```

## 6. Section 규칙

- `Section`은 숫자 구조를 직접 제목에 포함한다.
- 제목 아래에는 얇지 않은 진한 가로 구분선을 둔다.
- 상단 섹션 네비와 연결하려면 모든 `Section`은 고유한 `id`를 가져야 한다.

## 7. Concept 규칙

- `Concept`는 `Section` 아래에서 개념 묶음을 구분하는 중주제다.
- 보통 짧은 제목 한 줄과 이어지는 본문, 수식, 별첨 블록으로 구성한다.
- 별도 박스 래퍼 없이도 흐름이 읽히도록 `h3.concept-title` 자체의 시각적 구분을 사용한다.

## 8. Point 규칙

- `Point`는 `Concept` 아래의 세부 소주제다.
- 보통 `h4.point-title` 뒤에 `p.body-text`가 이어진다.
- 앞에는 작은 점 기호가 자동으로 붙는다.

## 9. 수식 규칙

- 인라인 수식은 `$...$`
- 블록 수식은 `$$...$$`
- 블록 수식은 `.math-box`, `.math-box-label`, `.math-box-content` 구조를 사용한다

## 10. 별첨 규칙

- `중요`: `.special-block.important`
- `요약`: `.special-block.summary`
- `예시`: `.special-block.example`
- `주의`: `.special-block.caution`

## 11. JS 규칙

- 수식 렌더링은 `assets/js/knowledge-article.js`에서 처리
- `.sidebar-nav a[data-doc-link]`는 현재 열려 있는 문서 파일명과 맞춰 `.is-active`를 토글한다
- `.topic-nav a`는 현재 섹션에 맞춰 `.is-active`를 토글한다

## 12. 작성 원칙

- 장식보다 정보 전달 우선
- 제목 위계가 한눈에 보여야 함
- `Section`, `Concept`, `Point`의 역할이 섞이지 않게 유지
- 새 문서를 만들 때는 템플릿을 복제하고 텍스트만 교체
- 긴 문서는 좌측 문서 목록 + 상단 섹션 네비 구조를 기본으로 둔다
- 시작 페이지(`index.html`)는 인라인 CSS/JS 없이 `assets` 파일을 참조해 관리
- 공통 UI는 페이지별 CSS에 중복 정의하지 말고 공용 CSS로 분리한다
