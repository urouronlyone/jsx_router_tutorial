import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
        <h1>소개 페이지</h1>
        <p>소개 페이지입니다.</p>
        <p>detail: {detail}</p>
        <p>mode: {mode}</p>
        <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;

/*

query parameter는 location.search 값을 통해 조회할 수 있음
http://localhost:3000/about?detail=true&mode=1 

query parameter 값이 ?detail=true&mode=1로 표시되고 있음

이 문자열에서 앞에 있는 ?를 지우고, & 문자열로 분리한 뒤 key와 value를 파싱하는 작업을 해야함

이 작업은 보통 npm에서 qs 또는 querystring 패키지를 설치해 처리할 수 있음

query parameter를 따로 파싱까지 해야 된다면 번거로울 수도 있는데,
useSearchParams라는 후크를 통해 쿼리 파라미터을 더욱 쉽게 다룰 수 있음


const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

useSearchParams 후크는 배열 타입의 값을 반환하며,
배열의 첫번째 원소는 query parameter를 조회하거나 수정하는 메서드들이 담긴 객체를 반환하며,
get 메서드를 통해 특정 query parameter를 조회할수 있고,
set 메서드를 통해 특정 query parameter를 업데이트할 수 있음

만약 조회시 query parameter이 존재하지 않는다면 null로 조회됨

배열의 두번째 원소는 query parameter을 객체 형태로 업데이트할 수 있는 함수를 반환함

query parameter을 사용할 때 주의할 점은 query parameter을 조회할 때 값은 무조건 문자열 타입이라는 점임

즉, true 또는 false 값을 넣는다면 값을 비교할 때 꼭 'true'와 같이 따옴표로 감싸서 비교해야하고,
숫자를 다룬다면 parseInt를 사용해 숫자 타입으로 변환해야 함




https://i-ten.tistory.com/243



















*/
