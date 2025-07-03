# LG CNS 인수확인서 생성 프로그램

## 📋 프로그램 소개
LG CNS 자산 납품 리스트를 기반으로 인수확인서를 자동 생성하는 웹 애플리케이션입니다.

## 🚀 사용 방법

### 1. GitHub Pages로 접속
- 배포된 사이트: `https://[username].github.io/[repository-name]/`

### 2. 엑셀 파일 업로드
1. "파일 선택" 버튼을 클릭하여 엑셀 파일을 선택합니다
2. LG CNS 자산 납품 리스트 형식의 엑셀 파일을 업로드하세요

### 3. 인수확인서 생성
1. 업로드가 완료되면 자동으로 데이터가 처리됩니다
2. "인수확인서 다운로드" 버튼을 클릭하여 PDF를 생성합니다

## 📝 지원 기능
- ✅ 엑셀 파일 자동 파싱
- ✅ 타이틀 행 자동 제외 (첫 번째, 두 번째 행)
- ✅ 빈 행 자동 필터링
- ✅ PDF 자동 생성 및 다운로드
- ✅ 반응형 웹 디자인

## 🔧 기술 스택
- HTML5
- CSS3
- JavaScript (Vanilla)
- SheetJS (엑셀 파일 처리)
- jsPDF (PDF 생성)

## 📋 엑셀 파일 형식
프로그램은 다음과 같은 컬럼을 가진 엑셀 파일을 처리합니다:
- 순번
- 자산번호
- 자산명
- 모델명
- 제조사
- 기타 관련 정보

## 🚀 GitHub Pages 배포 방법

### 1. 저장소 생성
```bash
git clone [repository-url]
cd [repository-name]
```

### 2. GitHub Pages 활성화
1. GitHub 저장소 → Settings
2. Pages 섹션으로 이동
3. Source를 "Deploy from a branch" 선택
4. Branch를 "main" 선택
5. Save 클릭

### 3. 접속
- 몇 분 후 `https://[username].github.io/[repository-name]/`로 접속 가능

## 📞 문의사항
프로그램 사용 중 문제가 발생하면 Issues 탭에서 문의해주세요.

---
*LG CNS 인수확인서 생성 프로그램 v2.0*