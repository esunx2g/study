# Knowledge Article Rules

이 문서는 이 저장소에서 사용하는 지식 정리 HTML 템플릿 규칙을 정리한 문서다.

## 1. 파일 역할

- `probability.html`
  - 실제 작성 예시 문서
- `assets/css/knowledge-article.css`
  - 공통 스타일 정의
- `assets/js/knowledge-article.js`
  - KaTeX 인라인 수식 렌더링 스크립트

## 2. 기본 문서 구조

문서 계층은 아래 순서를 따른다.

- `Title`
- `Section`
- `Concept`
- `Point`
- `Body`

우선순위:

`Title > Section > Concept > Point > Body`

## 3. 문단 기호 규칙

- `Title`
  - 기호 없음
  - 예: `확률 기초`
- `Section`
  - `1. 2. 3.` 형식
  - 보통 `h2`
  - 예: `1. 확률과 확률변수`
- `Concept`
  - `① ② ③` 형식
  - 보통 `h3`
  - 예: `① Population (모집단)`
- `Point`
  - `-` 형식
  - 보통 `ul`, `ol` 내부 항목
- `Body`
  - 기호 없음
  - 일반 `p`

## 4. HTML 기본 골격

```html
<main class="article-container">
    <div class="article-topbar">
        <nav class="topic-nav" aria-label="주제 네비게이션">
            <a href="#section-1">1. 확률과 확률변수</a>
            <span class="topic-separator">|</span>
            <a href="#section-2">2. 확률 분포</a>
        </nav>
    </div>

    <header>
        <span class="meta-text">Category: Mathematics / Probability / Statistics</span>
        <h1>확률 기초</h1>
        <p class="meta-text">작성일: 2026. 03. 12</p>
    </header>

    <article>
        <h2 id="section-1">1. 확률과 확률변수</h2>
        <h3>① Population (모집단)</h3>
        <p>설명 문단...</p>
    </article>

    <footer class="footer">문서 끝.</footer>
</main>
```

## 5. id 규칙

기본적으로 `Section`에만 `id`를 부여한다.

- `Section 1` -> `id="section-1"`
- `Section 2` -> `id="section-2"`
- `Section 3` -> `id="section-3"`
- `Section 4` -> `id="section-4"`

원칙:

- 상단 네비게이션은 `Section` 기준으로만 이동
- `Concept`, `Point`, `Body`에는 기본적으로 `id`를 붙이지 않음
- 특정 개념으로 직접 링크가 필요할 때만 예외적으로 `Concept`에 `id` 부여 가능

예:

```html
<a href="#section-2">2. 확률 분포</a>
<h2 id="section-2">2. 확률 분포</h2>
```

## 6. 공통 class 규칙

### 레이아웃

- `.article-container`
  - 문서 전체 폭과 여백
  - 현재 기본 최대 폭은 `720px`
  - 문서 집중도를 위해 비교적 좁은 읽기 폭 유지
- `.article-topbar`
  - 우상단 네비게이션 정렬 영역
- `.topic-nav`
  - 섹션 이동 링크 묶음
- `.topic-separator`
  - 네비게이션 구분자 `|`
- `.meta-text`
  - 카테고리, 작성일 같은 메타 텍스트
- `.footer`
  - 문서 하단 영역

### 텍스트 계층

- `h1`
  - Title
- `h2`
  - Section
- `h3`
  - Concept
- `p`
  - Body

### 수식

- `.math-box`
  - 독립 수식을 넣는 회색 박스

### 보조 블록

- `.note-block`
  - 강조 블록 공통 베이스
- `.note-block-title`
  - 강조 블록 제목
- `.note-block.is-important`
  - 중요 포인트 블록
- `.note-block.is-example`
  - 예시 블록
- `.note-block.is-caution`
  - 주의 블록
- `.note-list-block`
  - 나열 형식 블록
- `.note-list-title`
  - 나열 형식 블록 제목
- `.simple-list`
  - 번호형 리스트 스타일

## 7. 별첨 / 강조 블록 규칙

문서에서 사용하는 별첨 블록은 네 종류다.

### 1. 중요 포인트

- 목적: 핵심 개념 강조
- class: `.note-block is-important`
- 형태: 좌측 검은 직선 + 제목 + 설명

예:

```html
<div class="note-block is-important">
    <span class="note-block-title">중요 포인트</span>
    <p style="margin-bottom: 0;">핵심 설명...</p>
</div>
```

### 2. 나열

- 목적: 이유, 활용처, 비교 포인트를 번호로 정리
- class: `.note-list-block`
- 제목 class: `.note-list-title`
- 내부 리스트: `ol.simple-list`

예:

```html
<div class="note-list-block">
    <span class="note-list-title">왜 중요한가</span>
    <ol class="simple-list">
        <li><strong>모수 추정:</strong> 최대우도추정의 핵심 기준이 됩니다.</li>
        <li><strong>모형 비교:</strong> 어떤 가정이 데이터를 더 잘 설명하는지 판단할 수 있습니다.</li>
    </ol>
</div>
```

### 3. 예시

- 목적: 숫자, 상황, 적용 사례 설명
- class: `.note-block is-example`
- 형태: 좌측 파란 직선 + 제목 + 설명

예:

```html
<div class="note-block is-example">
    <span class="note-block-title">예시</span>
    <p style="margin-bottom: 0;">
        동전을 한 번 던질 때 앞면이면 1, 뒷면이면 0이 되도록 확률변수 X를 정의할 수 있다.
    </p>
</div>
```

### 4. 주의

- 목적: 헷갈리기 쉬운 점, 예외, 오해 방지
- class: `.note-block is-caution`
- 형태: 좌측 빨간 직선 + 제목 + 설명

예:

```html
<div class="note-block is-caution">
    <span class="note-block-title">주의</span>
    <p style="margin-bottom: 0;">
        연속형 확률변수에서는 한 점에서의 확률을 직접 면적으로 해석하지 않는다.
    </p>
</div>
```

## 8. 수식 규칙

수식은 두 가지 방식만 사용한다.

### 인라인 수식

- 문장 중간에 삽입
- 예: `$P(A)$`

### 블록 수식

- 독립 식은 `.math-box` 사용
- 회색 배경 박스 안에 중앙 정렬

예:

```html
<div class="math-box">
    $\mathbb{E}[X] = \sum_i x_i P(x_i)$
</div>
```

원칙:

- 설명문 안 짧은 수식은 박스로 처리하지 않음
- 독립적으로 강조할 식만 `.math-box` 사용

## 9. 상단 네비게이션 규칙

- 우상단 네비게이션은 문서 내 주요 `Section`으로 이동
- 구분자는 `|`
- 새 문서를 만들 때도 동일한 형식 유지

예:

```html
<nav class="topic-nav" aria-label="주제 네비게이션">
    <a href="#section-1">1. 확률과 확률변수</a>
    <span class="topic-separator">|</span>
    <a href="#section-2">2. 확률 분포</a>
</nav>
```

## 10. 작성 원칙

- 장식보다 정보 전달 우선
- 제목 위계가 한눈에 보여야 함
- 읽기 집중도를 위해 과도하게 넓은 본문 폭은 피함
- 문서마다 `Section` 구조를 최대한 동일하게 유지
- 블록 수식만 회색 박스로 처리
- 별첨은 `중요 포인트 / 나열 / 예시 / 주의` 네 형식만 사용
- 새 HTML 문서를 만들 때는 기존 구조를 복제하고 내용만 교체
