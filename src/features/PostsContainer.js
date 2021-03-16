import React from "react";
import styles from "./PostsContainer.module.css";

function PostsContainer() {
  return (
    <aside className={styles.aside}>
      <div className={styles.postDarkTheme}>
        <h3 className={styles.postDarkThemeTitle}>
          Lorem ipsum dolor sit amet
        </h3>
        <p className={styles.postDarkThemeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          nunc vel urna facilisis dignissim. Nullam at aliquet nulla, id pretium
          velit. Pellentesque quis sodales lacus, at consectetur sem.
        </p>
      </div>
      <div className={styles.postDarkTheme}>
        <h3 className={styles.postDarkThemeTitle}>
          Lorem ipsum dolor sit amet
        </h3>
        <p className={styles.postDarkThemeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          nunc vel urna facilisis dignissim. Nullam at aliquet nulla, id pretium
          velit. Pellentesque quis sodales lacus, at consectetur sem.
        </p>
        <img
          className={styles.postDarkThemeImg}
          src="https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80"
          alt="tarot cards"
        />
      </div>
    </aside>
  );
}

export default PostsContainer;
