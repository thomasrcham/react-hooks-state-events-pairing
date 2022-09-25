function UpvoteButton({ handleUpvoteClick, upvotes }) {
  return <button onClick={handleUpvoteClick}>{upvotes} 👍</button>;
}

export default UpvoteButton;
