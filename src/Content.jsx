import { useState, useEffect } from 'react';
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostsIndex posts={posts} />
      <Modal show={handleShowPost}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
