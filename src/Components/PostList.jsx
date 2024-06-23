import Post from "./Post";
import { useState } from "react";
import NewPost from "./NewPost";
import Modal from "./Modal";
import styles from "./PostList.module.css";
function PostList({ isPosting, isClosePost }) {
  const [posts, setPost] = useState([]);

  function addPostHandler(postData) {
    setPost((existingPosts) => [postData, ...existingPosts]); //used when new state depends on old state
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={isClosePost}>
          <NewPost onCancel={isClosePost} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={styles.posts}>
        {posts.map(
          (
            post //mapping elements in an array to an object
          ) => (
            <Post key={post.body} author={post.author} body={post.body} />
          )
        )}
      </ul>
    </>
  );
}
export default PostList;
