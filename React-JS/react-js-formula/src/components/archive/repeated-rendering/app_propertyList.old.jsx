import properties from "./components/properties";
import PropertyItem from "./components/PropertyItem";

const App = () => {
  const propertyItems = properties.map((property, idx) => (
    <PropertyItem key={idx} property={property} />
  ));
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-5xl flex flex-wrap justify-center">
        {propertyItems}
      </div>
    </div>
  );
};

export default App;
