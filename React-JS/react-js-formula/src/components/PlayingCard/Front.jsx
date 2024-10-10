import clsx from "clsx";

const Front = (props) => {
  const { value, icon, color } = props;
  return (
    <div
      className={clsx(
        "rounded-lg border-4 border-black w-40 h-56 m-4 text-5xl flex flex-col justify-between items-center p-2",
        color
      )}
    >
      <div className="w-full">{value}</div>
      <i className={clsx("fa-solid", icon)}></i>
      <div className="w-full flex justify-end">A</div>
    </div>
  );
};

export default Front;
