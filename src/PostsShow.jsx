export function PostsShow(props) {
  console.log(props);
  return (
    <div>
      <p><strong>title: </strong>{props.post.title}</p>
      <p><strong>body: </strong>{props.post.body}</p>
      <p><strong>image: </strong>{props.post.image}</p>
    </div>
  );
}