import { Link, Outlet } from 'react-router-dom';

const Articles = () => {

    return (
        <div>
            <Outlet />
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;

/* ▷ <Link> 컴포넌트


   <Link to="경로">링크 이름</Link>
   
   리액트 라우터를 사용하는 프로젝트에서는
   a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오게 되기 때문에
   HTML에서처럼 a 태그를 바로 사용하여서는 안 됨
   
   Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해
   브라우저 주소의 경로만 바꾸는 기능이 내장되어 있음 */