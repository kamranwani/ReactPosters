import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [Overlay, setOverlay] = useState(false);
  function showOverlay() {
    setOverlay(true);
  }
  function hideOverlay() {
    setOverlay(false);
  }
  return (
    <>
      <MainHeader showOverlay={showOverlay} />
      <main className="main-posts">
        <PostList
          isPosting={Overlay}
          hideOverlay={hideOverlay}
          onCancelModal={hideOverlay}
        />
      </main>
    </>
  );
}

export default App;
