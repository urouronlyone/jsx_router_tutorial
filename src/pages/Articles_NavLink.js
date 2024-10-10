import { NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    }
    
    // const active = {
    //     color: 'green',
    //     fontSize: 21,
    // }

    return (
        <div>
            <Outlet />
            <ul>
                <li>
                    <NavLink
                    to="/articles/1"
                    // style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    className={({isActive }) => isActive ? 'active' : undefined}>
                    게시글 1
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/articles/2"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    게시글 2
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="/articles/3"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                    게시글 3
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Articles;

/* <NavLink> : 링크에서 사용하는 path가 현재 라우트의 path와 일치하는 경우,
			   특정 스타일 또는 CSS 클래스를 적용하는 컴포넌트 
			  
			   <NavLink> 컴포넌트의 style과 className은
			   { isActive: boolean }을 파라미터로 전달받는 함수 타입의 값을 전달함 */