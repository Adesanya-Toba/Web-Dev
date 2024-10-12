const PropertyItem = (props) => {
  const { property } = props;
  return (
    <div className="m-4 border border-gray-300 rounded-lg overflow-clip">
      <img src={property.imageUrl} alt="" className="w-72 h-64 object-cover" />
      <div className="p-4 text-gray-500">
        <div className="text-xl text-black">{property.address}</div>
        <div>
          {property.city}, {property.state}
        </div>

        <div className="flex justify-between mt-2">
          <div>
            <i className="fa-solid fa-bed text-xl text-blue-400 mr-2"></i>
            {property.bedrooms}
          </div>
          <div>
            <i className="fa-solid fa-toilet text-xl text-blue-400 mr-2"></i>
            {property.bathrooms}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
