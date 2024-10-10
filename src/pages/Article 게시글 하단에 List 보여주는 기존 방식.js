import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import Articles from '../pages/Articles';

const Article = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>게시글 {id}</h2>
            <Articles />
        </div>
    );
};

export default Article;