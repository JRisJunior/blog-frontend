import { useState, useEffect } from 'react';
import axios from "axios";
import { PostsNew } from './PostsNew';
import { PostsIndex } from './PostsIndex';
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts", params).then((response => {
      setPosts([...posts, response.data]);
    }));
  };

  const handleUpdatePost = (params, postId) => {
    console.log(postId);
    axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
      console.log(response.data);
      setPosts(posts.map(post => {
        if (post.id === response.data.id) {
          return response.data;
        } else {
          return post;
        }
      }));
      handleHidePost();
    });
  };


  return (
    <div className="container">
      <PostsNew onCreatePost={handleCreatePost}/>
      <hr />
      <hr />
      <Signup />
      <hr />
      <Login />
      <hr />
      <LogoutLink />
      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost}/>
      </Modal>
    </div>
  );
}
