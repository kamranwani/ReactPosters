import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost(props) {
  const [postName, setPostName] = useState("");
  const [postDetails, setPostDetails] = useState("");
  function nameChanged(e) {
    setPostName(e.target.value);
  }
  function detailsChanged(e) {
    setPostDetails(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      Post: postDetails,
      Name: postName,
    };
    props.getPostData(data);
    props.onCancelModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name" className={classes.label}>
          Name:
        </label>
        <input type="text" id="name" required onChange={nameChanged} />
      </p>
      <p>
        <label className={classes.label} htmlFor="body">
          Post Details:
        </label>
        <textarea id="body" required rows={3} onChange={detailsChanged} />
      </p>
      <p className={classes.action}>
        <button
          type="button"
          className={classes.cancel}
          onClick={props.onCancelModal}
        >
          Cancel
        </button>
        <button className={classes.submit}>Submit</button>
      </p>
    </form>
  );
}
export default NewPost;
