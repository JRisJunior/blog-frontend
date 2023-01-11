import { useState } from 'react';
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';

export function Content() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 2,
      title: "___",
      body: "___",
      image: "___",
    },
    {
      id: 3,
      title: "___",
      body: "___",
      image: "___",
    },
  ]);

  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>);
}
