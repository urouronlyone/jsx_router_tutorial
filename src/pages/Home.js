import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>홈페이지</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <ul>
          <li>
            <Link to="/about">소개 페이지</Link>
          </li>
          <li>
            <Link to="/mypage">마이 페이지</Link>
          </li>
          <li>
            <Link to="/profiles/director">병원장의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/doctor">의사의 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/void">조회되지 않는 프로필</Link>
          </li>
          <li>
            <Link to="articles">게시글 목록</Link>
          </li>
        </ul>
    </div> 
  );
};

export default Home;