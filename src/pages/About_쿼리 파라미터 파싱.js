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


query parameter을 따로 파싱까지 해야 된다면 번거로울 수도 있는데,

useSearchParams라는 후크를 통해 쿼리스트링을 더욱 쉽게 다룰 수 있음




























*/
