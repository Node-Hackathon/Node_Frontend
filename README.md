<div align="center">
<h2>[멋쟁이 사자처럼 12기 해커톤] 치매 관리 및 예방 교육 서비스 </h2>
<img width="758" alt="image" src="https://github.com/user-attachments/assets/b9cbe041-041f-4070-b236-28638c21882e"><br />
우리 서비스는 치매 예방을 목표로 하는 인지 강화 및 교육 활동을 제공합니다. 자체적으로 개발한 게임과 AI 기술을 통해 사용자의 인지 기능을 자극하고 기억력 및 문제 해결 능력을 향상시키는 것을 목표로 합니다.
</div>

## 프로젝트 설명
- 사용자의 인지 기능을 자극하는 두 가지 유형의 게임을 제공합니다. 이 게임들은 기억력과 집중력을 향상시키기 위해 설계되었습니다.
- AI 기술을 활용한 교육 서비스를 통해 사용자가 다양한 방식으로 학습하고 문제를 해결할 수 있도록 돕습니다.
- 체크리스트 기능을 통하여 사용자의 치매 증상을 진단받을 수 있습니다.
- 지역별 센터 정보를 한 눈에 알아볼 수 있게 리스트 형태로 제공되고, 해당 사이트로 접속할 수 있습니다.
- 하루 일기 기능을 통해 매일의 기억을 되돌아볼 수 있습니다.
- 사용자가 진행했던 게임과 AI 교육 결과의 그래프를 제공하여 날짜 별로 결과를 비교할 수 있습니다.

## 개발 환경

#### Front :
- Tool : Visual Studio Code
- Library : React ^18.3.1
- Package Manager : NPM
- CLI : Create React App

#### Back-End :
- IDE : IntelliJ
- DataBase : MariaDB
- FrameWork : SpringBoot
- Build : Maven

#### AI :
- IDE : VScode
- FrameWork : Pytorch(Yolov5)
- Data Analysis and Visualization: Pandas, NumPy, Matplotlib
- Computer Vision: OpenCV, YOLOv5
- Environment Management: Anaconda
  
#### 협업 툴 :
- Git
- GitHub
- Notion
  
#### 인프라 :
- Server : AWS EC2(Ubuntu)
- Storage : AWS S3
- DataBase : AWS RDS (MariaDB)
- Container : Docker

## 기술 스택
#### Front :
- Language : TypeScript
- CSS : Styled-components
- State Management : rtk-query
- Routing : React Router v6
- Linter : esLint
- Code Formatter : Prettier

#### Back-End :
- Java 11
- SpringBoot 2.5.6
- Spring Data JPA
- Spring Security
- Restful API
- QueryDsl
- JWT
- Swagger
- JUnit

#### AI :
- Pytorch
- FastAPI
- Pandas
- Matplotlib
- Yolov8

#### DataBase
- MariaDB
- Redis
  
## 팀원 구성
| **김유성 - 팀장** | **이민욱** | **황형진** | **최지은** | **김영훈** |
| :------: |  :------: | :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/107562291?v=4" height=150 width=150> <br/> @kimys5278](https://github.com/kimys5278) | [<img src="https://avatars.githubusercontent.com/u/31334541?v=4" height=150 width=150> <br/> @leeminuk](https://github.com/leeminuk) | [<img src="https://avatars.githubusercontent.com/u/80672495?v=4" height=150 width=150> <br/> @HwangHyeongjin](https://github.com/HwangHyeongjin) | [<img src="https://avatars.githubusercontent.com/u/122079153?v=4" height=150 width=150> <br/> @Cjieun](https://github.com/Cjieun) | [<img src="https://avatars.githubusercontent.com/u/145416076?v=4" height=150 width=150> <br/> @eth220421](https://github.com/eth220421) | 
| 백엔드</br>AI | 프론트</br>백엔드 | 백엔드 | 프론트 | 프론트 |


## 기능 정리
- 일반 로그인
- 치매 진단 체크리스트
- 상담 센터 리스트 조회 및 센터 접속 리스트
- 오늘 일기 기능 - 매일의 일기를 작성하여 그날의 기억을 간직할 수 있습니다.
- AI 구성놀이 - 4D블럭을 이용한 구성놀이 후 이미지처리
- AI 블록쌓기 - 4D블럭을 이용한 블로쌓기 후 블록 조합 인식 및 정확도 도출
- 숫자 맞추기 게임 - 단계 별 시간 제한을 둔 기억력 강화 게임
- 카드 맞추기 게임 - 동일한 카드를 맞추는 기억력 강화 게임
- 게임 결과 리스트 반환
  
<img width="688" alt="image" src="https://github.com/user-attachments/assets/5a1f1843-7157-4a4b-a070-287e2968a527">

<img width="680" alt="image" src="https://github.com/user-attachments/assets/3585aea9-131e-46b6-9da1-d0301d8d6f42">

<img width="1252" alt="image" src="https://github.com/user-attachments/assets/8885dfc6-1879-4668-8f85-d8791c9eada9">

## 팀원 역할 분담

### 김유성 - 백엔드 / AI
- 회원가입/로그인 : CoolSms와 Redis를 이용한 문자인증 + SpringSecurity 와 Jwt를 이용한 일반 로그인
- 블록 쌓기 AI : Yolov8 모델을 이용하여 데이터 학습 후 FastApi 제작
- 구성 놀이 이미지처리 : OpenCV를 이용하여 구성 놀이 교육 이미지 처리 및 FastApi 제작
- WebClient를 이용하여 스프링부트와 FastApi 연결
  <img width="476" alt="image" src="https://github.com/user-attachments/assets/911784f9-43ae-4b04-bb33-ae06e01985aa">
