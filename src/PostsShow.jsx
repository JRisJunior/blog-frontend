export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(props.post);
    props.onUpdatePost(params, props.post.id);
  };

  // const handleDelete = () = => {
  //   console.log('handling delete');
  //   props.onDestroyPost(props.post);
  // }
  console.log(props);
  return (
    <div>
      <p><strong>id: </strong>{props.post.id}</p>
      <p><strong>title: </strong>{props.post.title}</p>
      <p><strong>body: </strong>{props.post.body}</p>
      <p><strong>image: </strong>{props.post.image}</p>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input name="title" type="text" />
          </div>
          <div>
            Body: <input name="body" type="text" />
          </div>
          <button type="submit">Update post</button>
        </form>
        <button>Delete Post</button>
      </div>
    </div>
  );
}

//  onClick={handleDelete} in delete post button