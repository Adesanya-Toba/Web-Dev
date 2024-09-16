const Footer = () => {
  return (
    <div className="flex justify-between bg-violet-100 text-violet-400 p-2">
      <div>(this site is not real)</div>
      <div>
        made with <i className="fa-duotone fa-heart text-red-600"></i> and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          className="text-violet-500 underline"
        >
          Tailwind CSS
        </a>
        {/* */}
      </div>
      <div>by Toba</div>
    </div>
  );
};

export default Footer;
