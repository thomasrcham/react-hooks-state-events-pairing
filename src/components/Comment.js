function Comment({ item }) {
  return (
    <>
      <h2>{item.user}</h2>
      <p>{item.comment}</p>
    </>
  );
}

export default Comment;
