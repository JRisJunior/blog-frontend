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

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };



  return (
    <div>
      <PostsNew />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
