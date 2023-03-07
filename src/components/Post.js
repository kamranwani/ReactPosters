import classes from "./Post.module.css";
function Post(props) {
  return (
    <ul className={classes.list}>
      <h2 className={classes.heading}>{props.name}</h2>
      <p className={classes.paragraph}>{props.post}</p>
    </ul>
  );
}
export default Post;
