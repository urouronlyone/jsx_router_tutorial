import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  return (
    <div>
        <h1>소개 페이지</h1>
        <p>소개 페이지입니다.</p>
        <p>query parameter: {location.search}</p>
        {/* query parameter는 location.search 값을 통해 조회할 수 있음
            http://localhost:3000/about?detail=true&mode=1 */}
    </div>
  );
};

export default About;

/*

useLocation 후크 사용시 location 객체를 반환하는데,

location 객체는 현재 사용자가 보고있는 페이지의 데이터를 지님
   
pathname: 현재 주소의 경로 (쿼리스트링 제외)
search: 맨 앞의 ? 문자를 포함한 쿼리스트링 값 //http://경로?id=10&count=2022 인경우 'id=10&count=2022'
        URLSearchParams 사용하면 URLSearchParams객체.get("키") 로 쿼리 취득가능
hash: 주소의 # 문자열 뒤의 값 (주로 History API가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용)
state: 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
key: location 객체의 고유 값, 초기에는 default 이고, 페이지가 변경될 때마다 고유의 값이 생성됨

query parameter는 location.search 값을 통해 조회할 수 있음
http://localhost:3000/about?detail=true&mode=1 

query parameter 값이 ?detail=true&mode=1로 표시되고 있음

이 문자열에서 앞에 있는 ?를 지우고, & 문자열로 분리한 뒤 key와 value를 파싱하는 작업을 해야함

이 작업은 보통 npm에서 qs 또는 querystring 패키지를 설치해 처리할 수 있음

query parameter을 따로 파싱까지 해야 된다면 번거로울 수도 있는데,
useSearchParams라는 후크를 통해 쿼리스트링을 더욱 쉽게 다룰 수 있음




























*/
