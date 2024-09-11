import Dog from "./Dog";

const Box4 = () => {
  return (
    <div className="flex flex-col justify-around items-end h-64 p-4 m-4 border-2 border-red-700">
      <Dog />
      <Dog />
      <Dog />
    </div>
  );
};

export default Box4;
