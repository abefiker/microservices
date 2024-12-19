import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await axios.get('http://posts.com/posts');
    console.log(res.data);
    setPosts(res.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
