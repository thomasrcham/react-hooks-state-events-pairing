function DownvoteButton({ handleDownvoteClick, downvotes }) {
  return <button onClick={handleDownvoteClick}>{downvotes} 👎</button>;
}

export default DownvoteButton;
