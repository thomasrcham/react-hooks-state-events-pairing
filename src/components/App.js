import { useState } from "react";
import video from "../data/video.js";
import Video from "./Video";
import UpvoteButton from "./Upvote";
import DownvoteButton from "./Downvote";
import Comments from "./Comments";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  function handleUpvoteClick() {
    const newUpvotes = upvotes + 1;
    setUpvotes(newUpvotes);
  }

  function handleDownvoteClick() {
    const newDownvotes = downvotes + 1;
    setDownvotes(newDownvotes);
  }

  function handleShowComments() {
    const newShowComments = !showComments;
    setShowComments(newShowComments);
  }

  return (
    <div className="App">
      <Video video={video} />
      <UpvoteButton handleUpvoteClick={handleUpvoteClick} upvotes={upvotes} />
      <DownvoteButton
        handleDownvoteClick={handleDownvoteClick}
        downvotes={downvotes}
      />
      <br />
      <button onClick={handleShowComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      <hr></hr>
      {showComments ? <Comments video={video} /> : null}
    </div>
  );
}

export default App;
