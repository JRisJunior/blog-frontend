export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props['posts'].map(post => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <button onClick={() => props.onSelectPost(post)}>More Info!</button>
        </div>
      ))}
    </div>
  );
}


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}