import Comment from "./Comment";

function Comments({ video }) {
  const comments = video.comments;

  return (
    <>
      <h1>{video.comments.length} Comments</h1>
      {comments.map((item) => (
        <Comment key={item.id} item={item} />
      ))}
    </>
  );
}

export default Comments;
