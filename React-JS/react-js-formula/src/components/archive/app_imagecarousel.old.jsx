import { useState } from "react";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

const App = () => {
  const [imageIdx, setImageIdx] = useState(2);

  return (
    <div className="flex flex-col">
      <div className="text-center mt-4 text-2xl text-slate-500">
        Dog {imageIdx + 1}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-teal-300 rounded-full w-12 h-10 ml-2"
          onClick={() => {
            if (imageIdx > 0) {
              setImageIdx(imageIdx - 1);
            }
          }}
        >
          <i className="fa-solid fa-chevrons-left text-white"></i>
        </button>
        <img
          className="w-[800px] h-[400px] object-cover m-8 rounded-lg"
          src={IMAGE_URLS[imageIdx]}
          alt=""
        />

        <button
          className="bg-teal-300 rounded-full w-12 h-10 mr-2"
          onClick={() => {
            if (imageIdx < IMAGE_URLS.length - 1) {
              setImageIdx(imageIdx + 1);
            }
          }}
        >
          <i className="fa-solid fa-chevrons-right text-white"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
