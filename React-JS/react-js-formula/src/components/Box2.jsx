import Dog from "./Dog";

const Box2 = () => {
  return (
    <div className="flex flex-col justify-between items-center h-64 p-4 m-4 border-2 border-gray-300">
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
};

export default Box2;
