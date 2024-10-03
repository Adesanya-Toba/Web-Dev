const CarCard = (props) => {
  const { cat } = props;
  return (
    <div className="border border-neutral-500 m-6 rounded-lg">
      <img
        src={cat.imageUrl}
        alt=""
        className="w-80 h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <div className="flex text-neutral-600">
          <div className="mr-2 font-bold w-24 ">name</div>
          <div>{cat.name}</div>
        </div>
        <div className="flex text-neutral-600">
          <div className="mr-2 font-bold w-24 ">breed</div>
          <div>{cat.breed}</div>
        </div>
        <div className="flex text-neutral-600">
          <div className="mr-2 font-bold w-24 ">age</div>
          <div>{cat.age}</div>
        </div>
        <div className="flex text-neutral-600">
          <div className="mr-2 font-bold w-24 ">location</div>
          <div>{cat.location}</div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
