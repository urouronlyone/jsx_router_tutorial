import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import NotFound from './pages/404/NotFound';
import Home from './pages/Home';
import Login from './pages/loginPage/Login';
import MyPage from './pages/userPage/MyPage';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* Route 컴포넌트의 index라는 porps는 path="/"와 동일한 코드이면서,
            index prop을 사용하면 상위 라우트의 경로와 일치하지만, 그 이후에 경로가 주어지지 않았을 때
            보여지는 라우트를 설정할 수 있으며 path="/"와 동일한 역할을 하며 이를 좀 더 명시적으로 표현하는 */}
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      {/* path parameter는 Route 경로값에 :를 사용하여 설정함 */}
      {/* path parameter가 1개인 경우 경로값에 /profiles/:username처럼 경로에 :를 사용하여 설정 */}
      {/* path parameter는 2개인 경우 경로값에 /profiles/:username/:field와 같은 형태로 설정 */}
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      {/* Articles, Article 페이지 라우트 추가
         게시글 목록 페이지 ArticleList 컴포넌트를 따로 만들어서 각 페이지 컴포넌트에서 사용하는
         기존 방식의 라우트보다는 아래와 같이 중첩된 라우트를 사용하는 것이 좋음

      ※ 중첩 라우트 컴포넌트 지정시 여는 태그의 끝 기호를 알맞게 수정해주어야 함 */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
      {/* 상단의 모든 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 라우팅 */}



    </Routes>

      );
    };
    
    export default App;



/* ▷ <Routes> & <Route> 컴포넌트

   사용자의 브라우저 주소 path(경로)에 따라, 원하는 컴포넌트를 보여주려면
   Route라는 컴포넌트를 통해 라우트 설정을 해주어야 함


   <Route path="주소규칙" element={보여줄 컴포넌트 JSX} />


   Route 컴포넌트는 Routes 컴포넌트로 감싸주어서 사용해야 함 */