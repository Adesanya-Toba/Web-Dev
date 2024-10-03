const NavButton = (props) => {
  const { icon, onClick, show } = props;

  return !show ? null : (
    <button className="bg-green-400 text-green rounded-md" onClick={onClick}>
      <i className={`fa-solid ${icon} m-2 text-neutral-50 text-3xl`}></i>
    </button>
  );
};

export default NavButton;
