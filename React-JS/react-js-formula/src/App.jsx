import messages from "./components/messages";

const App = () => {
  // Implicitly returning a div without the 'return' keyword
  const messageItems = messages.map((msg, idx) => (
    <div key={idx} className="flex border border-zinc-300 rounded-lg m-4 p-4">
      <div className="font-bold mr-2">{msg.user}:</div>
      {msg.text}
    </div>
  ));
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl">{messageItems}</div>
    </div>
  );
};

export default App;
