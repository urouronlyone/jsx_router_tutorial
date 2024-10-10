import { useParams } from 'react-router-dom';

const data = {
    director: {
        name: '김민준',
        description: '서울삼성병원장',
    },
    doctor: {
        name: '김정형',
        description: '서울삼성병원 정형외과 의사',
    }
} // data 객체에 예시 프로필 데이터들을 key에 담아줌

const Profile = () => {
    const params = useParams();            
    const profile = data[params.username];
// URL 파라미터는 useParams라는 후크를 사용해 객체 형태로 조회할 수 있음
// URL 파라미터의 이름은 라우트 설정을 할 때 Route 컴포넌트의 path props를 통해 설정함

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필</p>

/* Profile 컴포넌트에서는

   useParams라는 후크를 사용해 조회 가능하게 만든, 객체 형태로 설정한
   username URL 파라미터를 통해 프로필 조회

   ▶ true면 프로필 데이터를 보여주고
   ▶ false면 존재하지 않는 프로필이라는 문구를 보여주는 삼항 조건 연산자 로직 */
   
    )}
    </div>
  );
};

export default Profile;

/* 

   





*/



