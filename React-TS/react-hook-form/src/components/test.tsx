// 1. Define the type for an array of objects
type Item = {
  id: number;
  name: string;
  price: number;
};

// 2. Define the type for the props
type MyComponentProps = {
  items: Item[]; // This prop will accept an array of objects of type 'Item'
};

// 3. Define the component using 'function' syntax and type the props
function MyComponent(props: MyComponentProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">Items List</h1>
      <ul>
        {props.items.map((item) => (
          <li key={item.id} className="p-2 border-b">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 4. Use the component and pass the required array of objects as props
const App = () => {
  const itemz = [
    { id: 1, name: "Item One", price: 29.99 },
    { id: 2, name: "Item Two", price: 19.99 },
    { id: 3, name: "Item Three", price: 9.99 },
  ];

  return (
    <div className="p-4">
      <MyComponent items={itemz} />
    </div>
  );
};

export default App;
