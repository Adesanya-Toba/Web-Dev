const PostItem = (props) => {
  const { post } = props;
  return (
    // Using relative and absolute to make any children div relative to the position of the parent
    // Basically, we can alter the top-to-bottom div creation flow and place children objects (absolute)
    // any where we want relative to the parent (relative).
    <div className="m-4 rounded-lg overflow-clip relative shadow-xl">
      <img src={post.image} alt="" className="w-64 h-64 object-cover" />
      <div className="absolute top-0 right-0 m-2 px-2 bg-gray-800/70 text-white rounded-full text-sm">
        <i className="fa-regular fa-heart text-rose-300 mr-1"></i>
        {post.likes}
      </div>
    </div>
  );
};

export default PostItem;
