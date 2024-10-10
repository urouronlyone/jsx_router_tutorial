import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false; // 로그인 유무에 따라 true라면  /home으로 이동
                            //                   false라면 /login으로 이동

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
                                                    

  }

  return <div>사용자 마이페이지</div>
};

export default MyPage;