import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      {/* path parameter는 Route 경로값에 :를 사용하여 설정함 */}
      {/* path parameter가 1개인 경우 경로값에 /profiles/:username처럼 경로에 :를 사용하여 설정 */}
      {/* path parameter는 2개인 경우 경로값에 /profiles/:username/:field와 같은 형태로 설정 */}

      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:id" element={<Article />} />
      {/* Articles, Article 페이지 라우트 추가 */}

      {/* ArticleList 컴포넌트를 따로 만들어서 각 페이지 컴포넌트에서 사용하는
          기존 방식의 라우트보다는 아래와 같이 중첩된 라우트를 사용하는 것이 좋음 */}

    </Routes>
  );
}

export default App;



/* ▷ <Routes> & <Route> 컴포넌트

   사용자의 브라우저 주소 path(경로)에 따라, 원하는 컴포넌트를 보여주려면
   Route라는 컴포넌트를 통해 라우트 설정을 해주어야 함


   <Route path="주소규칙" element={보여줄 컴포넌트 JSX} />


   Route 컴포넌트는 Routes 컴포넌트로 감싸주어서 사용해야 함



   ▷ <Link> 컴포넌트


   <Link to="경로">링크 이름</Link>
   
   리액트 라우터를 사용하는 프로젝트에서는
   a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오게 되기 때문에
   HTML에서처럼 a 태그를 바로 사용하여서는 안 됨
   
   Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해
   브라우저 주소의 경로만 바꾸는 기능이 내장되어 있음 */