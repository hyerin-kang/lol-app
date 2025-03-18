<!-- ####### 헤더 -->

# :game_die: Riot API를 활용한 리그 오브 레전드 정보 앱 만들기
<!-- ####### 프로젝트 소개 -->

<!-- 기간 -->

### :heavy_check_mark: **Development Period**
2025/03/07 ~ 2025/03/18

<br/>
<!-- 테크 스택 -->

### :heavy_check_mark: **Tech Stack**
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-%23FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)



<br/>

<!-- ####### 프로젝트 특징 -->

<!-- 제목 -->
## :sparkles: Project Features

<!-- 특징 하나 -->
### :heavy_check_mark: **ISR 랜더링과 SSR 랜더링**
챔피언 목록 페이지
> - Riot API에서 가져온 챔피언 정보를 보여주며, 사용자 인터페이스(UI)는 Next.js와 TailwindCSS로 구성되어 있습니다.
> - 데이터를 효율적으로 처리하기 위해 ISR 방식을 사용하여 성능을 최적화했습니다.

챔피언 상세 페이지
> - 사용자가 특정 챔피언에 대한 상세 정보를 볼 수 있는 페이지입니다.
> - 항상 최신의 데이터를 불러올수 있도록 Server Side Rendering 방식을 사용 하였습니다.
<br/>

### :heavy_check_mark: **SSG 랜더링**
아이템 목록페이지
> - Riot API에서 아이템 데이터를 가져옵니다.
> - 빌드 시점에 페이지를 정적으로 생성(SSG) 하여 성능을 최적화하였습니다.
<br/>

<!-- 특징 둘 -->
### :heavy_check_mark: **CSR 렌더링**
챔피언 로테이션 페이지
> - Route Handler 사용으로 보안을 강화 하였습니다.
>
> - 전역상태 관리를 위해 Tanstack Query 를 사용하였습니다.
>
<br/>

### :heavy_check_mark: **이미지 최적화**

> - Next.js의 <Image /> 컴포넌트를 사용하여 이미지를 최적화하였습니다.


