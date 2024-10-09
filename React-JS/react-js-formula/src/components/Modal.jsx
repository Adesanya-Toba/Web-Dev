export default function Modal(props) {
  const { onClose } = props;
  return (
    <div
      className="bg-stone-700/75 h-full w-full fixed top-0 left-0 backdrop-blur-sm
    flex justify-center items-center"
    >
      <div className="bg-white rounded-lg h-80 w-80 flex flex-col justify-center items-center">
        <div>Modal</div>
        <button onClick={onClose}>click here to close</button>
      </div>
    </div>
  );
}
