import PostItem from "./components/PostItem";
import posts from "./components/constants/posts";
import { useState } from "react";

const PAGE_SIZE = 9;

const App = () => {
  const [pageIdx, setPageIdx] = useState(0);

  const postItems = posts
    .slice(PAGE_SIZE * pageIdx, PAGE_SIZE * (pageIdx + 1)) // Formula below
    .map((post, idx) => <PostItem key={idx} post={post} />);

  const numPages = Math.ceil(posts.length / PAGE_SIZE); // rounded up if number of pages is unevenly divided

  const buttons = [];
  for (let i = 0; i < numPages; i += 1) {
    buttons.push(
      <button
        key={i}
        onClick={() => setPageIdx(i)}
        className="bg-gray-400 text-white rounded-sm m-1 w-4"
      >
        {i + 1}
      </button>
    );
  }
  return (
    <div className="flex flex-col items-center py-20">
      <div className="w-full max-w-4xl flex flex-wrap justify-center">
        {postItems}
      </div>
      <div>{buttons}</div>
    </div>
  );
};

export default App;

// Calculating what to show on each page follows this formula
// page 0: items 0  to 9
// page 1: items 9  to 18
// page 2: items 18 to 27
// page 3: items 27 to 36
// ...
// page n: items 9*n to 9*(n + 1)
