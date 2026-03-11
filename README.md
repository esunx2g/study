# Knowledge Article Rules

이 문서는 이 저장소에서 사용하는 수학 개념 정리 HTML 양식 규칙을 정리한 문서다.

## 1. 파일 역할

- `index.html`
  - 문서 목록과 카테고리를 보여 주는 시작 페이지
- `probability.html`
  - 실제 작성 예시 문서
- `assets/css/index.css`
  - 시작 페이지 전용 스타일 정의
- `assets/css/knowledge-article.css`
  - 공통 스타일 정의
- `assets/js/knowledge-article.js`
  - KaTeX 수식 렌더링 스크립트

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

## 4. 레이아웃 규칙

- 최상위 래퍼는 `.tistory-post-wrapper` 또는 `.article-container` 사용
- 문서 폭은 지나치게 넓지 않게 유지
- 본문은 무채색 기반, 선명한 검정 제목, 연한 회색 경계선 중심으로 정리

## 5. HTML 기본 골격

```html
<div class="tistory-post-wrapper">
    <h1 class="post-title">[확률론 기초] 모집단부터 베이즈 정리까지 정리</h1>

    <p class="body-text">
        도입 문단...
    </p>

    <h2 class="section-title">1. 통계적 추론의 출발점</h2>
    <p class="body-text">
        섹션 설명...
    </p>

    <h3 class="concept-title">모집단, 모수, 그리고 생성 모델</h3>
    <div class="special-block summary">
        <span class="special-block-title">주요 용어 정의</span>
        <ul>
            <li>항목...</li>
        </ul>
    </div>

    <h4 class="point-title">확률 변수</h4>
    <p class="body-text">설명 문단...</p>

    <div class="math-box">
        <div class="math-box-label">DEFINITION</div>
        <div class="math-box-content">
            $$X : \Omega \rightarrow \mathbb{R}$$
        </div>
    </div>
</div>
```

## 6. Section 규칙

- `Section`은 숫자 구조를 직접 제목에 포함한다.
- 제목 아래에는 얇지 않은 진한 가로 구분선을 둔다.
- 예:
  - `1. 통계적 추론의 출발점`
  - `2. 확률과 확률변수의 수학적 정의`
  - `3. 이산 확률 분포 vs 연속 확률 분포`

## 7. Concept 규칙

- `Concept`는 `Section` 아래에서 개념 묶음을 구분하는 중주제다.
- 보통 짧은 제목 한 줄과 이어지는 본문, 수식, 별첨 블록으로 구성한다.
- 별도 박스 래퍼 없이도 흐름이 읽히도록 `h3.concept-title` 자체의 시각적 구분을 사용한다.

## 8. Point 규칙

- `Point`는 `Concept` 아래의 세부 소주제다.
- 보통 `h4.point-title` 뒤에 `p.body-text`가 이어진다.
- 앞에는 작은 점 기호가 자동으로 붙는다.

예:

```html
<h4 class="point-title">누적 질량 함수 (CMF)</h4>
<p class="body-text">
    특정 값보다 작거나 같은 확률을 모두 더한 함수입니다.
</p>
```

## 9. 수식 규칙

수식은 인라인 수식과 블록 수식으로 나눈다.

### 인라인 수식

- 표기: `$...$`
- 예: `$P(A)$`

### 블록 수식

- 표기: `$$...$$`
- `.math-box` 안에 배치
- 라벨은 `.math-box-label`
- 실제 식은 `.math-box-content`

예:

```html
<div class="math-box">
    <div class="math-box-label">FORMULA</div>
    <div class="math-box-content">
        $$P(A|B) = \frac{P(A \cap B)}{P(B)}$$
    </div>
</div>
```

원칙:

- 블록 수식은 흰 배경 + 연한 회색 테두리 + 라벨 구조 사용
- 과한 색상 장식은 피하고, 정의/정리/성질처럼 독립된 식만 박스로 분리

## 10. 별첨 규칙

별첨 블록은 아래 네 종류만 사용한다.

### 1. 중요

- class: `.special-block important`
- 목적: 반드시 기억해야 할 핵심 메시지 강조
- 표시: `◆ 중요)`

### 2. 요약

- class: `.special-block summary`
- 목적: 정의, 구성 요소, 요약 정리
- 표시: `☰ 요약)`

### 3. 예시

- class: `.special-block example`
- 목적: 직관적 상황, 계산 예시, 적용 사례 설명
- 표시: `✎ 예시)`

### 4. 주의

- class: `.special-block caution`
- 목적: 오해하기 쉬운 부분, 예외, 해석상 주의 전달
- 표시: `⚠ 주의)`

공통 규칙:

- 제목은 `.special-block-title`
- 둥근 박스 + 좌측 두꺼운 강조선 구조 사용
- `Concept`보다 더 강한 시각 구분을 가져도 됨

## 11. JS 규칙

- 수식 렌더링은 `assets/js/knowledge-article.js`에서 처리
- `renderMathInElement(document.body, ...)` 사용
- 구분자는 아래 두 개만 허용
  - `$$...$$`
  - `$...$`

## 12. 작성 원칙

- 장식보다 정보 전달 우선
- 제목 위계가 한눈에 보여야 함
- `Section`, `Concept`, `Point`의 역할이 섞이지 않게 유지
- `Section`과 `Section` 사이는 넉넉한 상단 여백으로 강하게 구분
- 수식은 꼭 필요한 곳에만 박스로 분리
- 별첨은 `중요 / 요약 / 예시 / 주의` 네 형식만 사용
- 새 문서를 만들 때는 이 구조를 그대로 복제하고 내용만 교체
- 시작 페이지(`index.html`)는 인라인 CSS/JS 없이 `assets` 파일을 참조해 관리