- 센터 리스트 크롤링 후 디비에 저장
- AI 서버 배포
- 백 배포
- 프론트 배포

### 최지은 - 프론트
- **프로젝트 구조 설계 및 협업 준비**
  - **styled-components**를 통해 글로벌 스타일 적용 및 자주 사용하는 스타일 코드 분리
  - **Prettier**와 **esLint** 설정 및 적용, 코드 품질 관리
  - **rtk-query**의 base 코드 작성 및 **Navigation** 기능 구현
- **UI/UX 디자인 및 애니메이션**
  - 전반적인 디자인 작업과 애니메이션 적용을 통해 사용자 경험을 개선
  - Onboarding 화면, Progressbar, Loading, Graph 컴포넌트에 애니메이션 적용
- **API 및 상태 관리**
  - **rtk-query**를 사용하여 API 요청 및 응답 관리
  - **Redux**를 이용한 accessToken 관리 및 자동 로그아웃 기능 구현
  - 공통 컴포넌트를 개발하여 코드의 유지보수성을 높임
  - **ReactModal**과 **Redux**를 사용하여 모달창을 관리하여 여러 페이지에서 쉽게 재사용 가능하도록 컴포넌트화
- **로그인/회원가입**
  - 로그인/회원가입 UI/UX와 API 연동
  - **React-hook-form**을 사용하여 유효성 검사 처리, 실시간 오류 메시지를 통해 사용자 경험 개선
  - 인증번호 발송 및 재전송, 인증 로직 구현
- **블록 쌓기 및 구성 놀이 페이지 개발**
  - 블록 쌓기와 구성 놀이의 UI/UX 구현 및 API 연동
  - 이미지 전송 후 **rtk-query**를 통해 API 연동하는 동안 **Loading**페이지를 표시하고, 성공 시 결과를 이미지와 그래프로 출력
- **치매 진단 및 일기 기록 페이지 개발**
  - 여러 개의 질문을 넘기면 답변하는 치매 진단 페이지와 일기 기록 페이지 개발
  - **Progressbar**로 상태를 표시하고, **Redux**와 **localStorage**를 통해 중단 후 재접속 시 답변 정보를 복구할 수 있도록 구현
- **그 외 게임 개발**
  - 자바스크립트로 숫자를 순서대로 맞추는 게임 구현
  - 게임 결과를 이전 결과와 비교하여 그래프로 시각화
  - 각 게임에 대한 설명서 페이지 UI/UX 구현
- **상담 센터 리스트 페이지 개발**
  - 배열 데이터를 **map**으로 렌더링하여 보여주는 기능 개발

### 김영훈 - 프론트
- **공통 컴포넌트 개발**
  - 모든 페이지에서 사용되는 Header, Footer, Side Navigation 컴포넌트 개발
  - styled-components를 활용하여 코드 효율성 향상
  - "position: sticky" 속성과 @keyframe & animation을 적용해 사용자 경험 개선
- **랜딩 페이지 개발**
  - 여러 페이지의 기능을 한눈에 파악할 수 있는 메인 페이지 개발
  - 주요 기능 설명 및 이동 버튼을 통해 사용자 CTA(Call-To-Action) 유도
- **마이 페이지 개발**
  - 사용자 개인화된 경험 제공 (이름이 포함된 상단 웰컴 메시지)
  - 제공 기능: 내 정보, 보호자 정보, 진단 결과, 게임 누적 결과, 로그아웃, 탈퇴 등
- **내 정보 페이지 개발**
  - 사용자 정보를 확인 및 수정할 수 있는 페이지
  - 읽기 모드 ↔ 수정 모드 토글 방식 적용으로 코드 효율성 및 페이지 중복 방지
  - Daum 우편번호 API를 활용해 유효하지 않은 주소 입력 방지
- **보호자 페이지 개발**
  - 긴급 상황에 대비한 보호자 정보 제공
  - 읽기 모드 ↔ 수정 모드 토글 방식으로 효율적 페이지 개발
  - Daum 우편번호 API를 통한 정보 정확성 향상
- **진단 결과 페이지 개발**
  - 날짜별 치매 진단 결과 제공
  - map() 함수로 데이터 바인딩 처리
  - isFirst, isLast 상태를 통해 Summary의 최상단, 최하단 borderRadius 조건부 적용
- **게임 누적 결과 페이지 개발**
  - 게임 종류별 누적 결과를 시각적으로 제공
  - map() 함수로 데이터 바인딩
  - 특정 결과 클릭 시 Modal 창을 통해 상세 결과(이미지) 제공
- **일기장 페이지 개발**
  - 날짜별 사용자의 일기 확인 가능
- **NoResult 컴포넌트 개발**
  - 보호자, 진단 결과, 게임 누적 결과, 일기 등의 데이터가 없을 경우 출력
  - 사용자 혼란을 방지하는 메시지 및 시각적 요소 제공
- **프론트엔드 배포 및 도메인 설정**
  - Docker와 Nginx를 활용한 이미지 생성 및 컨테이너 실행
  - 도메인 구매 및 IP 주소 연결을 통한 배포 환경 구성
