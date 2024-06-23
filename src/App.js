import PostList from "./Components/PostList";
import MainHeader from "./Components/MainHeader";
import { useState } from "react";

function App() {
  const [visibleModalFlag, setModalVisible] = useState(false);

  function showModalHandler(event) {
    setModalVisible(true);
  }

  function hideModalHandler(event) {
    setModalVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={visibleModalFlag} isClosePost={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
