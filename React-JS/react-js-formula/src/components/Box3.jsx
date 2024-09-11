import Dog from "./Dog";

const Box3 = () => {
  return (
    <div className="flex flex-col items-center justify-end h-64 p-4 m-4 border-2 border-cyan-400">
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
};

export default Box3;
