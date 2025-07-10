import React, { useEffect, useState } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => {
        setPosts(json);
        setLoading(false);
      })
  }, []);

  if(loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <h1 className="text-4xl flex justify-center p-3 m-3">Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 m-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-stone-700 rounded-xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h2 className="flex justify-center items-center text-xl mb-3 text-cyan-200">
              {post.id}. {post.title}
            </h2>
            <p className="text-sm text-stone-200 line-clamp-4">{post.body}</p>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-medium py-2 px-4 rounded cursor-pointer self-start">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
