import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
function PostList({ isPosting, hideOverlay, onCancelModal }) {
  const [postDetails, setPostDetails] = useState([]);
  function getPostData(data) {
    setPostDetails((prevState) => [...prevState, data]);
  }
  return (
    <>
      {isPosting && (
        <Modal hideOverlay={hideOverlay}>
          <NewPost onCancelModal={onCancelModal} getPostData={getPostData} />
        </Modal>
      )}
      <div className={classes.list}>
        {postDetails.map((post) => (
          <Post name={post.Name} post={post.Post} />
        ))}
      </div>
    </>
  );
}
export default PostList;
