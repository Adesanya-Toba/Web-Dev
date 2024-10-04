const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="m-8">
      <div className="py-4 text-3xl text-center text-yellow-100 bg-yellow-500 rounded-t-lg">
        {recipe.name}
      </div>
      <img
        className="object-cover w-[400px] h-[320px] rounded-b-lg"
        src={recipe.image_url}
        alt=""
      />
    </div>
  );
};

export default RecipeCard;
