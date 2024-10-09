import clsx from "clsx";

export default function ToggleButton(props) {
  const { onClick, label, enabled } = props;

  return (
    <div className="flex">
      <button
        onClick={onClick}
        className={clsx(
          "w-12 rounded-full p-1 flex",
          enabled ? "bg-green-600 justify-end" : "bg-zinc-200"
        )}
      >
        <div className="bg-white w-4 h-4 rounded-full"></div>
      </button>
      <div className="ml-2">{label}</div>
    </div>
  );
}
