import { useState, useEffect } from 'react';
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";


export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };


  useEffect(handleIndexPosts, []);



  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleShowPost = (post) => {
    console.log(post);
    setCurrentPost(post);
    setIsPostsShowVisible(true);
  };




  return (
    <div className="container">
      <PostsNew />
      <hr />
      <hr />
      <Signup />
      <hr />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost}/>
      </Modal>
    </div>
  );
}
