import { useState, useEffect } from 'react'
import axios from "axios"

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>);
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>);
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
    </div>);
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
    </div>);
}

function Content() {

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



function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;