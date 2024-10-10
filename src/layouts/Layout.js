import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate(); // useNavigate 훅 호출
  
  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const goArticles = () => {
    navigate('/articles', { replace: true }); // articles 경로로 이동
/* navigate() 함수에 전달되는 두번째 인수인 옵션 객체 replace: true
   replace 옵션을 true로 설정하면 페이지를 이동할 때
   현재 페이지를 기록(history)에 남기지 않음

   로그인 또는 인증과 관련된 경로 전환과 같이 이전 페이지로 돌아가지 않아야 하는 지점에서는
   계속되는 리다이렉트 문제가 생기지 않도록 사용해야 함  */

  };

  return (
    <div>
        <header style={{ background: 'lightgray', padding: 16, fonrSize: 24 }}>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goArticles}>게시글 목록</button>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;